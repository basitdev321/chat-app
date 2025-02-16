import { FC } from "react";
import StatusIndicator from "@/components/design-components/status/index";
import { IUser } from "@/types";
import { CameraIcon } from "@/components/design-components/icons";
import CommonTable from "@/components/design-components/table";

interface IUserTableProps {
  data: IUser[];
  callPeer: (socketId: string) => void;
  setCaller: (socketId: string) => void;
}

const UserTable: FC<IUserTableProps> = ({ data, callPeer, setCaller }) => {
  const columns = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "status",
      label: "Status",
      render: (status: { value: string; lastSeen: string }) => {
        return (
          <StatusIndicator status={status.value} lastSeen={status.lastSeen} />
        );
      },
    },
    {
      key: "action",
      label: "Action",
      render: (_: string, user: IUser) => {
        const online = user?.status.value === "online";
        return online ? (
          <>
            <span
              style={{
                cursor: "pointer",
                height: "25px",
                width: "35px",
                fontSize: "25px",
                display: "inline-block",
              }}
              onClick={async () => {}}
            >
              🎧
            </span>
            <span
              style={{
                cursor: "pointer",
                height: "25px",
                width: "25px",
                display: "inline-block",
              }}
              onClick={() => {
                callPeer(user.socketId);
                setCaller(user.socketId);
              }}
            >
              <CameraIcon />
            </span>
          </>
        ) : (
          <>
            <span
              style={{
                cursor: "not-allowed",
                opacity: 0.3,
                height: "25px",
                fontSize: "25px",
                width: "35px",
                display: "inline-block",
              }}
            >
              🎧
            </span>
            <span
              style={{
                cursor: "not-allowed",
                opacity: 0.3,
                height: "25px",
                width: "25px",
                display: "inline-block",
              }}
            >
              <CameraIcon />
            </span>
          </>
        );
      },
    },
  ];

  return <CommonTable data={data} columns={columns} />;
};

export default UserTable;
