import { useEffect, useState } from "react";
import { Link } from "../../types";
import { useFetch } from "../../hooks";
import { useUserStore } from "../../store";
import Pagination from "./Pagination";
import { ListResponse } from "../../types/common";
import { Loader } from "../common/Loader";
import { ErrorMessage } from "../common";
import { URLCard } from "./URLCard";

export const URLList = () => {
  const { user } = useUserStore();
  const [links, setLinks] = useState<Link[]>([]);
  const [limit] = useState(5);
  const [offset, setOffset] = useState(0);
  const { data, loading, error, fetchData } = useFetch<ListResponse<Link>>(
    `${import.meta.env.VITE_SERVICE_URL}/links`
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
    return <ErrorMessage error={error} />;
  }

  return (
    <ul className="space-y-4">
      {links.map((item) => (
        <URLCard item={item} key={item.id} />
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
