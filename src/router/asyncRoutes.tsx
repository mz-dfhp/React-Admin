import { lazy } from 'react'
import type { IRoute } from '.'

type ImportMetaGlob = Record<string, () => Promise<{ default: React.ComponentType }>>

const modules = import.meta.glob(['../views/**/*.(t|j)sx', '!../views/basics/**']) as ImportMetaGlob

const asyncRoutes: Array<IRoute> = Object.entries(modules).map(([key, value]) => {
  const path = key
    .replace('../views', '')
    .replace(/\.(j|t)sx$/, '')
    .replace(/\/index$/, '')

  return {
    path,
    element: (Component => <Component />)(lazy(value)),
    meta: {
      title: path,
      icon: <div className="icon-[bi--grid-fill]" />,
    },
  }
})

const menuList = buildTree(asyncRoutes)

function buildTree(routes: IRoute[]): IRoute[] {
  const root: IRoute[] = []

  routes.forEach((route) => {
    const parts = route.path.split('/').filter(part => part)
    let currentLevel = root

    parts.forEach((_part, index) => {
      const partPath = `/${parts.slice(0, index + 1).join('/')}`
      let existingNode = currentLevel.find(node => node.path === partPath)

      if (!existingNode) {
        existingNode = {
          path: partPath,
          element: null,
          children: [],
          meta: {
            title: partPath.split('/').slice(-1)[0],
            icon: <div className="icon-[bi--grid-fill]" />,
          },
        }
        currentLevel.push(existingNode)
      }

      if (index === parts.length - 1)
        existingNode = { ...route }

      if (!existingNode.children)
        existingNode.children = []

      currentLevel = existingNode.children
    })
  })

  return root
}

export { asyncRoutes, menuList }
