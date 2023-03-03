import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

export default defineUserConfig({
  base: '/',

  locales: {
    // '/': {
    //   lang: 'en-US',
    //   title: 'Pixel Playground',
    //   description: 'Pixel Playground',
    // },
    '/': {
      lang: 'zh-CN',
      title: 'Pixel Playground',
      description: 'Pixel Playground',
    },
  },

  theme,

  // shouldPrefetch: false,
});
