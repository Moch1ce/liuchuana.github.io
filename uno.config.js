import { icons as mdiIcons } from '@iconify-json/mdi'
import presetAttributify from '@unocss/preset-attributify'
import transformerDirectives from '@unocss/transformer-directives'
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWind3,
  transformerVariantGroup,
} from 'unocss'
import presetTheme from 'unocss-preset-theme'
import { themeConfig } from './src/.config'

const { colorsDark, colorsLight, fonts } = themeConfig.appearance

const socialIconClassMap = {
  bilibili: 'i-ant-design:bilibili-filled',
}

const getSocialIconClass = name => socialIconClassMap[name] ?? `i-mdi-${name}`

const bilibiliFilledIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.53 1.47a.75.75 0 0 0-1.06 1.06L8.44 4.5H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h1.75v.5a.75.75 0 0 0 1.5 0v-.5h9.5v.5a.75.75 0 0 0 1.5 0v-.5H20a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3h-4.44l1.97-1.97a.75.75 0 0 0-1.06-1.06l-3 3l-.029.03h-2.882l-.029-.03zM3.5 8.5A1.5 1.5 0 0 1 5 7h14a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 18H5a1.5 1.5 0 0 1-1.5-1.5zm10.757 2.97l4 1l.485-1.94l-4-1zm-4.514 0l-4 1l-.486-1.94l4-1zm2.926 3.753a1.3 1.3 0 0 1-.192-.192c-.131-.163-.235-.354-.338-.543A8 8 0 0 0 12 14.24q-.07.121-.139.248c-.103.189-.207.38-.338.543c-.04.05-.105.121-.192.192a1.22 1.22 0 0 1-.79.277c-.117 0-.247-.078-.382-.28a1.6 1.6 0 0 1-.18-.365l-.957.292a2.6 2.6 0 0 0 .307.632c.201.299.593.721 1.212.721A2.22 2.22 0 0 0 12 15.967l.04.033c.307.249.78.5 1.419.5c.62 0 1.01-.422 1.212-.72a2.6 2.6 0 0 0 .307-.633l-.957-.292s-.017.05-.04.105a1.6 1.6 0 0 1-.14.26c-.135.202-.265.28-.382.28a1.22 1.22 0 0 1-.79-.277" clip-rule="evenodd"/></svg>'

const cssExtend = {
  ':root': {
    '--prose-borders': '#eee',
  },

  'code::before,code::after': {
    content: 'none',
  },

  ':where(:not(pre):not(a) > code)': {
    'white-space': 'normal',
    'word-wrap': 'break-word',
    'padding': '2px 4px',
    'color': '#c7254e',
    'font-size': '90%',
    'background-color': '#f9f2f4',
    'border-radius': '4px',
  },

  'li': {
    'white-space': 'normal',
    'word-wrap': 'break-word',
  },
}

export default defineConfig({
  rules: [
    [
      /^row-(\d+)-(\d)$/,
      ([, start, end]) => ({ 'grid-row': `${start}/${end}` }),
    ],
    [
      /^col-(\d+)-(\d)$/,
      ([, start, end]) => ({ 'grid-column': `${start}/${end}` }),
    ],
    [
      /^scrollbar-hide$/,
      ([_]) => `.scrollbar-hide { scrollbar-width:none;-ms-overflow-style: none; }
      .scrollbar-hide::-webkit-scrollbar {display:none;}`,
    ],
  ],
  presets: [
    presetWind3(),
    presetTypography({ cssExtend }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        'ant-design': icon => icon === 'bilibili-filled' ? bilibiliFilledIcon : undefined,
        'mdi': () => mdiIcons,
      },
    }),
    presetTheme ({
      theme: {
        dark: {
          colors: { ...colorsDark, shadow: '#FFFFFF0A' },
          // TODO 需要配置代码块颜色
        },
      },
    }),
  ],
  theme: {
    colors: { ...colorsLight, shadow: '#0000000A' },
    fontFamily: fonts,
  },
  shortcuts: [
    ['post-title', 'text-5 font-bold lh-7.5 m-0'],
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    ...themeConfig.site.socialLinks.map(social => getSocialIconClass(social.name)),
    'i-mdi-content-copy',
    'i-mdi-check',
  ],
})
