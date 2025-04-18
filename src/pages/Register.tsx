import { RegisterForm } from "../components/forms";
import { CompassLogo } from "../components/navbar";
import { TRegisterFormValidator } from "../types/zod";
import { useFetch } from "../hooks";
import { useUserStore } from "../store";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../types";
import { useEffect } from "react";

export const RegisterPage = () => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  const { data, error, loading, fetchData } = useFetch<LoginUser>(
    `${import.meta.env.VITE_SERVICE_URL}/auth/register`
  );

  const onSubmit = async (formData: TRegisterFormValidator) => {
    await fetchData({
      method: "POST",
      body: JSON.stringify(formData),
    });
  };

  useEffect(() => {
    if (!data) return;
    setUser(data.user);
    navigate("/dashboard");
  }, [data]);

  return (
    <div className="min-h-screen flex items-start justify-center py-16 px-6">
      <div className="max-w-lg w-full space-y-10 shadow-xl rounded-3xl p-10 bg-white">
        <div className="flex justify-center">
          <CompassLogo className="size-32" />
        </div>
        <h2 className="text-4xl font-extrabold text-primary text-center">
          Create a new account
        </h2>

        {error && <p className="text-center text-red-500">{error}</p>}

        <RegisterForm isLoading={loading} onSubmit={onSubmit} />
				<p className="text-center text-gray-500 text-sm">
					Already registered?{" "}
					<Link
						to="/login"
						className="text-primary hover:text-primary-dark font-semibold"
					>
						Log in
					</Link>
				</p>
      </div>
    </div>
  );
};
