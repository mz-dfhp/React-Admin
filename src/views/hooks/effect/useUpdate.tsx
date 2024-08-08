import { Button, Card } from 'antd'
import { useCallback, useState } from 'react'
import CodeHighlighter from '@/components/CodeHighlighter'

const code = `
function useUpdate() {
  const [, forceUpdate] = useState({})
  const update = useCallback(() => {
    return forceUpdate({})
  }, [])
  return update
}
`

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
    <>
      <div className="flex flex-col gap-4">
        <Card>
          <div className="flex items-center gap-4">
            <div>{`Time:${Date.now()}`}</div>
            <Button type="primary" onClick={update}>useUpdate</Button>
            <Button type="primary" onClick={() => setCount(count + 1)}>{count}</Button>
          </div>
        </Card>
        <Card>
          <CodeHighlighter code={code} />
        </Card>
      </div>
    </>
  )
}
