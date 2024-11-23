import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@newhighsco/storybook-addon-svgr',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    // Remove any existing rules that handle SVGs
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules = config.module.rules.filter((rule) => {
      return (
        typeof rule === 'object' &&
        rule !== null &&
        'test' in rule &&
        rule.test instanceof RegExp &&
        !rule.test.test('.svg')
      );
    });

    // Add a new rule to handle SVGs with SVGR
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true, // Optional: Adjust based on your needs
          },
        },
      ],
    });

    return config;
  },
};
export default config;
