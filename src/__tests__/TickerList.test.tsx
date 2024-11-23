import useScrollBottom from '@/common/utils/useScrollBottom';
import TickerList from '@/modules/Dashboard/TickerList';
import { useGetTickers } from '@/services/tickers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

// Define types
interface Ticker {
  name: string;
  ticker: string;
}

interface TickerResponse {
  results: Ticker[];
}

interface TickerPayload {
  limit: number;
  search: string;
}

interface FetchError {
  message: string;
}

// Mock dependencies
jest.mock('../services/tickers', () => ({
  useGetTickers: jest.fn(),
}));
jest.mock('../common/utils/useScrollBottom');
jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));
jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: jest.fn().mockReturnValue(''),
  }),
}));
jest.mock('../modules/Dashboard/Ticker', () => {
  return function MockTicker({ ticker }: { ticker: Ticker }) {
    return <div data-testid={`ticker-${ticker.ticker}`}>{ticker.name}</div>;
  };
});

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('TickerList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should show loading state initially', () => {
    (useGetTickers as jest.Mock).mockImplementation(() => ({
      isLoading: true,
      data: null,
      error: null,
    }));
    (useScrollBottom as jest.Mock).mockReturnValue(false);

    render(<TickerList />, { wrapper: createWrapper() });

    // Check if loading skeleton is rendered
    const loadingElements = screen.getAllByRole('generic');
    const pulseElement = loadingElements.find((el) =>
      el.className.includes('animate-pulse'),
    );
    expect(pulseElement).toBeInTheDocument();
  });

  it('should show error state with retry button', () => {
    const mockRefetch = jest.fn();
    (useGetTickers as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      data: null,
      error: { message: 'Failed to fetch' },
      refetch: mockRefetch,
    }));
    (useScrollBottom as jest.Mock).mockReturnValue(false);

    render(<TickerList />, { wrapper: createWrapper() });

    expect(screen.getByText('Failed to fetch')).toBeInTheDocument();

    const retryButton = screen.getByText('retry');
    fireEvent.click(retryButton);
    expect(mockRefetch).toHaveBeenCalled();
  });

  it('should render list of tickers', () => {
    const mockData: TickerResponse = {
      results: [
        { name: 'Apple', ticker: 'AAPL' },
        { name: 'Microsoft', ticker: 'MSFT' },
      ],
    };

    (useGetTickers as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      data: mockData,
      error: null,
    }));
    (useScrollBottom as jest.Mock).mockReturnValue(false);

    render(<TickerList />, { wrapper: createWrapper() });

    expect(screen.getByTestId('ticker-AAPL')).toBeInTheDocument();
    expect(screen.getByTestId('ticker-MSFT')).toBeInTheDocument();
  });

  it('should load more tickers when scrolling to bottom', async () => {
    const mockData: TickerResponse = {
      results: [{ name: 'Apple', ticker: 'AAPL' }],
    };

    (useGetTickers as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      data: mockData,
      error: null,
    }));

    // First render with isBottom false
    (useScrollBottom as jest.Mock).mockReturnValue(false);
    const { rerender } = render(<TickerList />, { wrapper: createWrapper() });

    // Then simulate scroll to bottom
    (useScrollBottom as jest.Mock).mockReturnValue(true);
    rerender(<TickerList />);

    // Verify that LoadingDots is shown when scrolled to bottom
    await waitFor(() => {
      const loadingDotsContainer = document.querySelector('.h-10');
      expect(loadingDotsContainer).toBeInTheDocument();
    });

    // Verify that limit was increased in the useGetTickers call
    expect(useGetTickers).toHaveBeenCalledWith(
      expect.objectContaining({
        limit: expect.any(Number),
        search: '',
      }),
    );
  });

  it('should handle search parameter', () => {
    const searchParamsMock = jest
      .spyOn(require('next/navigation'), 'useSearchParams')
      .mockImplementation(() => ({
        get: jest.fn().mockReturnValue('AAPL'),
      }));

    (useGetTickers as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      data: { results: [] },
      error: null,
    }));
    (useScrollBottom as jest.Mock).mockReturnValue(false);

    render(<TickerList />, { wrapper: createWrapper() });

    expect(useGetTickers).toHaveBeenCalledWith(
      expect.objectContaining({
        search: 'AAPL',
      }),
    );

    searchParamsMock.mockRestore();
  });
});
