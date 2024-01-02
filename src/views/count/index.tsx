import { Button, Space } from 'antd'
import { countStore } from '@/store/count'

export default function Count() {
  const { count, decrement, increment } = countStore()
  return (
    <div>
      <Space>
        <div className="p-y-20px">{ count }</div>
      </Space>
      <br />
      <Space>
        <Button type="primary" onClick={() => decrement(1)}>+</Button>
        <Button type="primary" onClick={() => increment(1)}>-</Button>
      </Space>
    </div>
  )
}
