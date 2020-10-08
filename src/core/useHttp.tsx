import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const setQuery = (data: { [key: string]: any }) => {
    const esc = encodeURIComponent;
    const queryString = Object.keys(data)
      .map((key) => `${esc(key)}=${esc(data[key])}`)
      .join('&');
    return `?${queryString}`;
  };

  const request = useCallback(
    async (
      reqUrl: string,
      reqMethod: string = 'GET',
      reqBody: { [key: string]: any } = {},
      reqHeaders: { [key: string]: any } = {},
    ) => {
      setIsLoading(true);

      const isGetOrDelete = ['GET', 'DELETE'].includes(reqMethod);
      const headers = { Accept: 'application/json', 'Content-Type': 'application/json', ...reqHeaders };
      const body = isGetOrDelete ? undefined : JSON.stringify(reqBody);
      const qs = isGetOrDelete ? setQuery(reqBody) : '';
      const url = `/api/${reqUrl}${qs}`;

      try {
        const response = await fetch(url, { method: reqMethod, body, headers });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Что-то пошло не так');
        }

        return data;
      } catch (e) {
        setError(e.message);
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const clearError = () => setError(null);

  return { isLoading, request, error, clearError };
};
