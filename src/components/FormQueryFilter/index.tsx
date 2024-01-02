import { Button, Form } from 'antd'
import type { ReactElement } from 'react'
import React, { memo } from 'react'
import './index.css'

interface IProps {
  initialValues: Record<string, any>
  children: ReactElement<any, any> | ReactElement<any, any>[]
  onSearch?: (e: Record<string, any>) => void
  onReset?: () => void
}

const FormQueryFilter: React.FC<IProps> = (props: IProps) => {
  const { initialValues = {}, children, onSearch = () => ({}), onReset = () => ({}) } = props
  const [formRef] = Form.useForm()
  async function onFinish(values: Record<string, any>) {
    onSearch(values)
  }
  function onResetForm() {
    formRef.resetFields()
    onReset()
    onSearch(formRef.getFieldsValue())
  }
  return (
    <Form
      className="form-query-filter"
      layout="inline"
      form={formRef}
      initialValues={initialValues || {}}
      onFinish={onFinish}
    >
      {children}
      <Form.Item
        label=""
      >
        <Button
          type="primary"
          htmlType="submit"
        >
          搜索
        </Button>
        <Button
          className="m-l-8px"
          onClick={onResetForm}
        >
          重置
        </Button>
      </Form.Item>
    </Form>
  )
}

export default memo(FormQueryFilter)
