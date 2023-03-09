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
      title: '像素广场',
      description: '像素广场',
    },
  },

  theme,

  // shouldPrefetch: false,
});
