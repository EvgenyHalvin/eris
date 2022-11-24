import { QueryClient, QueryClientProvider } from 'react-query';

import { RootNavigator } from '@processes/navigation';
import { ErrorBoundary } from '@entities/error-boundary/error-boundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      retry: 1,
      notifyOnChangeProps: 'tracked',
    },
  },
});

export const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
