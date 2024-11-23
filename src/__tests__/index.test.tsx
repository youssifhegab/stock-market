import { LANG } from '@/common/constants/lang';
import Dashboard from '@/modules/Dashboard';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import 'next/navigation';
import { ReactNode } from 'react';

jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
    }),
    usePathname: () => {
      return '';
    },
    useParams: () => {
      return {};
    },
  };
});

export const TestWrapper = ({ children }: { children: ReactNode }) => {
  const locale = LANG.EN;
  const messages = require(`../../dictionary/${locale}.json`);
  return (
    <ReactQueryProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </ReactQueryProvider>
  );
};

describe('Header', () => {
  it('renders a heading', async () => {
    render(
      <TestWrapper>
        <Dashboard />
      </TestWrapper>,
    );

    const textElement = screen.getByText(/Nasdaq/i); // Case-insensitive match
    expect(textElement).toBeInTheDocument();
  });
});
