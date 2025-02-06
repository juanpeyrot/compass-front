import { LinkPublicInfo, TCreateURLFormValidator } from "../../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateURLFormValidator } from "../../lib";
import { useFetch } from "../../hooks";
import { useEffect } from "react";
import { ErrorMessage, Loader } from "../common";

interface ShortURLFormProps {
  callbackFunction?: (data: LinkPublicInfo) => void;
  includeQrGenerator: boolean;
}

export const ShortURLForm = ({
  includeQrGenerator,
  callbackFunction,
}: ShortURLFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateURLFormValidator>({
    resolver: zodResolver(CreateURLFormValidator),
  });

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
    callbackFunction && callbackFunction(data);
  }, [data]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="link-url" className="block text-gray-700">Original URL</label>
      <input
				id="link-url"
        type="text"
        {...register("link")}
        placeholder="https://my-url.com"
        className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent"
      />
      {errors.link && (
        <p className="text-red-500 text-sm">{errors.link.message}</p>
      )}

      <label htmlFor="custom-link" className="block text-gray-700">Custom link name (optional)</label>
      <input
				id="custom-link"
        type="text"
        {...register("customShortUrl")}
        placeholder="MyAwesomeLink123"
        className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent"
      />

      <label htmlFor="url-password" className="block text-gray-700">Password (optional)</label>
      <input
				id="url-password"
        type="password"
        {...register("password")}
        placeholder="Password"
        className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent"
      />

      <label htmlFor="url-description" className="block text-gray-700">Description (optional)</label>
      <textarea
				id="url-description"
        {...register("description")}
        placeholder="This link redirects to my personal landing page"
        className="w-full resize-y min-h-12 max-h-48 p-2 mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent"
        rows={3}
      />

      {includeQrGenerator && (
        <div className="mb-2 flex items-center">
          <input type="checkbox" {...register("includeQr")} className="mr-2" />
          <label className="text-gray-700">Generate QR Code</label>
        </div>
      )}

      <button
        disabled={loading}
        type="submit"
        className={` ${
          loading ? "bg-gray-700" : "bg-gray-900"
        } w-full py-2 px-4 text-white rounded-md cursor-pointer hover:bg-primary-dark focus:ring-primary`}
      >
        Shorten
      </button>

      {loading ? (
        <div className="w-full flex justify-center items-center m-4">
          <Loader />
        </div>
      ) : null}

      {error ? (
        <div className="w-full flex justify-center items-center m-4">
          <ErrorMessage error={error} />
        </div>
      ) : null}
    </form>
  );
};