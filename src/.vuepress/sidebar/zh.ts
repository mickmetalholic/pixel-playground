import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar({
  '/': [
    '',
    {
      text: 'PC游戏',
      icon: 'note',
      prefix: 'pc-game/',
      children: 'structure',
    }
  ],
});
