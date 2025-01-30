import { Link, QrCode } from "lucide-react";
import { ServiceEnum } from "../../types";
import { Dispatch, SetStateAction } from "react";

interface SwitchProps {
  activeTab: ServiceEnum;
  setActiveTab: Dispatch<SetStateAction<ServiceEnum>>;
}

export const Switch: React.FC<SwitchProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white rounded-full p-1 flex shadow-md">
        <button
          className={`text-base md:font-medium md:text-lg flex items-center px-4 py-2 rounded-full transition-colors ${
            activeTab === ServiceEnum.URL ? "bg-gray-900 text-white" : "text-text"
          }`}
          onClick={() => setActiveTab(ServiceEnum.URL)}
        >
          <Link size={18} className="mr-2" />
          URL Shortener
        </button>
        <button
          className={`text-base md:font-medium md:text-lg flex items-center px-4 py-2 rounded-full transition-colors ${
            activeTab === ServiceEnum.QR ? "bg-gray-900 text-white" : "text-text"
          }`}
          onClick={() => setActiveTab(ServiceEnum.QR)}
        >
          <QrCode size={18} className="mr-2" />
          QR Generator
        </button>
      </div>
    </div>
  )
}