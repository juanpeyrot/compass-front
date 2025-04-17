import { useEffect, useState } from "react";
import { User, Mail, Trash2, Loader } from "lucide-react";
import { useFetch } from "../../hooks";
import { User as TUser } from "../../types";
import { CustomModal } from "../modals/CustomModal";
import { DeleteUserForm } from "../forms/DeleteUserForm";

export const UserSettings = () => {
  const { data, fetchData, loading } = useFetch<TUser>(
    `${import.meta.env.VITE_SERVICE_URL}/auth/me`
  );
  const [user, setUser] = useState<TUser>();
	const [deleteUserModalOpen, setDeleteUserModalOpen] = useState(false);

  useEffect(() => {
    const tryGetLoggedUser = async () => {
      await fetchData({
        method: "GET",
      });
    };

    tryGetLoggedUser();
  }, []);

	useEffect(() => {
		if (!data) return;
		setUser(data);
	}, [data]);

	if (loading) {
		<div className="w-full h-14">
			<Loader />
		</div>
	}

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">User Settings</h2>
      <div className="space-y-4 mb-8">
        <div className="flex items-center">
          <User size={18} className="mr-2 text-primary" />
          <span className="font-semibold mr-2">Username:</span>
          <span>{user?.username}</span>
        </div>
        <div className="flex items-center">
          <Mail size={18} className="mr-2 text-primary" />
          <span className="font-semibold mr-2">Email:</span>
          <span>{user?.email}</span>
        </div>
      </div>
      <div className="space-y-4">
        <button
          className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          onClick={() => setDeleteUserModalOpen(true)}
        >
          <Trash2 size={18} className="mr-2" />
          Delete Account
        </button>
      </div>

			{
				deleteUserModalOpen ? (
					<CustomModal isOpen={deleteUserModalOpen} onClose={() => setDeleteUserModalOpen(false)}>
						<DeleteUserForm />
					</CustomModal>
				) : null
			}
    </div>
  );
};
