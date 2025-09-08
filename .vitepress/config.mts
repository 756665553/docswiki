import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({


  markdown: {
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'

    }
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      description: 'VitePress 多语言示例',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'My Website',
      description: 'VitePress Multi-language Example',
      link: '/en/',
    },



  },


  lang: "zh-CN",
  title: "8Bibo Server Wiki",
  description: "A VitePress Site",
  themeConfig: {


    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      },
    },
    // 搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '退出',
            },
          },
        },
      },
    },

    // 上下页
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // 页脚版权
    footer: {
      message: 'Thank you, the server provided by Minecraft.',
      copyright: 'Copyright © 2019-2025 8Bibo'
    },




    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '合集',
        items: [
          { text: '目录', link: '/list/' },
          { text: '更新记录', link: '/up.md' },
          { text: '漏洞', link: '/item-3' }
        ],
      },
    ],

    sidebar: {
      // 单独为 /config/ 路径配置侧边栏
      '/up.md': [
        // 第一组：可折叠的基础配置
        {
          text: '基础', // 分组标题（侧边栏中显示的大标题）
          collapsed: false, // 可选：默认是否展开（false=展开，true=折叠，默认true）
          items: [ // 分组下的子链接（点击展开/折叠时显示的内容）
            { text: '漏洞修复', link: '/config/start.md' },
            { text: '已知问题', link: '/config/env.md' },
            { text: '玩家反馈', link: '/config/structure.md' }
          ]
        },
        // 第二组：可折叠的高级配置（多组可叠加）
        {
          text: '更多',
          collapsed: true, // 默认折叠
          items: [
            { text: '性能优化', link: '/config/optimize.md' },
            { text: '安全设置', link: '/config/security.md' },
            { text: '关于', link: '/config/theme.md' }
          ]
        },
        // 可选：非分组的单个链接（和可折叠分组共存）
        { text: '返回目录', link: '/list/' }
      ],


      '/': [
        // 分组1：站点信息（可折叠）

        {
          text: '开始',
          items: [
            { text: '服主的一封信', link: '/me.md' },
            { text: '服务器的演变史', link: '/changelog.md' }
          ]
        },
        {
          text: '站点信息', // 折叠模块标题

          collapsed: false, // 默认展开（可选）
          items: [
            { text: '关于我们', link: '/contact.md' }, // 根目录下的 about.md
            { text: '更新日志', link: '/up.md' }
          ]
        },
        // 分组2：服务条款（可折叠）
        {
          text: '教程与问题',

          collapsed: true, // 默认折叠（可选）
          items: [
            { text: '如何进服务器?', link: '/help//help.md' },
            { text: '在哪里联系管理员?', link: '/help//help.md' }
          ]
        },
        // 分组3：联系与帮助（可折叠）
        {
          text: '联系与帮助',

          collapsed: true,
          items: [
            { text: '联系我们', link: '/contact.md' },
            { text: '帮助中心', link: '/help//help.md' }
          ]
        },
         { text: '返回目录', link: '/list/' },
      ],

    },







    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      // 可以通过将 SVG 作为字符串传递来添加自定义图标：
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...',
        // 也可以为无障碍添加一个自定义标签 (可选但推荐):
        ariaLabel: 'cool link'
      }
    ]
  }
})
export interface LastUpdatedOptions {
  /**
   * @default 'Last updated'
   */
  text?: string

  /**
   * @default
   * { dateStyle: 'short',  timeStyle: 'short' }
   */
  formatOptions?: Intl.DateTimeFormatOptions & { forceLocale?: boolean }
}
