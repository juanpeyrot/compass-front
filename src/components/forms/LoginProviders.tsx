import { useEffect, useState } from "react";
import { useFetch } from "../../hooks";
import { LoginUser } from "../../types";

export const LoginProviders = () => {
	const [selectedProvider, setSelectedProvider] = useState<"google" | "github" | null>(null);
  const { data, loading, error, fetchData } = useFetch<LoginUser>(
    `${import.meta.env.VITE_SERVICE_URL}/auth/login/${selectedProvider}`
  );

  const handleGoogleLogin = () => {
		setSelectedProvider("google");
	}

  const handleGithubLogin = () => {
		setSelectedProvider("github");
	}

	useEffect(() => {
		if (!selectedProvider) return;
		fetchData({
			method: "POST",
		});
	}, [selectedProvider])

  return (
    <article className="max-w-md mx-auto px-4">
      <div className="relative flex items-center justify-center mb-8">
        <hr className="w-full border-gray-300" />
        <span className="absolute bg-white px-4 text-sm text-gray-500">
          or login with
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 bg-transparent py-2 px-4 rounded"
        >
          <img src="/google.svg" alt="Google" className="w-5 h-5" />
          <span className="text-gray-800 text-sm">Continue with Google</span>
        </button>
        <button
          onClick={handleGithubLogin}
          className="flex items-center justify-center gap-2 bg-transparent py-2 px-4 rounded"
        >
          <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
          <span className="text-gray-800 text-sm">Continue with GitHub</span>
        </button>
      </div>
    </article>
  );
};
