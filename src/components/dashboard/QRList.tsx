import { useEffect, useState } from "react";
import { Qr } from "../../types";
import { useFetch } from "../../hooks";
import { useUserStore } from "../../store";
import Pagination from "./Pagination";
import { ListResponse } from "../../types/common";
import { Loader } from "../Loader";
import { Download, Eye, QrCode, User } from "lucide-react";
import { ErrorMessage } from "../ErrorMessage";

export const QrList = () => {
  const { user } = useUserStore();
  const [qrs, setQrs] = useState<Qr[]>([]);
  const [limit] = useState(10);
  const [offset, setOffset] = useState(0);
  const { data, loading, error, fetchData } = useFetch<ListResponse<Qr>>(
    `${import.meta.env.VITE_SERVICE_URL}/qrs`
  );

  useEffect(() => {
    if (!user) return;
    fetchData(
      {},
      {
        userId: user.id,
        limit: limit,
        offset: offset,
      }
    );
  }, [user]);

  useEffect(() => {
    if (!data) return;
    setQrs(data.results);
  }, [data]);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

	if (error) {
		return <ErrorMessage error={error} />
	}

  return (
    <ul className="space-y-4">
      {qrs.map((qrItem) => (
        <li key={qrItem.id} className="border rounded-md p-4 shadow-sm bg-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <QrCode size={18} className="mr-2 text-primary" />
              <span className="font-semibold">QR Code</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600 text-sm">
                <Eye className="mr-1" size={16} /> {qrItem.timesVisited} visits
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <a href={qrItem.qrImage} target="_blank" rel="noopener noreferrer">
              <img
                src={qrItem.qrImage}
                alt="QR Code"
                className="w-32 h-32 object-contain border p-2 rounded-md shadow-sm"
              />
            </a>
          </div>

					<div className="flex justify-center mt-4">
            <a
              href={qrItem.qrImage}
              download
              className="flex items-center px-4 py-2 text-gray-900 font-medium rounded-md hover:bg-primary-dark"
            >
              <Download size={18} className="mr-2" />
              Download QR
            </a>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            <strong>Link:</strong>{" "}
            <a href={qrItem.link} className="text-accent hover:underline">
              {qrItem.link}
            </a>
          </p>

          <p className="text-sm text-gray-500 mt-2 flex items-center flex-wrap">
            <User size={16} className="mr-1 text-gray-500" />
            Created by:{" "}
            <span className="font-semibold ml-1">
              {qrItem.createdBy.username}
            </span>{" "}
            on {new Date(qrItem.createdAt).toLocaleDateString()}
          </p>
        </li>
      ))}
      <Pagination
        totalItems={data?.totalResults ?? 0}
        limit={limit}
        offset={offset}
        onPageChange={setOffset}
      />
    </ul>
  );
};
