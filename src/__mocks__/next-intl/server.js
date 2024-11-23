export const getMessages = async () => {
  return {
    messages: {
      Dashboard: {
        title: 'Hello world!',
        about: 'Go to the about page',
        metaTitle: 'Dashboard',
        search: 'Search',
      },
      NotFoundPage: { title: 'Page not found', dashboard: 'Go to Dashboard' },
      Footer: { title: 'Powered By Youssif Hegab®' },
      Error: { retry: 'Retry' },
    },
  };
};
