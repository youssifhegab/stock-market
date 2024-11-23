import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import type { Preview } from '@storybook/react';
import { Archivo, Noto_Sans_Arabic as NotoSansArabic } from 'next/font/google';
import React from 'react';

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
});
const noto = NotoSansArabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-noto',
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const direction = context.globals.direction;
      return (
        <main
          dir={direction}
          className={` ${archivo.className} ${noto.className}`}
        >
          <Story />
          <div id="modal-root" />
        </main>
      );
    },
  ],
  globalTypes: {
    direction: {
      defaultValue: 'ltr',
      toolbar: {
        icon: 'transfer',
        items: [
          { value: 'ltr', title: 'Left to Right' },
          { value: 'rtl', title: 'Right to Left' },
        ],
      },
    },
  },
};

export default preview;
