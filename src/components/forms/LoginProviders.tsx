import { GithubLoginButton } from "./GithubLoginButton";
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
        <GithubLoginButton />
      </div>
    </article>
  );
};
