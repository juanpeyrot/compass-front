import { CompassLogo } from "../components/navbar";
import { useUserStore } from "../store";
import { useFetch } from "../hooks/useFetch";
import { TLoginFormValidator } from "../types/zod";
import { LoginForm } from "../components/forms";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../types";
import { useEffect } from "react";

export const LoginPage = () => {
  const { setUser } = useUserStore();
  const { data, fetchData } = useFetch<LoginUser>(
    `${import.meta.env.VITE_SERVICE_URL}/auth/login`
  );
	const navigate = useNavigate();

  const onSubmit = async (formData: TLoginFormValidator) => {
    await fetchData({
      method: "POST",
      body: JSON.stringify(formData),
    });
  };

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
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};