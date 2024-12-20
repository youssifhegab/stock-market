import { FetchError } from '@/common/types/fetchError';
import config from '@/common/utils/config';
import {
  keepPreviousData,
  queryOptions,
  useQuery,
} from '@tanstack/react-query';
import { fetchClient } from './fetch';

interface TickerPayload {
  limit?: number;
  search?: string;
}

export interface TickerResponse {
  count: number;
  next_url: string;
  request_id: string;
  status: string;
  results: Array<{
    active: boolean;
    cik: string;
    composite_figi: string;
    currency_name: string;
    last_updated_utc: string;
    locale: string;
    name: string;
    primary_exchange: string;
    share_class_figi: string;
    ticker: string;
    type: string;
  }>;
}

export const tickersKeys = {
  all: ['tickers'],
  lists: () => [...tickersKeys.all, 'list'],
  list: ({ limit = 50, search }: TickerPayload = {}) =>
    queryOptions<TickerResponse, FetchError, TickerResponse>({
      queryKey: [
        ...tickersKeys.all,
        {
          limit,
          search,
        },
      ],
      queryFn: () => {
        return fetchClient<TickerResponse>({
          url: config.apiUrl,
          endpoint: `/tickers?active=true&limit=${limit}&apiKey=${config.apiKey}&market=stocks${search ? `&search=${search}` : ''}`,
        });
      },
      placeholderData: keepPreviousData,
    }),
};

export const useGetTickers = (payload?: TickerPayload) =>
  useQuery<TickerResponse, FetchError, TickerResponse>(
    tickersKeys.list(payload),
  );
