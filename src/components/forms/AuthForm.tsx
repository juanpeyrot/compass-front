import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, User, Github } from "lucide-react";
import { FormValidator } from "../../lib";
import { TAuthFormValidator } from "../../types/zod";
import { Link } from "react-router-dom";

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (data: TAuthFormValidator) => void;
}

export const AuthForm = ({ isLogin, onSubmit }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthFormValidator>({ resolver: zodResolver(FormValidator) });

  const handleGitHubLogin = () => {};

  const handleGoogleLogin = () => {};

  return (
    <form
      className="mt-8 space-y-6"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <div className="flex flex-col gap-3 rounded-md shadow-sm -space-y-px">
        {!isLogin && (
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-sm">
                {errors.username.message?.toString()}
              </p>
            )}
          </div>
        )}
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message?.toString()}
            </p>
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password.message?.toString()}
            </p>
          )}
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          type="submit"
          className="flex justify-center py-2 px-7 border text-lg font-medium rounded-md bg-gray-900 text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {isLogin ? "Sign in" : "Register"}
        </button>
      </div>
      <div className="mt-6">
        <div>
          <div className="w-full border-t border-gray-300 my-3"></div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-background text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div>
            <button
              onClick={handleGoogleLogin}
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with Google</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </button>
          </div>

          <div>
            <button
              onClick={handleGitHubLogin}
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with GitHub</span>
              <Github size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          to={`${isLogin ? "/register" : "/login"}`}
          className="font-medium text-primary hover:text-primary-dark"
        >
          {isLogin
            ? "Need an account? Register"
            : "Already have an account? Sign in"}
        </Link>
      </div>
    </form>
  );
};
