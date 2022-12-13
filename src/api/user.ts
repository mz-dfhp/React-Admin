import { ILoginForm, IUserInfo } from '@/interface/user'
const routeList = [
  {
    path: 'index',
    name: 'Index'
  },
  {
    path: 'component',
    name: 'Component',
    children: [
      {
        path: 'component-one',
        name: 'Component-one'
      },
      {
        path: 'component-two',
        name: 'Component-two'
      }
    ]
  },
  {
    path: 'demo',
    name: 'Demo',
    children: [
      {
        path: 'demo-one',
        name: 'Demo-one'
      },
      {
        path: 'demo-two',
        name: 'Demo-two'
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
      filterPath = ['component']
    }
    setTimeout(() => {
      resolve({
        name: role,
        avatar:
          role === 'admin'
            ? 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            : 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        permission: routeList.filter((item) => !filterPath.includes(item.path))
      })
    })
  })
}
