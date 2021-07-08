import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  bundler: '@vuepress/vite',
  bundlerConfig: {
    // vite 打包工具的选项
  },
  dest: 'doc-dist',
  title: "ModernHack",
  description: "一个处理H5端浏览器兼容问题的方案集合",
  themeConfig: {
    logo: '/logo.png',
    navbar: [
      {text: '首页', link: '/'},
      {text: '文档', link: '/guide'},
      {text: 'Github', link: 'https://www.baidu.com'}
    ]
  },
  /*plugins: [
    [
      '@vuepress/docsearch',
      {
        apiKey: 'asdfj;l',
        indexName: 'name',
        locales: {
          placeholder: '搜索文档',
        },
      },
    ],
  ],*/
})
