import { useForm } from "react-hook-form";
import { useFetch } from "../hooks";
import { ProtectedLinkRedirect, TAccessProtectedFormValidator } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AccessProtectedFormValidator } from "../lib/validators/access-protected";
import { Lock } from "lucide-react";
import { useEffect } from "react";
import { ErrorMessage, Loader } from "../components/common";
import { useParams } from "react-router-dom";

export const AccessProtectedLink = () => {
  const { shortUrl } = useParams();
  const { data, loading, error, fetchData } = useFetch<ProtectedLinkRedirect>(
    `${import.meta.env.VITE_SERVICE_URL}/links/access-protected`
  );
  const { register, handleSubmit, reset } =
    useForm<TAccessProtectedFormValidator>({
      resolver: zodResolver(AccessProtectedFormValidator),
    });

  useEffect(() => {
    if (!data) return;
    if (data?.isPasswordCorrect) {
      window.location.href = data.url;
    }
  }, [data]);

  const onSubmit = async (data: TAccessProtectedFormValidator) => {
    await fetchData(
      { method: "GET" },
      { password: data.password, shortUrl: shortUrl ?? "" }
    );

    reset();
  };

  return (
    <section className="min-h-screen flex items-start justify-center py-16 px-6">
      <form
        className="max-w-lg w-full shadow-xl rounded-3xl p-7 bg-white flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          htmlFor="qr-url"
          className="flex flex-row gap-5 items-center text-gray-700 font-normal text-2xl"
        >
          <Lock /> This link is protected
        </label>
        <input
          id="qr-url"
          type="password"
          {...register("password")}
          placeholder="Enter the password"
          className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          required
        />
        {error && <ErrorMessage error={error} />}
        <button
          disabled={loading}
          type="submit"
          className={` ${
            loading ? "bg-gray-700" : "bg-gray-900"
          } w-full py-2 px-4 text-white rounded-md cursor-pointer hover:bg-primary-dark focus:ring-primary`}
        >
          Continue
        </button>

        {loading ? (
          <div className="w-full flex justify-center items-center">
            <Loader />
          </div>
        ) : null}
      </form>
    </section>
  );
};
