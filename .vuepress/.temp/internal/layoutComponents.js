import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Volumes/新加卷/open_source/modern-hack/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Volumes/新加卷/open_source/modern-hack/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
