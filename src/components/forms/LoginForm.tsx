import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Lock } from "lucide-react";
import { LoginFormValidator } from "../../lib";


interface LoginFormProps {
  onSubmit: (data: z.infer<typeof LoginFormValidator>) => void;
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginFormValidator>>({
    resolver: zodResolver(LoginFormValidator),
  });

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
        className="w-full py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-primary-dark focus:ring-primary"
      >
        Sign in
      </button>
    </form>
  );
};
