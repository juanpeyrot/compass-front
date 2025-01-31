import { create } from 'zustand';
import { User } from '../types';
import axios from 'axios';

interface IUserStore {
	user: User | null;
	fetchUser: () => void;
	logout: () => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  user: null,
	setUser: (u: User) => set({ user: { ...u } }),
	fetchUser: async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.SERVICE_URL}/auth/me`, { withCredentials: true });
      set({ user: data });
    } catch (error) {
      set({ user: null });
    }
  },

  logout: () => {
    axios.post(`${import.meta.env.SERVICE_URL}/auth/logout`, {}, { withCredentials: true }).finally(() => {
      set({ user: null });
    });
  },
}))