import { useEffect, useState } from "react";
import { Link } from "../../types";
import { useFetch } from "../../hooks";
import { useUserStore } from "../../store";
import { Eye, Link as LinkIcon, QrCode } from "lucide-react";
import Pagination from "./Pagination";
import { ListResponse } from "../../types/common";
import { Loader } from "../common/Loader";
import { ErrorMessage } from "../common";

export const URLList = () => {
  const { user } = useUserStore();
  const [links, setLinks] = useState<Link[]>([]);
  const [limit] = useState(10);
  const [offset, setOffset] = useState(0);
  const { data, loading, error, fetchData } = useFetch<ListResponse<Link>>(
    `${import.meta.env.VITE_SERVICE_URL}/links`
  );

  useEffect(() => {
    if (!user) return;
		console.log(user)
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
    setLinks(data.results);
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
      {links.map((item) => (
        <li key={item.id} className="border rounded-md p-4 shadow-sm bg-white">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-2">
            <div className="flex items-center">
              <LinkIcon size={18} className="mr-2 text-primary" />
              <span className="font-semibold">Shortened URL</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600 text-sm">
                <Eye className="mr-1" size={16} /> {item.clicks} clicks
              </div>
              {item.qr && (
                <div className="flex items-center text-gray-600 text-sm">
                  <QrCode className="mr-1" size={16} />
                  <a
                    href={item.qr.qrImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    QR Code
                  </a>
                </div>
              )}
            </div>
          </div>

          <p className="text-sm text-gray-600">
            <strong>Original:</strong> {item.description}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Short:</strong>{" "}
            <a href={item.shortUrl} className="text-accent hover:underline">
              {item.shortUrl}
            </a>
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Created by:{" "}
            <span className="font-semibold">{item.createdBy.username}</span> on{" "}
            {new Date(item.createdAt).toLocaleDateString()}
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
