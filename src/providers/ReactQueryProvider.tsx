'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode } from 'react';

/**
 * Extends the `@tanstack/react-query` module to include custom error types.
 * Specifically, it registers the `FetchError` type for handling default errors
 * within React Query.
 */
declare module '@tanstack/react-query' {
  interface Register {
    /**
     * Default error type used in React Query for handling API errors.
     */
    defaultError: {
      message: string;
    };
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      retry: 2,
      refetchOnWindowFocus: false,
      throwOnError: false,
    },
  },
});

export default function ReactQueryProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
