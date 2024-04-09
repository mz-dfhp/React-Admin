import { Button, Space } from 'antd'
import { countStore } from '@/store/count'

export default function Count() {
  const { count, decrement, increment } = countStore()
  return (
    <div>
      <div className="py-1"><Button type="primary">{count}</Button></div>
      <Space>
        <Button type="primary" onClick={() => decrement(1)}>+</Button>
        <Button type="primary" onClick={() => increment(1)}>-</Button>
      </Space>
    </div>
  )
}
