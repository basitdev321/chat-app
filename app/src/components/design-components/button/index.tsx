import { FC } from "react";
import { AppButton } from "./index.styles";
import Spinner from "@/components/design-components/spinner";
import { IButtonProps } from "@/types";

const Button: FC<IButtonProps> = ({
  children,
  variat = "primary",
  isLoading = false,
  ...props
}) => {
  return (
    <AppButton $variat={variat} {...props}>
      {isLoading && <Spinner width="13px" height="13px" />}
      {children}
    </AppButton>
  );
};

export default Button;
