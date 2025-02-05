import { TCreateURLFormValidator } from "../../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateURLFormValidator } from "../../lib/validators/create-short-url";

interface ShortURLFormProps {
  onSubmit: (formData: TCreateURLFormValidator) => Promise<void>;
  includeQrGenerator: boolean;
}

export const ShortURLForm = ({
  onSubmit,
  includeQrGenerator,
}: ShortURLFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateURLFormValidator>({
    resolver: zodResolver(CreateURLFormValidator),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("link")}
        placeholder="https://my-url.com"
        className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent"
      />
      {errors.link && (
        <p className="text-red-500 text-sm">{errors.link.message}</p>
      )}

      <input
        type="text"
        {...register("customShortUrl")}
        placeholder="Custom URL (optional)"
        className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent"
      />

      <input
        type="password"
        {...register("password")}
        placeholder="Password (optional)"
        className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent"
      />

      <textarea
        {...register("description")}
        placeholder="Description (optional)"
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
        type="submit"
        className="bg-gray-900 w-full py-2 px-4 text-white rounded-md hover:bg-primary-dark focus:ring-primary"
      >
        Shorten
      </button>
    </form>
  );
};
