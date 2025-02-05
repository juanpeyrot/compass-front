import { ServiceEnum } from "../../types";
import { PlusCircle } from "lucide-react";
import { CustomModal } from "../modals/CustomModal";
import { useState } from "react";

interface CreateNewButtonProps {
  selected: ServiceEnum;
}

export const CreateNewButton = ({ selected }: CreateNewButtonProps) => {
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
        URL
      </CustomModal>

			<CustomModal
        isOpen={clicked && selected === ServiceEnum.QR}
        onClose={() => setClicked(false)}
      >
        QR
      </CustomModal>
    </>
  );
};
