import { LogIn } from "lucide-react";
import { useFetch } from "../../hooks";
import { useEffect } from "react";
import { useUserStore } from "../../store";

export const LogoutButton = () => {

	const { logout } = useUserStore();
	const { data, loading, fetchData } = useFetch(`${import.meta.env.VITE_SERVICE_URL}/auth/logout`);

	const handleLogout = async () => {
		await fetchData({
			method: "POST",
		});
	}

	useEffect(() => {
		if (data){
			logout();
		}
	}, [data])

  return (
    <button
      onClick={handleLogout}
			disabled={loading}
      className="text-lg font-medium flex items-center gap-3 bg-accent text-white hover:text-orange-500 px-4 py-2 rounded-md transition-colors"
    >
      <LogIn />
      Log out
    </button>
  );
};
