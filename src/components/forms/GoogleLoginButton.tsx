import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useFetch } from "../../hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const GoogleLoginButton = () => {

	const { data, loading, error, fetchData } = useFetch<any>(`${import.meta.env.VITE_SERVICE_URL}/auth/google`);
	const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse: any) => {
    const token = credentialResponse.credential;
    await fetchData({
      method: "POST",
      body: JSON.stringify({ token }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

	useEffect(() => {
		if (!data) return;
		navigate("/dashboard");
	}, [data])

  return (
		<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
			<GoogleLogin
      onSuccess={handleGoogleSuccess}
      onError={() => {
        console.error("Google Login Failed");
      }}
    />
		</GoogleOAuthProvider>
  );
};
