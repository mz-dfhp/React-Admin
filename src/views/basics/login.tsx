import { useState } from 'react'
import { Button, Form, Input, message, theme } from 'antd'
import { useNavigate } from 'react-router-dom'
import { userStore } from '@/store/user'
import { getUserInfo, login } from '@/api/user'
import LoginSvg from '@/assets/login-bg.svg'

export default function Login() {
  const { token: { colorBgContainer } } = theme.useToken()
  const { setUserInfo, setToken } = userStore()
  const navigate = useNavigate()
  const [form] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState<boolean>(false)
  const [formRef] = Form.useForm()

  async function onFinish(values: typeof form) {
    try {
      if (values.username !== 'admin' || values.password !== '123456')
        return message.error('登录失败')
      setLoading(true)
      const { data: { token } } = await login(values)
      setToken(token)
      const { data: { userInfo } } = await getUserInfo()
      setUserInfo(userInfo)
      message.success('登录成功')
      navigate('/', {
        replace: true,
      })
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }
  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div
      className="h-full w-full flex items-center justify-center px-[20px]"
      style={{ backgroundImage: 'linear-gradient(94deg, #232d3c, #162b5b, #20469c, #2863e3)' }}
    >
      <div className="h-[554px] w-full flex overflow-hidden rounded-[10px] lg:w-[960px]" style={{ background: colorBgContainer }}>
        <div className="w-0 flex items-center justify-center overflow-hidden lg:flex-1 lg:overflow-visible">
          <img width={382} height={382} src={LoginSvg} />
        </div>
        <div className="flex flex-1" style={{ background: colorBgContainer }}>
          <Form
            form={formRef}
            size="large"
            className="m-auto overflow-hidden rounded-[8px] p-[30px]"
            style={{ background: colorBgContainer }}
            layout="vertical"
            initialValues={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item>
              <div className="pb-[20px] text-center text-[22px] text-[#5B86E5] font-bold">
                React-Admin
              </div>
            </Form.Item>
            <Form.Item
              label=""
              name="username"
              rules={[
                { required: true, message: '请输入用户名' },
              ]}
            >
              <Input
                prefix={(
                  <div className="icon-[bi--person] px-[5px] text-[20px]">
                  </div>
                )}
                maxLength={11}
                placeholder="admin"
              />
            </Form.Item>
            <Form.Item
              label=""
              name="password"
              rules={[
                { required: true, message: '请输入密码' },
              ]}
            >
              <Input
                type="password"
                prefix={<div className="icon-[bi--bag-dash] px-[5px] text-[20px]"></div>}
                maxLength={6}
                placeholder="123456"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
                className="w-full"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}
