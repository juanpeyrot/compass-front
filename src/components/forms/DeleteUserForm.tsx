import { useEffect } from "react";
import { useFetch } from "../../hooks";
import { Loader } from "../common";
import { useUserStore } from "../../store";

export const DeleteUserForm = () => {
  const { fetchData, data, loading } = useFetch<any>(
    `${import.meta.env.VITE_SERVICE_URL}/auth/me`
  );

	const { logout } = useUserStore();

  useEffect(() => {
		if (!data) return;
		logout();
	}, [data]);

  const handleDeleteAccount = async (event: React.FormEvent) => {
    event.preventDefault();
    await fetchData({
      method: "DELETE",
    });
  };

  return (
    <form
      className="w-full max-w-md mx-auto bg-white rounded-2xl p-6"
      onSubmit={handleDeleteAccount}
    >
      <div className="flex items-center gap-3 mb-4">
        <svg
          className="w-6 h-6 text-red-500 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.918-.816 1.994-1.85L21 18V6a2 2 0 00-1.85-1.995L19 4H5a2 2 0 00-1.995 1.85L3 6v12c0 1.054.816 1.918 1.85 1.994L5 20z"
          />
        </svg>
        <h2 className="text-2xl font-semibold text-red-600">
          Delete your account
        </h2>
      </div>

      <p className="text-md text-gray-700 mb-2">
        Are you sure you want to delete your account?
      </p>
      <p className="text-md text-gray-700 mb-6">
        <strong className="text-red-600">This action is permanent</strong> and
        will remove all of your data.
      </p>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center text-md gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? <Loader /> : "Delete Permanently"}
      </button>
    </form>
  );
};
