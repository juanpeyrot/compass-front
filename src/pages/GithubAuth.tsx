import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks";

export const GithubAuth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { data, error, loading, fetchData } = useFetch<any>(`${import.meta.env.VITE_SERVICE_URL}/auth/github`);

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      fetchData({
        method: "POST",
        body: JSON.stringify({ code }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }, []);

  useEffect(() => {
    if (data) {
      navigate("/dashboard");
    }
  }, [data]);

  return (
    <div className="min-h-screen flex items-start justify-center py-16 px-6">
      <p className="text-lg font-medium text-white">
        {loading ? "Processing GitHub login..." : error ? `GitHub login failed. ${error}` : ""}
      </p>
    </div>
  );
};