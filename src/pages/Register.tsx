import { AuthForm } from "../components/forms";
import { CompassLogo } from "../components/navbar";
import { TAuthFormValidator } from "../types/zod";

export const RegisterPage = () => {
  const onSubmit = (data: TAuthFormValidator) => {
    console.log("Register Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-6">
      <div className="max-w-lg w-full space-y-10 shadow-xl rounded-3xl p-10 bg-white">
        <div className="flex justify-center">
          <CompassLogo className="size-32" />
        </div>
        <h2 className="text-4xl font-extrabold text-primary text-center">
          Create a new account
        </h2>
        <AuthForm isLogin={false} onSubmit={onSubmit} />
      </div>
    </div>
  );
};