import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ILoginForm } from '@/interface/user'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setToken } from '@/store/user/actions'

const Login: React.FC = () => {
  const navigate = useNavigate()

  const dispath = useAppDispatch()
  const { token } = useAppSelector((state) => state.userStore)

  const [form] = useState<ILoginForm>({ username: '', password: '' })
  const [loading, setLoading] = useState<boolean>(false)
  const [formRef] = Form.useForm()

  const setDefalut = (role: string) => {
    formRef.setFieldsValue({ username: role, password: role })
  }
  const onFinish = async (values: ILoginForm) => {
    if (!(values.username === 'admin' || values.username === 'test')) return
    setLoading(true)
    await dispath(setToken(values))
    setLoading(false)
    navigate('/', {
      replace: true
    })
  }
  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo)
  }
  return token ? (
    <></>
  ) : (
    <div className="bg-#5B86E5 w100% h100% flex-center">
      <div className="w80% h80% bg-#ABC1F2 flex rounded-10px overflow-hidden">
        <div className="lg-flex-1"></div>
        <div className="bg-#ffffff flex-1 flex">
          <Form
            form={formRef}
            className="m-auto w80%"
            name="basic"
            initialValues={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item>
              <div className="text-8 font-bold p-b-10 text-#5B86E5">
                mz-react-admin
              </div>
            </Form.Item>
            <Form.Item
              label=""
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label=""
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' }
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
                className="w-100%"
              >
                login
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                loading={loading}
                onClick={() => setDefalut('admin')}
              >
                admin
              </Button>
              <Button
                className="m-l-2"
                loading={loading}
                onClick={() => setDefalut('test')}
              >
                test
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}
export default Login
