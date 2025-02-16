import { FC } from "react";
import { AppLink } from "./index.styles";
import { NavLinkProps } from "react-router-dom";

const Link: FC<NavLinkProps> = ({ children, ...props }) => {
  return <AppLink {...props}>{children}</AppLink>;
};

export default Link;
