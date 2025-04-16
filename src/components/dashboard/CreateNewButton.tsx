import { ServiceEnum } from "../../types";
import { PlusCircle } from "lucide-react";
import { CustomModal } from "../modals/CustomModal";
import { useState } from "react";
import { ShortURLForm } from "../forms/ShortURLForm";
import { QRForm } from "../main";

interface CreateNewButtonProps {
  selected: ServiceEnum;
	onCreated: () => void;
}

export const CreateNewButton = ({ selected, onCreated }: CreateNewButtonProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <button
        className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md font-medium shadow-lg hover:scale-105 transition-all duration-300"
        onClick={() => setClicked(true)}
      >
        <PlusCircle size={18} />
        Create New
      </button>

      <CustomModal
        isOpen={clicked && selected === ServiceEnum.URL}
        onClose={() => setClicked(false)}
      >
        <article className="p-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-primary">
            Shorten a new URL
          </h2>
          <ShortURLForm includeQrGenerator={true} onCreated={onCreated} />
        </article>
      </CustomModal>

      <CustomModal
        isOpen={clicked && selected === ServiceEnum.QR}
        onClose={() => setClicked(false)}
      >
        <QRForm />
      </CustomModal>
    </>
  );
};
