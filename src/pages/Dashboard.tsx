import { useState } from "react";
import { List, Settings } from "lucide-react";
import { URLQRList } from "../components/dashboard";
import { UserSettings } from "../components/dashboard";
import { DashboardOptions } from "../types";

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<DashboardOptions>(
    DashboardOptions.LINKS
  );

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="bg-gray-100 container mx-auto mb-5 px-5 md:px-10 py-8 rounded-xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Dashboard</h1>
        <div className="flex mb-6 relative border-b-2 border-gray-300">
          <button
            className={`relative text-base md:font-medium md:text-lg flex items-center px-6 py-2 transition-all duration-300 ease-in-out rounded-t-md 
              ${
                activeTab === DashboardOptions.LINKS
                  ? "text-primary font-semibold"
                  : "text-gray-600 hover:text-primary"
              }`}
            onClick={() => setActiveTab(DashboardOptions.LINKS)}
          >
            <List size={18} className="mr-2" />
            URLs and QRs
            {activeTab === DashboardOptions.LINKS && (
              <span className="absolute bottom-[-2px] left-0 w-full h-[3px] bg-accent transition-all duration-300"></span>
            )}
          </button>
          <button
            className={`relative text-base md:font-medium md:text-lg flex items-center px-6 py-2 transition-all duration-300 ease-in-out rounded-t-md
              ${
                activeTab === DashboardOptions.SETTINGS
                  ? "text-primary font-semibold"
                  : "text-gray-600 hover:text-primary"
              }`}
            onClick={() => setActiveTab(DashboardOptions.SETTINGS)}
          >
            <Settings size={18} className="mr-2" />
            Settings
            {activeTab === DashboardOptions.SETTINGS && (
              <span className="absolute bottom-[-2px] left-0 w-full h-[3px] bg-accent transition-all duration-300"></span>
            )}
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          {activeTab === DashboardOptions.LINKS ? <URLQRList /> : <UserSettings />}
        </div>
      </div>
    </div>
  );
};
