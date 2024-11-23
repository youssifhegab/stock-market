# ADR: Choosing Next.js Over React for Stock Market App

## Context

The app requires fast load times, SEO optimization, server-side rendering (SSR), static site generation (SSG), and API integration for real-time stock data. React lacks built-in support for SSR, SSG, and API routes, essential for our use case.

## Decision

We chose **Next.js** because:

1. **SSR & SSG**: Built-in support for rendering dynamic and static content improves performance and SEO.
2. **SEO Optimization**: Enhanced metadata control and pre-rendering boost discoverability.
3. **Performance**: Automatic code-splitting and optimizations ensure faster load times.
4. **Developer Experience**: Predefined structure reduces configuration and enforces best practices.

## Consequences

- **Positive**: Simplified architecture, improved performance, and SEO.
- **Negative**: Steeper learning curve for new developers and potential framework lock-in.

## Conclusion

Next.js meets the app’s performance, scalability, and SEO needs, making it the optimal choice.
