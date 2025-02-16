import { useState, useEffect, useRef } from "react";
import { LeftColumn, RightColumn } from "@/pages/homepage/index.styles";
import io, { Socket } from "socket.io-client";
import { IUser, IMessage } from "@/types";
import Button from "@/components/design-components/button";
import Peer from "simple-peer/simplepeer.min.js";
import UserTable from "@/components/users-table";
import Modal from "@/components/design-components/modal";
import Messages from "../messages";

const socket: Socket = io("https://chat-app-server-s47j.onrender.com");
const ChatInput = () => {
  const [username] = useState(() => {
    const storedUsername = localStorage.getItem("token") || "";
    return JSON.parse(storedUsername);
  });
  const [users, setUsers] = useState<IUser[]>([]);
  const user = users.find((u) => u.email === username);
  const [messages, setMessages] = useState<IMessage[]>([]);

  // video call setting
  const [stream, setStream] = useState<MediaStream>();
  const [callAccepted, setCallAccepted] = useState<boolean>(false);
  const [calling, setCalling] = useState<boolean>(false);
  const [callReceiving, setReceivingCall] = useState<boolean>(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] =
    useState<RTCSessionDescriptionInit | null>(null);
  const userVideo = useRef<HTMLVideoElement | null>(null);
  const partnerVideo = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    socket.on("users", (users: IUser[]) => {
      setUsers(users);
    });

    socket.on("groupChat", (groupChat: IMessage[]) => {
      console.log("groupChat", groupChat);
      setMessages(groupChat);
    });

    // asking and getting user camera and mic for video call.
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }
      });

    // emited to this specific user and here it will listen.
    // It will notify us that someone is calling us.
    socket.on("incomingCall", (data) => {
      console.log("incomingCall", data);
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });

    // call callRejected
    socket.on("callRejected", (data) => {
      console.log("callRejected", data);
      setCallAccepted(false);
      setCalling(false);
      setReceivingCall(false);
      setCaller("");
      setCallerSignal(null);
    });

    // call ended
    socket.on("callEnded", () => {
      console.log("callEnded");
      setCallAccepted(false);
      setCalling(false);
      setReceivingCall(false);
      setCaller("");
      setCallerSignal(null);
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = null;
      }
    });
  }, []);

  useEffect(() => {
    socket.emit("connectUser", { email: username });
    // going offline on closing tab or browser.
    window.onbeforeunload = () => {
      socket.emit("offline", { email: username });
      socket.off();
    };

    // useEffect cleanup. Calling this anonymous function when component removing from dom.
    return () => {
      socket.emit("offline", { email: username });
      socket.off();
    };
  }, [username]);

  //
  const callPeer = (id: string) => {
    setCalling(true);
    // creating new peer which will emit signal for hand shake from the person who calling someone.
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    // will listen to signal and emit event to backend. passing caller id, signal data and our id.
    peer.on("signal", (data: RTCSessionDescriptionInit) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: user?.socketId,
      });
    });

    // on handshake from opponent we will get partner stream and storing to ref var.
    peer.on("stream", (stream: MediaStream) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    // if call accepted, it emit an event in which we will notify the opponent to make proper handshake
    socket.on("callAccepted", (signal) => {
      setCalling(false);
      setCallAccepted(true);
      peer.signal(signal);
    });
  };

  const rejectCall = () => {
    setReceivingCall(false);
    setCallAccepted(false);
    setCalling(false);
    socket.emit("rejectCall", { to: caller }); // Notify the caller
    setCaller(""); // Clear caller information
    setCallerSignal(null); // Clear the signal
  };

  const endCall = () => {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peer.destroy();
    socket.emit("endCall", { to: caller });
    partnerVideo.current = null;
    setCalling(false);
    setCallAccepted(false);
    setReceivingCall(false);
    setCaller("");
    setCallerSignal(null);
  };

  const acceptCall = () => {
    setCalling(false);
    setCallAccepted(true);
    setReceivingCall(false);

    // this will create new peer at the caller side, the person which is being called.
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    // if we accept call the emited signal will listen here and
    // we will send response to the person who is calling us.
    peer.on("signal", (data: RTCSessionDescriptionInit) => {
      socket.emit("acceptCall", { signal: data, to: caller });
    });

    // on handshake from opponent we will get partner stream and storing to ref var.
    peer.on("stream", (stream: MediaStream) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    // this will emit signal to opponent that I accepted call and send signalData back to the one
    // who is calling for handshake.
    peer.signal(callerSignal);
  };

  // setting our streaming to put into DOM
  let UserVideo;
  if (stream) {
    UserVideo = (
      <video
        width="17%"
        height="17%"
        style={{ position: "absolute" }}
        playsInline
        muted
        ref={userVideo}
        autoPlay
      />
    );
  }

  // setting our streaming to put into DOM
  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = (
      <video width="80%" height="80%" playsInline ref={partnerVideo} autoPlay />
    );
  }

  const data = users.filter((user) => user.email !== username);
  const callerName = users.find((user) => user.socketId === caller)?.name;

  return (
    <>
      <Modal isOpen={callAccepted}>
        {PartnerVideo}
        {UserVideo}
        <Button variat="danger" style={{ marginLeft: "8%" }} onClick={endCall}>
          End Call
        </Button>
      </Modal>
      <Modal isOpen={callReceiving} modalWidth="17%">
        <div
          style={{
            marginBottom: "10px",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          {callerName} is calling you!
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={acceptCall}>Accept</Button>
          <Button variat="danger" onClick={rejectCall}>
            Reject
          </Button>
        </div>
      </Modal>
      <Modal isOpen={calling} modalWidth="17%">
        <div
          style={{
            marginBottom: "10px",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          You are calling {callerName}
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button variat="warning" onClick={endCall}>
            Cancel
          </Button>
        </div>
      </Modal>
      <LeftColumn
        data-testid="left-column"
        style={{ height: "455px", overflow: "auto" }}
      >
        <UserTable data={data} callPeer={callPeer} setCaller={setCaller} />
      </LeftColumn>
      <RightColumn data-testid="right-column">
        <Messages messages={messages} username={username} socket={socket} />
      </RightColumn>
    </>
  );
};

export default ChatInput;
