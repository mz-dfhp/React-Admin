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
    if (cur.children && cur.children.length > 0) {
      ;(cur.children as IMenu[]) = formatRouteToMenu(
        cur.children,
        cur.path + '/'
      )
    }
    return pre.concat(getRouteToMenu(cur))
  }, [] as IMenu[])
}

function getRouteToMenu(item: IRoute): IMenu {
  if (item.children?.length) {
    return {
      key: item?.path,
      label: item.meta?.title,
      icon: item.meta?.icon || <RandomIcons />,
      children: item.children
    }
  } else {
    return {
      key: item?.path,
      label: item.meta?.title,
      icon: item.meta?.icon || <RandomIcons />
    }
  }
}
