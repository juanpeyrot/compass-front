import { Download, Eye, QrCode, User } from "lucide-react";
import { Qr } from "../../types";

interface QRCardProps {
  qr: Qr;
  className?: string;
}

export const QRCard = ({ qr, className }: QRCardProps) => {
  return (
    <li
      key={qr.id}
      className={`border rounded-md p-4 shadow-sm bg-white ${className}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <QrCode size={18} className="mr-2 text-primary" />
          <span className="font-semibold">QR Code</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Eye className="mr-1" size={16} /> {qr.timesVisited} visits
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={qr.qrImage}
          alt="QR Code"
          className="w-32 h-32 object-contain border p-2 rounded-md shadow-sm"
        />
      </div>

      <div className="flex justify-center mt-4">
        <a
          href={qr.qrImage}
          download
          className="flex items-center px-4 py-2 text-gray-900 font-medium rounded-md hover:bg-primary-dark"
        >
          <Download size={18} className="mr-2" />
          Download QR
        </a>
      </div>

      <p className="text-sm text-gray-600 mt-2">
        <strong>Link:</strong>{" "}
        <a href={qr.link} className="text-accent hover:underline">
          {qr.link}
        </a>
      </p>

      <p className="text-sm text-gray-500 mt-2 flex items-center flex-wrap">
        <User size={16} className="mr-1 text-gray-500" />
        Created by:{" "}
        <span className="font-semibold ml-1">
          {qr.createdBy.username}
        </span> on {new Date(qr.createdAt).toLocaleDateString()}
      </p>
    </li>
  );
};
