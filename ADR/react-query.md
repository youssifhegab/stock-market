# ADR: Choosing React Query for Data Fetching

## Context

The stock market app requires efficient data fetching, caching, and state management for handling real-time stock prices, historical data, and user interactions. Traditional state management libraries (e.g., Redux) or manual fetching with `useState`/`useEffect` would require significant boilerplate and custom logic to handle caching, background updates, and error management.

## Decision

We chose **React Query** because:

1. **Data Caching**: Built-in caching minimizes redundant API requests, improving app performance.
2. **Background Updates**: Automatic refetching keeps stock data fresh without manual intervention.
3. **Error Handling**: Simplified management of loading and error states reduces boilerplate.
4. **Developer Experience**: Offers hooks like `useQuery` and `useMutation`, enabling clean, declarative data-fetching logic.
5. **Optimistic Updates**: Ensures seamless user experience for actions like placing orders or updating preferences.

## Consequences

- **Positive**: Reduced boilerplate, better performance, and a consistent data-fetching experience.
- **Negative**: Learning curve for developers unfamiliar with React Query concepts.

## Conclusion

React Query’s caching, background updates, and declarative API make it an ideal choice for managing the complex data-fetching needs of a stock market app.
