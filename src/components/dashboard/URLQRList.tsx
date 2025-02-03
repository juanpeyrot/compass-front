import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { ServiceEnum } from "../../types";
import { useFetch } from "../../hooks";
import { Filters } from "./Filters";
import { URLList } from "./URLList";
import { QrList } from "./QRList";

export const URLQRList = () => {
	const {} = useFetch(`${import.meta.env.VITE_SERVICE_URL}/urls`);
  const [filter, setFilter] = useState<ServiceEnum>(ServiceEnum.URL);

  return (
    <div>
      <div className="flex flex-col gap-10 sm:gap-0 sm:flex-row items-center justify-between pb-4 mb-4 bg-white p-2 rounded-lg shadow-md">
        <Filters filter={filter} setFilter={setFilter} />
        <button
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md font-medium shadow-lg hover:scale-105 transition-all duration-300"
          onClick={() => console.log("Open modal to create new")}
        >
          <PlusCircle size={18} />
          Create New
        </button>
      </div>
      {filter === ServiceEnum.URL ? <URLList /> : null}
			{filter === ServiceEnum.QR ? <QrList /> : null}
    </div>
  );
};
