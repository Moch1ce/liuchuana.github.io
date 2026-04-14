import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  site: {
    website: 'https://liuchuana.com/',
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
  // seo: { twitter: "@moeyua13" },
}
