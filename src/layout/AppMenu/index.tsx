import React, { memo, useEffect, useState } from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '@/assets/react.svg'
import type { IRoute } from '@/router'
import { menuList } from '@/router'

export interface IMenu {
  key: string
  label?: string
  icon?: JSX.Element
  children?: IMenu[]
}
function formatMenu(menuList: IRoute[]): IMenu[] {
  const list: IMenu[] = []
  menuList.forEach((item) => {
    list.push({
      key: item.path,
      label: item.meta.title,
      icon: item.meta.icon,
      children: item.children?.length ? formatMenu(item.children) : undefined,
    })
  })
  return list
}

const AppMenu: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const list: IMenu[] = formatMenu(menuList)
  const [activeKeys, setActiveKeys] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const openKeys = location.pathname.split('/').reduce((pre, cur) => {
      if (cur && !cur.includes('?')) {
        cur = `${pre.slice(-1) || ''}${cur.startsWith('/') ? cur : `/${cur}`}`
        return [...pre, cur]
      }
      else {
        return pre
      }
    }, [] as string[])
    setOpenKeys(openKeys)
    setActiveKeys([location.pathname])
  }, [location.pathname])

  const onChangeMenu = ({ key }: { key: string }) => {
    navigate(key)
  }

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find(key => !openKeys.includes(key))
    if (!list.map(item => item?.key).includes(latestOpenKey as string))
      setOpenKeys(keys)
    else
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
  }

  return (
    <div className="h-100vh">
      <div className="logo h-64px w-100% flex-center text-white">
        <img
          src={Logo}
          className="logo m-x-10px h-32px w-32px animate-spin animate-duration-3s rounded-full"
          alt="React logo"
        />
        {!collapsed && <div className="overflow-hidden text-center">React-Admin</div>}
      </div>
      <Menu
        mode="inline"
        theme="dark"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={activeKeys}
        onClick={e => onChangeMenu(e)}
        items={list}
      />
    </div>
  )
}
export default memo(AppMenu)
