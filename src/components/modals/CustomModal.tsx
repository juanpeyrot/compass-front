import { ReactNode, useState } from "react";
import "./styles.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode | ReactNode[];
}

export const CustomModal = ({ isOpen, onClose, children }: Props) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 400);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className={`modal-content ${
          isClosing ? "animate-bounce-out" : "animate-bounce-in"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};