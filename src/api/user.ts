import { ILoginForm, IUserInfo } from '@/interface/user'
const routeList = [
  {
    path: '/',
    name: '首页',
    children: [
      {
        path: '/index',
        name: '工作台'
      }
    ]
  },
  {
    path: '/component',
    name: 'Component',
    children: [
      {
        path: '/component/component-one',
        name: 'Component-one'
      },
      {
        path: '/component/component-two',
        name: 'Component-two'
      }
    ]
  },
  {
    path: '/demo',
    name: 'Demo',
    children: [
      {
        path: '/demo/demo-one',
        name: 'Demo-one',
        children: [
          {
            path: '/demo/demo-one/demo-one-son',
            name: 'Demo-one-son'
          }
        ]
      },
      {
        path: '/demo/demo-two',
        name: 'Demo-two'
      }
    ]
  },
  {
    path: '/keep',
    name: 'Keep缓存',
    children: [
      {
        path: '/keep/keep-one',
        name: 'Keep-one'
      },
      {
        path: '/keep/keep-two',
        name: 'Keep-two'
      }
    ]
  }
]

export const loginIn = (login: ILoginForm) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(login.username)
    })
  })
}

export const getUserInfo = (role: string) => {
  return new Promise<IUserInfo>((resolve) => {
    let filterPath: string[] = []
    if (role !== 'admin') {
      filterPath = ['/component']
    }
    setTimeout(() => {
      resolve({
        name: role,
        avatar:
          role === 'admin'
            ? 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            : 'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
        permission: routeList.filter((item) => !filterPath.includes(item.path))
      })
    })
  })
}
