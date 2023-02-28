import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar, zhNavbar } from './navbar/index.js';
import { enSidebar, zhSidebar } from './sidebar/index.js';

export default hopeTheme({
  hostname: 'https://mister-hope.github.io',
  iconAssets: 'iconfont',
  logo: '/logo.svg',
  docsDir: 'docs',
  blog: {
    medias: {
      // Baidu: 'https://example.com',
      // BiliBili: 'https://example.com',
      // Wechat: 'https://example.com',
      // Weibo: 'https://example.com',
      // Youtube: 'https://example.com',
      // Zhihu: 'https://example.com',
    },
  },
  locales: {
    '/': {
      navbar: enNavbar,
      sidebar: enSidebar,
      footer: 'Default footer',
      displayFooter: true,
      blog: {
        description: 'A FrontEnd programmer',
        intro: '/intro.html',
      },
      metaLocales: {
        editLink: 'Edit this page on GitHub',
      },
    },
    '/zh/': {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: '默认页脚',
      displayFooter: true,
      blog: {
        description: '一个前端开发者',
        intro: '/zh/intro.html',
      },
      metaLocales: {
        editLink: '在 GitHub 上编辑此页',
      },
    },
  },

  // encrypt: {
  //   config: {
  //     '/demo/encrypt.html': ['1234'],
  //     '/zh/demo/encrypt.html': ['1234'],
  //   },
  // },

  plugins: {
    blog: true,
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: '/favicon.ico',
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: '/assets/icon/apple-icon-152.png',
    //     statusBarColor: 'black',
    //   },
    //   msTile: {
    //     image: '/assets/icon/ms-icon-144.png',
    //     color: '#ffffff',
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: '/assets/icon/chrome-mask-512.png',
    //         sizes: '512x512',
    //         purpose: 'maskable',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/assets/icon/chrome-mask-192.png',
    //         sizes: '192x192',
    //         purpose: 'maskable',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/assets/icon/chrome-512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/assets/icon/chrome-192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: 'Demo',
    //         short_name: 'Demo',
    //         url: '/demo/',
    //         icons: [
    //           {
    //             src: '/assets/icon/guide-maskable.png',
    //             sizes: '192x192',
    //             purpose: 'maskable',
    //             type: 'image/png',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
