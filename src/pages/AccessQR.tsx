import { useEffect } from "react";
import { useFetch } from "../hooks";
import { LinkRedirect } from "../types";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loader } from "../components/common";

export const AccessQR = () => {
  const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const token = searchParams.get("token");
  const { data, error, fetchData, loading } = useFetch<LinkRedirect>(
    `${import.meta.env.VITE_SERVICE_URL}/qrs/track/${token}`
  );

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!data) return;
    window.location.href = data.url;
  }, [data]);

	useEffect(() => {
		if (error) {
			navigate("/");
		}
	}, [error])

  return (
    <div className="min-h-screen">
      {!loading && (
        <div className="flex flex-col gap-10 items-center justify-center mt-5">
					<h3 className="text-4xl font-medium text-white">You are being redirected</h3>
					<div className="flex items-center gap-5">
					<Loader />
          <p className="text-lg font-medium text-white">
            Preparing your link... please wait.
          </p>
					</div>
        </div>
      )}
    </div>
  );
};
