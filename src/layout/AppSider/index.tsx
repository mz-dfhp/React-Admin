import { memo, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu, MenuProps } from 'antd'
import Logo from '@/assets/logo.svg'
const { Sider } = Layout
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
const menuList = [
  {
    key: '/index',
    icon: <UserOutlined />,
    label: '首页'
  },
  {
    key: '/demo',
    icon: <VideoCameraOutlined />,
    label: 'Demo',
    children: [
      {
        key: '/demo/demo-one',
        icon: <VideoCameraOutlined />,
        label: 'Demo-one'
      }
    ]
  },
  {
    key: '/component',
    icon: <VideoCameraOutlined />,
    label: 'Component',
    children: [
      {
        key: '/component/component-one',
        icon: <VideoCameraOutlined />,
        label: 'component-one'
      },
      {
        key: '/component/component-two',
        icon: <VideoCameraOutlined />,
        label: 'component-two'
      }
    ]
  },
  {
    key: '404',
    icon: <UploadOutlined />,
    label: '404'
  },
  {
    key: '403',
    icon: <UploadOutlined />,
    label: '403'
  }
]

const AppSider = ({ collapsed }: { collapsed: boolean }) => {
  console.log('我创建了')
  const [activeKeys, setActiveKeys] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    const openKeys = location.pathname.split('/').map((item) => '/' + item)
    setOpenKeys(openKeys.slice(1, openKeys.length - 1))
    setActiveKeys([location.pathname])
    return () => {
      console.log('我销毁了')
    }
  }, [location.pathname])
  const changeMenu = ({ key }: { key: string }) => {
    navigate(key)
  }
  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key))
    if (!menuList.map((item) => item.key).includes(latestOpenKey as string)) {
      console.log(openKeys)
      console.log(latestOpenKey)
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo h-64px w-100% text-white  flex-center">
        <img
          src={Logo}
          className="logo animate-spin animate-duration-3s m-r-10px"
          alt="React logo"
        />
        {!collapsed && <div>木子</div>}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={activeKeys}
        onClick={(e) => changeMenu(e)}
        items={menuList}
      />
    </Sider>
  )
}
export default memo(AppSider)
