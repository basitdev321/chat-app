import { ModalOverlay, ModalContent } from "./index.styles";

const Modal = ({
  children,
  isOpen,
  modalWidth,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  modalWidth?: string;
}) => {
  return (
    <ModalOverlay $isOpen={isOpen}>
      <ModalContent style={{ width: modalWidth }}>
        <div>{children}</div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
