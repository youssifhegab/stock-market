import type { Preview } from '@storybook/react';
import 'intl-tel-input/build/css/intlTelInput.css';
import React from 'react';

import { Archivo, Noto_Sans_Arabic as NotoSansArabic } from 'next/font/google';

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
          className={` ${archivo.className} ${archivo.variable}`}
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
