import { Button, Card, Space } from 'antd'
import { useCallback, useState } from 'react'

function useUpdate() {
  const [, forceUpdate] = useState({})
  const update = useCallback(() => {
    console.log('useUpdate')
    return forceUpdate({})
  }, [])
  return update
}

export default function Index() {
  const update = useUpdate()
  const [count, setCount] = useState(0)
  return (
    <Card>
      <Space>
        <div>{`Time:${Date.now()}`}</div>
        <Button type="primary" onClick={update}>useUpdate</Button>
        <Button type="primary" onClick={() => setCount(count + 1)}>{count}</Button>
      </Space>
    </Card>
  )
}
