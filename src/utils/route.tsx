import { IPermissionList } from '@/interface/user'
import { IRoute, TRouterObj } from '@/router'
import { IMenu } from '@/store/menu/reducer'
import RandomIcons from '@/components/RandomIcons'

/**
 *
 * @param allRoutes 前端路由
 * @param userRoutes 后端返回角色路由
 * @returns 过滤后的路由
 */
export function diffRouterList(
  allRoutes: IRoute[],
  userRoutes: IPermissionList[]
): IRoute[] {
  const resultRoutes: IRoute[] = []
  allRoutes.forEach((item) => {
    if (item?.meta?.hide) {
      resultRoutes.push(item)
    }
    userRoutes.forEach((Item) => {
      if (item.path === Item.path) {
        if (item.children?.length && Item.children?.length) {
          item.children = diffRouterList(item.children, Item.children)
        }
        resultRoutes.push(item)
      }
    })
  })
  return resultRoutes
}

/**
 *
 * @description 处理路由
 * @param routes 路由表
 * @param baseUrl url
 * @param breadcrumb breadcrumb
 * @returns result
 */
export function transRoutes(
  routes: IRoute[],
  baseUrl = '',
  breadcrumb: IRoute['breadcrumb'] | [] = []
): IRoute[] {
  return routes.reduce((pre, cur) => {
    cur.path = baseUrl + cur.path
    cur.breadcrumb = [
      ...breadcrumb,
      { path: cur.path, title: cur.meta?.title, hide: cur.meta?.hide }
    ]
    if (cur.redirect) {
      cur.redirect = `${cur.path}/${cur.redirect}`
    }
    if (cur.children && cur.children.length > 0) {
      cur.children = transRoutes(
        cur.children,
        (cur.path === '/' ? '' : cur.path) + '/',
        cur.breadcrumb
      )
    }
    return pre.concat(cur)
  }, [] as IRoute[])
}

/**
 *
 * @description 平铺路由
 * @param routes 路由
 * @returns routerObj
 */
export function flatRoutes(routes: IRoute[]) {
  const routerObj: TRouterObj = {}
  flatFn(routes)
  function flatFn(routes: IRoute[]) {
    routes.forEach((item) => {
      if (item.children && item.children.length > 0) {
        flatFn(item.children)
      }
      delete item.children
      routerObj[item.path] = { ...item }
    })
  }
  return routerObj
}

/**
 *
 * @description 处理菜单
 * @param routes 用户菜单
 * @param index 树层级
 * @returns result
 */
export function transMenu(routes: IPermissionList[], index = 0): IMenu[] {
  const resultRoutes: IMenu[] = []
  index++
  routes.forEach((item) => {
    if (item.children && item.children.length === 1 && index === 1) {
      item = item.children[0]
    }
    if (item.children && item.children.length > 0) {
      item.children = transMenu(item.children, index) as any
    }
    const result = {
      key: item?.path,
      label: item?.name,
      icon: <div className="i-bi:yelp" /> || <RandomIcons />,
      children: item.children
    }
    if (!result.children) {
      delete result.children
    }
    resultRoutes.push(result)
  })
  return resultRoutes
}
