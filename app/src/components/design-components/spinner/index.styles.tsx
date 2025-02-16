import styled, { keyframes } from "styled-components";

interface ISpinnerProps {
  $color: string;
  $width: string;
  $height: string;
}

interface ISpinnerWrapperProps {
  $align?: "start" | "center" | "end";
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<ISpinnerProps>`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  display: inline-block;

  ${({ $color, $width, $height }) => `
    border: 4px solid rgb(104 99 99 / 30%);
    border-top: 4px solid ${$color};
    width: ${$width};
    height: ${$height};
  `}
`;

export const SpinnerWrapper = styled.div<ISpinnerWrapperProps>`
  display: inline-block;

  ${({ $align }) =>
    $align &&
    `
    margin: 10px auto;
    display: flex;
    justify-content: ${$align};
  `}
`;
