import { Spinner, SpinnerWrapper } from "./index.styles";
import { ISpinnerProps } from "@/types";

const LoadingSpinner: React.FC<ISpinnerProps> = ({
  color = "#fff",
  width = "40px",
  height = "40px",
  align,
}) => {
  return (
    <SpinnerWrapper $align={align} data-testid="spinner">
      <Spinner $color={color} $width={width} $height={height} />
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
