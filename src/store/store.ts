import { create } from "zustand";
import { User } from "../types";
import axios from "axios";

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
      const response = await fetch(`${import.meta.env.SERVICE_URL}/auth/me`, {
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

  logout: () => {
    axios
      .post(
        `${import.meta.env.VITE_SERVICE_URL}/auth/logout`,
        {},
        { withCredentials: true }
      )
      .finally(() => {
        set({ user: null });
      });
  },
}));
