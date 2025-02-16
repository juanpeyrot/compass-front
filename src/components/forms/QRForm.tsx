import { QrCode } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateQRFormValidator } from "../../lib";
import { Qr, TCreateQRFormValidator } from "../../types";
import { useFetch } from "../../hooks";
import { ErrorMessage, Loader } from "../common";

export const QRForm = () => {
  const { data, loading, error, fetchData } = useFetch<Qr>(
    `${import.meta.env.VITE_SERVICE_URL}/qrs`
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
		reset,
  } = useForm<TCreateQRFormValidator>({
    resolver: zodResolver(CreateQRFormValidator),
  });

  const onSubmit = async (data: TCreateQRFormValidator) => {
    await fetchData({
      method: "POST",
      body: JSON.stringify(data),
    });
		reset();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center text-primary">
        <QrCode className="mr-2" />
        Generate QR Code
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="qr-url" className="block text-gray-700">
          Destination URL
        </label>
        <input
          id="qr-url"
          type="string"
          {...register("link")}
          placeholder="https://my-url.com"
          className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          required
        />
        {errors.link && (
          <p className="text-red-500 text-sm">{errors.link.message}</p>
        )}
        <button
          disabled={loading}
          type="submit"
          className={` ${
            loading ? "bg-gray-700" : "bg-gray-900"
          } w-full py-2 px-4 text-white rounded-md cursor-pointer hover:bg-primary-dark focus:ring-primary`}
        >
          Generate QR Code
        </button>
      </form>
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

      {data && (
        <div className="mt-4 flex justify-center">
          <img
            src={data.qrImage}
            alt="Generated QR Code"
            className="border-2 border-accent rounded-md"
          />
        </div>
      )}
    </div>
  );
};