import React, { useState, useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
type TForm = { username: string | number; password: string | number }

const Login: React.FC = () => {
  const info = useLocation()
  useEffect(() => {
    console.log(info)
  }, [])
  const [form] = useState<TForm>({ username: '', password: '' })
  const [loading, setLoading] = useState<boolean>(false)
  const [formRef] = Form.useForm()
  const navigate = useNavigate()
  const setDefalut = (role: string) => {
    formRef.setFieldsValue({ username: role, password: role })
  }
  const onFinish = (values: TForm) => {
    console.log(values)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/', {
        replace: true
      })
    }, 2000)
  }

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo)
  }
  return (
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
              <Button type="primary" htmlType="submit" block loading={loading}>
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
