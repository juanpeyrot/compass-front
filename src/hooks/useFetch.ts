import { useState } from "react";

export const useFetch = <T,>(
  url: string,
  initialQuery: Record<string, string | number | boolean> = {}
): {
  data: T | null;
  error: string | null;
  loading: boolean;
  fetchData: (options?: RequestInit, query?: Record<string, string | number | boolean>) => Promise<void>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const buildQueryString = (query: Record<string, string | number | boolean>) => {
    const params = new URLSearchParams();
    Object.entries(query).forEach(([key, value]) => {
      params.append(key, String(value));
    });
    return params.toString();
  };

  const fetchData = async (
    options?: RequestInit,
    query: Record<string, string | number | boolean> = initialQuery
  ) => {
    try {
      setLoading(true);
      const queryString = buildQueryString(query);
      const fullUrl = queryString ? `${url}?${queryString}` : url;

      const response = await fetch(fullUrl, {
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