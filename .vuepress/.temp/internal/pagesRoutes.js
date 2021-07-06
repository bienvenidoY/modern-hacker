import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-18cc131e","/CHANGELOG.html","",["/CHANGELOG.md"]],
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-147825fb","/docs/","",["/docs/index.html","/docs/README.md"]],
  ["v-3706649a","/404.html","",[]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
