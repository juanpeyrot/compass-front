import { useState } from "react";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Switch } from "./components/main/Switch";
import { ServiceEnum } from "./types";
import { QRGenerator, URLShortener } from "./components/main";


export const App = () => {
	const [activeTab, setActiveTab] = useState<ServiceEnum>(ServiceEnum.URL)

	return (
		<div className="min-h-screen bg-background flex flex-col">
			<Navbar />
			<Hero />
			<main className="bg-gray-200 flex-grow -mt-16 relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <Switch activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "url" ? <URLShortener /> : <QRGenerator />}
          </div>
        </div>
      </main>
		</div>
	)
}