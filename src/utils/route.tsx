import { IPermissionList } from '@/interface/user'
import { IRoute } from '@/router'
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
      if (item.name === Item.name) {
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
 * @param list 过滤后的路由
 * @returns 左侧菜单栏数据
 */
export function formatRouteToMenu(list: IRoute[], baseUrl = '/'): IMenu[] {
  return list.reduce((pre, cur) => {
    cur.path = baseUrl + cur.path
    if (cur.redirect) {
      cur.redirect = `${cur.path}/${cur.redirect}`
    }
    if (cur.children && cur.children.length > 0) {
      ;(cur.children as IMenu[]) = formatRouteToMenu(
        cur.children,
        cur.path + '/'
      )
    }
    return pre.concat(getRouteToMenu(cur))
  }, [] as IMenu[])
}

/**
 *
 * @param item 路由
 * @returns 菜单所需要的格式
 */
function getRouteToMenu(item: IRoute): IMenu {
  const result = {
    key: item?.path,
    label: item.meta?.title,
    title: item.meta?.title,
    icon: item.meta?.icon || <RandomIcons />,
    name: item.name,
    path: item.path,
    meta: item.meta,
    redirect: item.redirect || '',
    children: item.children
  }
  if (!item.children?.length) {
    delete result.children
  }
  return result
}
