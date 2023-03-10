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

  head: [
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-X1HVQXLDC3',
      }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-X1HVQXLDC3');`
    ]
  ],

  // shouldPrefetch: false,
});
