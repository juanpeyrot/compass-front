import { useState } from "react";
import { Hero } from "../components/hero";
import { QRForm, Switch, URLShortener } from "../components/main";
import { ServiceEnum } from "../types";

export const HomePage = () => {
	const [activeTab, setActiveTab] = useState<ServiceEnum>(ServiceEnum.URL)
  return (
    <>
      <Hero />
      <main className="bg-gray-200 flex-grow -mt-16 relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <Switch activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "url" ? <URLShortener /> : <QRForm />}
          </div>
        </div>
      </main>
    </>
  );
};