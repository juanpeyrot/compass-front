import { CompassLogo } from "../components/navbar";
import { useUserStore } from "../store";
import { useFetch } from "../hooks";
import { TLoginFormValidator } from "../types/zod";
import { LoginForm } from "../components/forms";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser, User } from "../types";
import { useEffect } from "react";

export const LoginPage = () => {
  const { setUser } = useUserStore();
  const { data, loading, error, fetchData } = useFetch<LoginUser>(
    `${import.meta.env.VITE_SERVICE_URL}/auth/login`
  );
	const { data: loggedUserData, fetchData: fetchLoggedUserData, loading: loadingLoggedUser } = useFetch<User>(
    `${import.meta.env.VITE_SERVICE_URL}/auth/me`
  );
	const navigate = useNavigate();

  const onSubmit = async (formData: TLoginFormValidator) => {
    await fetchData({
      method: "POST",
      body: JSON.stringify(formData),
    });
  };

	useEffect(() => {
		const tryGetLoggedUser = async () => {
			await fetchLoggedUserData({
				method: "GET",
			});
		}

		tryGetLoggedUser();
	}, [])

	useEffect(() => {
		if (!loggedUserData) return;
		setUser(loggedUserData);
		navigate("/dashboard");
	}, [loggedUserData]);

	useEffect(() => {
		if (!data) return;
		setUser(data.user);
		navigate("/dashboard");
	}, [data])

  return (
    <div className="min-h-screen flex items-start justify-center py-16 px-6">
      <div className="max-w-lg w-full space-y-10 shadow-xl rounded-3xl p-10 bg-white">
        <div className="flex justify-center">
          <CompassLogo className="size-32" />
        </div>
        <h2 className="text-4xl font-extrabold text-primary text-center">
          Sign in to your account
        </h2>
				{error && <p className="text-center text-red-500">{error}</p>}
        <LoginForm isLoading={loading || loadingLoggedUser} onSubmit={onSubmit} />
				<p className="text-center text-gray-500 text-sm">
					Don't have an account?{" "}
					<Link
						to="/register"
						className="text-primary hover:text-primary-dark font-semibold"
					>
						Sign up
					</Link>
				</p>
      </div>
    </div>
  );
};