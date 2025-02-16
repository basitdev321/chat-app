import { StatusContainer, StatusIndicator, LastSeenText } from "./index.styles";

type StatusProps = {
  status: string;
  lastSeen?: string;
};

const Status = ({ status, lastSeen }: StatusProps) => {
  const calculateTimeDifference = (timestamp: string): string => {
    const lastSeenTime = new Date(timestamp).getTime();
    const currentTime = Date.now();
    const diffInMs = currentTime - lastSeenTime;

    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInMinutes < 60) {
      return `${diffInMinutes} min${diffInMinutes !== 1 ? "s" : ""} ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
    } else {
      return `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
    }
  };

  return (
    <StatusContainer>
      <StatusIndicator $status={status} />
      {status === "online" ? (
        <span>Online</span>
      ) : (
        <>
          <span>Offline</span>
          {lastSeen && (
            <LastSeenText>
              (Last seen: {calculateTimeDifference(lastSeen)})
            </LastSeenText>
          )}
        </>
      )}
    </StatusContainer>
  );
};

export default Status;
