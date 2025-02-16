import { Link, Qr } from "../../types";
import { useFetch } from "../../hooks";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

interface CreateQRCodeButtonProps {
  link: Link;
}

export const CreateQRCodeButton = ({ link }: CreateQRCodeButtonProps) => {
  const { data, error, loading, fetchData } = useFetch<Qr>(
    `${import.meta.env.VITE_SERVICE_URL}/qrs`
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      return;
    }
    if (data) toast.success("QR successfully created!");
  }, [data]);

  const onSubmit = async () => {
    await fetchData({
      method: "POST",
      body: JSON.stringify({ 
				link: link.shortUrl,
				belongsToCustomLink: true, 
			}),
    });
  };

  return (
    <div className="flex items-center gap-3">
      <button
        disabled={loading}
        onClick={onSubmit}
        className="px-2 py-1 text-sm text-gray-600 bg-primary rounded-md hover:bg-primary-dark"
      >
        {loading ? "Creating..." : 'Create QR Code'}
      </button>

      <Toaster position="bottom-right" />
    </div>
  );
};
