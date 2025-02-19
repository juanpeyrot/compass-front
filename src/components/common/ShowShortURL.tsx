import { useState } from "react";

interface ShowShortURLProps {
  shortUrl: string;
}

export const ShowShortURL = ({ shortUrl }: ShowShortURLProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${window.location.origin}/${shortUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!shortUrl) return null;

  return (
    <div className="mt-2 flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm w-full max-w-md">
      <input
        type="text"
        value={`${window.location.origin}/${shortUrl}`}
        readOnly
        className="w-full text-gray-700 text-sm px-2 outline-none bg-transparent"
      />
      <button
        onClick={handleCopy}
        className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};
