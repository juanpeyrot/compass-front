import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, User } from "lucide-react";
import { RegisterFormValidator } from "../../lib";
import { Loader } from "../common";
import { TRegisterFormValidator } from "../../types";

interface RegisterFormProps {
	isLoading: boolean;
  onSubmit: (data: TRegisterFormValidator) => void;
}

export const RegisterForm = ({ onSubmit, isLoading }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValidator>({
    resolver: zodResolver(RegisterFormValidator),
  });

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <div className="flex items-center">
          <User className="text-gray-500 mr-2" />
          <input
            id="username"
            type="text"
            {...register("username")}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Username"
          />
        </div>
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <div className="flex items-center">
          <Mail className="text-gray-500 mr-2" />
          <input
            id="email"
            type="email"
            {...register("email")}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Email address"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <div className="flex items-center">
          <Lock className="text-gray-500 mr-2" />
          <input
            id="password"
            type="password"
            {...register("password")}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Password"
          />
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`${
          isLoading ? "bg-gray-400" : "bg-gray-900"
        } w-full py-2 px-4 text-white rounded-md hover:bg-primary-dark focus:ring-primary`}
      >
        Register
      </button>

      {isLoading ? (
        <div className="w-full flex justify-center items-center">
          <Loader />
        </div>
      ) : null}
    </form>
  );
};
