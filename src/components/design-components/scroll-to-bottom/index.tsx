import React, { FC } from "react";
import { ScrollContainer } from "./index.styles";

const ScrollToBottomComponent: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ScrollContainer>{children}</ScrollContainer>;
};

export default ScrollToBottomComponent;
