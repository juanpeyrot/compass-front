import { ReactNode } from "react"
import { useUserStore } from "../store";
import { Navigate, Outlet } from "react-router-dom";


interface ProtectedRouteProps {
	children?: ReactNode | ReactNode[];
	redirectPath?: string;
}

export const ProtectedRoute = ({ children, redirectPath = "/" }: ProtectedRouteProps) => {

	const { user } = useUserStore();

	if (!user) {
		return <Navigate to={redirectPath} replace />
	}

	return children ? children : <Outlet />; 
}