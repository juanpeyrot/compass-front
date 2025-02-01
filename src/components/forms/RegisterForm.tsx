import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Lock, User } from "lucide-react";
import { RegisterFormValidator } from "../../lib";


interface RegisterFormProps {
  onSubmit: (data: z.infer<typeof RegisterFormValidator>) => void;
}

export const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterFormValidator>>({
    resolver: zodResolver(RegisterFormValidator),
  });

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Username */}
      <div>
        <label htmlFor="username" className="sr-only">Username</label>
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

      {/* Email */}
      <div>
        <label htmlFor="email" className="sr-only">Email address</label>
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

      {/* Password */}
      <div>
        <label htmlFor="password" className="sr-only">Password</label>
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

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-primary-dark focus:ring-primary"
      >
        Register
      </button>
    </form>
  );
};
