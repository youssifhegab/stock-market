/**
 * Fetch data from an API endpoint with optional configuration.
 *
 * @param  url - The base URL for the API request. Defaults to a value from config.
 * @param  endpoint - The specific API endpoint to request.
 * @param  body - The body to send with the request (for methods like POST, PUT). Optional.
 * @param  method - The HTTP method to use for the request. Defaults to 'GET'.
 * @param  options - Additional options to configure the fetch request.
 * @param headers - Custom headers to include in the request. Optional.
 * @returns - A promise that resolves to the data of type T from the response.
 * @throws - Throws an error if the request fails or the response is not ok.
 */
export async function fetchApi<T>({
  url,
  endpoint,
  body,
  method = 'GET',
  options,
  headers = {},
}: {
  url?: string;
  endpoint: string;
  body?: Record<string, unknown>;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  options?: RequestInit;
  headers?: Record<string, string>;
}): Promise<T> {
  const fullUrl = `${url ?? ''}${endpoint}`;

  const defaultHeaders = { 'Content-Type': 'application/json', ...headers };

  const fetchOptions: RequestInit = {
    method,
    headers: defaultHeaders,
    ...options,
  };

  if (body && method !== 'GET') {
    fetchOptions.body = JSON.stringify(body);
  }

  const response = await fetch(fullUrl, fetchOptions);
  if (!response?.ok) {
    console.log('[useFetch] error: ', response?.status, response?.statusText);
    const errorMessage = (await response.json()) as {
      message: string;
    };
    throw new Error(errorMessage.message || 'Failed to fetch data');
  }

  return response.json() as Promise<T>;
}
