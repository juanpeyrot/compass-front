import { useState } from "react";
import { Link, QrCode, PlusCircle } from "lucide-react";
import { ServiceEnum } from "../../types";

type Item = {
  id: string;
  type: ServiceEnum;
  originalUrl: string;
  shortUrl?: string;
  qrCodeUrl?: string;
  createdAt: string;
};

export const URLQRList: React.FC = () => {
  const [filter, setFilter] = useState<"all" | ServiceEnum>("all");
  const [items, setItems] = useState<Item[]>([
    {
      id: "1",
      type: ServiceEnum.URL,
      originalUrl: "https://example.com",
      shortUrl: "https://cmp.ss/abc123",
      createdAt: "2023-05-01",
    },
    {
      id: "2",
      type: ServiceEnum.QR,
      originalUrl: "https://example.org",
      qrCodeUrl:
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.org",
      createdAt: "2023-05-02",
    },
  ]);

  const filteredItems = items.filter(
    (item) => filter === "all" || item.type === filter
  );

  return (
    <div>
      <div className="flex flex-col gap-10 sm:gap-0 sm:flex-row items-center justify-between pb-4 mb-4 bg-white p-2 rounded-lg shadow-md">
        <div className="flex">
          <button
            className={`px-3 sm:px-6 py-2 rounded-l-md transition-all duration-300 ease-in-out font-medium
            ${
              filter === "all"
                ? "bg-gray-900 text-white shadow-md scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
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
        <button
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md font-medium shadow-lg hover:scale-105 transition-all duration-300"
          onClick={() => console.log("Open modal to create new")}
        >
          <PlusCircle size={18} />
          Create New
        </button>
      </div>

      <ul className="space-y-4">
        {filteredItems.map((item) => (
          <li key={item.id} className="border rounded-md p-4">
            <div className="flex items-center mb-2">
              {item.type === ServiceEnum.URL ? (
                <Link size={18} className="mr-2 text-primary" />
              ) : (
                <QrCode size={18} className="mr-2 text-primary" />
              )}
              <span className="font-semibold">
                {item.type === ServiceEnum.URL ? "Shortened URL" : "QR Code"}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-1">
              Original: {item.originalUrl}
            </p>
            {item.shortUrl && (
              <p className="text-sm text-gray-600 mb-1">
                Short:{" "}
                <a href={item.shortUrl} className="text-accent hover:underline">
                  {item.shortUrl}
                </a>
              </p>
            )}
            {item.qrCodeUrl && (
              <img
                src={item.qrCodeUrl || "/placeholder.svg"}
                alt="QR Code"
                className="w-24 h-24 mt-2"
              />
            )}
            <p className="text-xs text-gray-500 mt-2">
              Created on: {item.createdAt}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
