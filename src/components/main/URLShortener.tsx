import { useState } from "react";
import { Link } from "lucide-react";
import { LinkPublicInfo } from "../../types";
import { ShortURLForm } from "../forms/ShortURLForm";
import { ShowShortURL } from "../common/ShowShortURL";

export const URLShortener = () => {
  const [createdUrl, setCreatedUrl] = useState<LinkPublicInfo>();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center text-primary">
        <Link className="mr-2" />
        Shorten URL
      </h2>
      <ShortURLForm
        includeQrGenerator={false}
        callbackFunction={setCreatedUrl}
      />
      {createdUrl ? (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center text-center">
          <p className="font-semibold text-gray-800">Your shortened URL:</p>
          <ShowShortURL shortUrl={createdUrl.shortUrl} />
        </div>
      ) : null}
    </div>
  );
};
