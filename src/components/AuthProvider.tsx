import { ReactNode, useEffect } from "react";
import { useUserStore } from "../store";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { fetchUser } = useUserStore();

  useEffect(() => {
    const checkUser = async () => {
      fetchUser();
    };
    checkUser();
  }, []);

  return <>{children}</>;
};
