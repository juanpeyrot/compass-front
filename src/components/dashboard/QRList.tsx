import { useEffect, useState } from "react";
import { Qr } from "../../types";
import { useFetch } from "../../hooks";
import { useUserStore } from "../../store";
import Pagination from "./Pagination";
import { ListResponse } from "../../types/common";
import { Loader } from "../common";
import { ErrorMessage } from "../common";
import { QRCard } from "./QRCard";

export const QrList = () => {
  const { user } = useUserStore();
  const [qrs, setQrs] = useState<Qr[]>([]);
  const [limit] = useState(5);
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
  }, [user, limit, offset]);

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
    return <ErrorMessage error={error} />;
  }

  return (
    <ul className="space-y-4">
      {qrs.map((qrItem) => (
        <QRCard qr={qrItem} key={qrItem.id} />
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
