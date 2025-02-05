import { create } from "zustand";
import { User } from "../types";

interface IUserStore {
  user: User | null;
	setUser: (u: User) => void;
  fetchUser: () => void;
  logout: () => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  user: null,
  setUser: (u: User) => set({ user: { ...u } }),
  fetchUser: async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVICE_URL}/auth/me`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Error getting user");
      }

      const data = await response.json();
      set({ user: data });
    } catch (error) {
      set({ user: null });
    }
  },

  logout: async () => {
		try {
			await fetch(`${import.meta.env.VITE_SERVICE_URL}/auth/logout`, {
				method: "POST",
				credentials: "include",
			});
		} finally {
			set({ user: null });
		}
	},	
}));
