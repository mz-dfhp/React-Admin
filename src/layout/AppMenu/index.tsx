import { useEffect, useState } from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '@/assets/react.svg'
import { routerStore } from '@/store/router'

export default function AppMenu({ collapsed }: { collapsed: boolean }) {
  const { menuList } = routerStore()
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
    if (!menuList.map(item => item?.key).includes(latestOpenKey as string))
      setOpenKeys(keys)
    else
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
  }

  return (
    <div className="h-[100vh]">
      <div className="logo h-[64px] w-full flex items-center justify-center">
        <img
          src={Logo}
          className="logo mx-[10px] h-[32px] w-[32px] animate-spin-slow rounded-full"
          alt="React logo"
        />
        {!collapsed && <span className="overflow-hidden text-center">React-Admin</span>}
      </div>
      <Menu
        className="border-none"
        mode="inline"
        theme="light"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={activeKeys}
        onClick={e => onChangeMenu(e)}
        items={menuList}
      />
    </div>
  )
}
