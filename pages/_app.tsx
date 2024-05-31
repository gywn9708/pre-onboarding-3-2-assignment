import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthProvider } from '../context/AuthContext';
import { InfoProvider } from '../context/InfoContext';
import HttpClient from '../network/httpClient';
import AuthServiceImpl from '../services/AuthService';
import InfoServiceImpl from '../services/InfoService';
import '../styles/globals.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3000,
      cacheTime: 360000,
      keepPreviousData: true,
      refetchOnMount: true,
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  const client = new HttpClient(process.env.NEXT_PUBLIC_BASE_URL || '');
  const authService = new AuthServiceImpl(client.httpClient);
  const infoService = new InfoServiceImpl(client.withToken());

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.push('/login');
    }
  }, []);

  return (
    <AuthProvider authService={authService}>
      <InfoProvider infoService={infoService}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </InfoProvider>
    </AuthProvider>
  );
}

export default App;
