import { Dispatch, SetStateAction } from "react";
import { ServiceEnum } from "../../types";

interface FiltersProps {
  filter: ServiceEnum | "all";
  setFilter: Dispatch<SetStateAction<ServiceEnum>>;
}

export const Filters = ({ filter, setFilter }: FiltersProps) => {
  return (
    <div className="flex">
      <button
        className={`px-3 sm:px-6 py-2 transition-all duration-300 ease-in-out font-medium
            ${
              filter === ServiceEnum.URL
                ? "bg-gray-900 text-white shadow-md scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        onClick={() => setFilter(ServiceEnum.URL)}
      >
        URLs
      </button>
      <button
        className={`px-3 sm:px-6 py-2 rounded-r-md transition-all duration-300 ease-in-out font-medium
            ${
              filter === ServiceEnum.QR
                ? "bg-gray-900 text-white shadow-md scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        onClick={() => setFilter(ServiceEnum.QR)}
      >
        QR Codes
      </button>
    </div>
  );
};
