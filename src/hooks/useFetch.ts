import { useState } from "react";

export const useFetch = <T,>(
  url: string
): {
  data: T | null;
  error: string | null;
  loading: boolean;
  fetchData: (options?: RequestInit) => Promise<void>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (options?: RequestInit) => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        ...options,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error ${response.status}`);
      }

      const jsonData = await response.json();
      setData(jsonData);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchData };
};