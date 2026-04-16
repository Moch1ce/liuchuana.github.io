import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  site: {
    title: '芝士饭团',
    subtitle: 'Cheese Rice Ball',
    author: '芝士饭团',
    description: '芝士饭团的博客。',
    website: 'https://liuchuana.com/',
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/liuchuana',
      },
      {
        name: 'bilibili',
        href: 'https://space.bilibili.com/4534580',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
    ],
  },
  seo: {
    twitter: '',
  },
  comment: {
    giscus: {
      repo: 'liuchuana/liuchuana.github.io',
      repoId: 'R_kgDOMu1c4g',
      category: 'Announcements',
      categoryId: 'DIC_kwDOMu1c4s4C6zmG',
      mapping: 'pathname',
      term: '',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'preferred_color_scheme',
      lang: 'zh-CN',
      loading: 'lazy',
    },
  },
  // site: { title: "講評世界" },
}
