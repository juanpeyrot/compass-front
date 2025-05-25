import { useState } from "react";
import { Copy, Eye, LinkIcon, Lock } from "lucide-react";
import { Link, LinkPublicInfo, Qr } from "../../types";
import { CreateQRCodeButton } from "./CreateQRCodeButton";
import { ViewQRButton } from "./ViewQRButton";
import { useFetch } from "../../hooks";
import { Loader } from "../common";

interface URLCardProps {
  item: Link;
}

export const URLCard = ({ item }: URLCardProps) => {
  const { data, fetchData, loading } = useFetch<LinkPublicInfo>(
    `${import.meta.env.VITE_SERVICE_URL}/links/${item.id}`
  );
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/${item.shortUrl}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <li className="relative border rounded-md p-4 shadow-sm bg-white">
      {loading && (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-10">
          <Loader />
        </div>
      )}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-2">
        <div className="flex items-center">
          <LinkIcon size={18} className="mr-2 text-primary" />
          <span className="font-semibold">Shortened URL</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Eye className="mr-1" size={16} /> {item.clicks} clicks
          </div>
          {item.qr || data?.qr ? (
            <ViewQRButton qr={item.qr || (data?.qr as Qr)} />
          ) : (
            <CreateQRCodeButton link={item} handleRefresh={fetchData} />
          )}
        </div>
      </div>

      {item.isProtected ? (
        <div className="flex items-center">
          <Lock size={18} className="mr-2 text-primary" />
          <span className="font-semibold">Protected</span>
        </div>
      ) : null}

      <p className="text-sm text-gray-600">
        <strong>Short URL:</strong>{" "}
        <a
          href={`${import.meta.env.VITE_URL}/${item.shortUrl}`}
          className="text-accent hover:underline"
          target="_blank"
        >
          {`${import.meta.env.VITE_URL}/${item.shortUrl}`}
        </a>
      </p>

      <p className="text-sm text-gray-600">
        <strong>Destination:</strong>{" "}
        <a href={item.link} className="text-accent hover:underline">
          {item.link}
        </a>
      </p>

      <p className="text-sm text-gray-600">
        <strong>Description:</strong> {item.description}
      </p>

      <p className="text-sm text-gray-500 mt-2">
        {new Date(item.createdAt).toLocaleDateString()}
      </p>

      <button
        onClick={handleCopy}
        className="flex flex-row items-center justify-center gap-4 px-4 py-2 mt-2 text-md font-medium text-white bg-gray-900 border-2 border-transparent rounded-xl transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-gray-900"
      >
        <Copy />
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </li>
  );
};
