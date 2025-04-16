import { GoogleLoginButton } from "./GoogleLoginButton";

export const LoginProviders = () => {

	
  return (
    <article className="max-w-md mx-auto px-4">
      <div className="relative flex items-center justify-center mb-8">
        <hr className="w-full border-gray-300" />
        <span className="absolute bg-white px-4 text-sm text-gray-500">
          or login with
        </span>
      </div>
      <div className="flex flex-col gap-3">
				<GoogleLoginButton />
        <button
          onClick={() => {}}
          className="flex items-center justify-center gap-2 bg-transparent py-2 px-4 rounded"
        >
          <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
          <span className="text-gray-800 text-sm">Continue with GitHub</span>
        </button>
      </div>
    </article>
  );
};
