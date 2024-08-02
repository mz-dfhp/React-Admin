import { Button, Card, Space } from 'antd'
import { countStore } from '@/store/count'

export default function Count() {
  const { count, decrement, increment } = countStore()
  return (
    <div>
      <Space direction="vertical">
        <Card>
          <Button type="primary">{count}</Button>
        </Card>
        <Card>
          <Space>
            <Button type="primary" onClick={() => decrement(1)}>+</Button>
            <Button type="primary" onClick={() => increment(1)}>-</Button>
          </Space>
        </Card>
      </Space>
    </div>
  )
}
