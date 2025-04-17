export const GithubLoginButton = () => {
  const loginWithGitHub = () => {
    const redirectURI = `${import.meta.env.VITE_URL}/github-auth`;
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&redirect_uri=${redirectURI}&scope=user:email`;
  };

  return (
    <button
			type="button"
      onClick={loginWithGitHub}
      className="flex items-center justify-center gap-2 bg-transparent py-2 px-4 rounded"
    >
      <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
      <span className="text-gray-800 text-sm">Continue with GitHub</span>
    </button>
  );
};