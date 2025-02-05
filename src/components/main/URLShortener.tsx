import { useEffect, useState } from "react";
import { Link } from "lucide-react";
import { LinkPublicInfo, TCreateURLFormValidator } from "../../types";
import { useFetch } from "../../hooks";
import { ShortURLForm } from "../forms/ShortURLForm";
import { ShowShortURL } from "../ShowShortURL";
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";

export const URLShortener = () => {
  const [shortUrl, setShortUrl] = useState("");
  const { data, error, loading, fetchData } = useFetch<LinkPublicInfo>(
    `${import.meta.env.VITE_SERVICE_URL}/links`
  );

  const onSubmit = async (formData: TCreateURLFormValidator) => {
    await fetchData({
      method: "POST",
      body: JSON.stringify(formData),
    });
  };

  useEffect(() => {
    if (!data) return;
    setShortUrl(`${import.meta.env.VITE_SERVICE_URL}/${data.shortUrl}`);
  }, [data]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center text-primary">
        <Link className="mr-2" />
        Shorten URL
      </h2>
      <ShortURLForm includeQrGenerator={false} onSubmit={onSubmit} />
      {error ? <ErrorMessage error={error} /> : null}
      {loading ? (
        <div className="w-full flex justify-center items-center mt-4">
          <Loader />
        </div>
      ) : null}
      {!loading && !error && shortUrl ? (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center text-center">
          <p className="font-semibold text-gray-800">Your shortened URL:</p>
          <ShowShortURL shortUrl={shortUrl} />
        </div>
      ) : null}
    </div>
  );
};
