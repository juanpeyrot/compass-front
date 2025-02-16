import { QrCode } from "lucide-react";
import { Qr } from "../../types";
import { useState } from "react";
import { CustomModal } from "../modals/CustomModal";
import { QRCard } from "./QRCard";

interface ViewQRButtonProps {
  qr: Qr;
}

export const ViewQRButton = ({ qr }: ViewQRButtonProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="flex items-center text-gray-600 text-sm"
      >
        <QrCode className="mr-1" size={16} />
        <span className="text-accent hover:underline">QR Code</span>
      </button>

      <CustomModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="p-5">
          <QRCard qr={qr} className="border-0" />
        </div>
      </CustomModal>
    </>
  );
};
