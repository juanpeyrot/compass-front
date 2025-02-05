import { useState } from "react";
import { ServiceEnum } from "../../types";
import { useFetch } from "../../hooks";
import { Filters } from "./Filters";
import { URLList } from "./URLList";
import { QrList } from "./QRList";
import { CreateNewButton } from "./CreateNewButton";

export const URLQRList = () => {
	const {} = useFetch(`${import.meta.env.VITE_SERVICE_URL}/urls`);
  const [filter, setFilter] = useState<ServiceEnum>(ServiceEnum.URL);

  return (
    <div>
      <div className="flex flex-col gap-10 sm:gap-0 sm:flex-row items-center justify-between pb-4 mb-4 bg-white p-2 rounded-lg shadow-md">
        <Filters filter={filter} setFilter={setFilter} />
        <CreateNewButton selected={filter} />
      </div>
      {filter === ServiceEnum.URL ? <URLList /> : null}
			{filter === ServiceEnum.QR ? <QrList /> : null}
    </div>
  );
};
