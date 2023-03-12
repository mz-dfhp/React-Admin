import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { Button, Card } from 'antd'
import { increment, decrement } from '@/store/count/actions'

export default function Index() {
  const store = useAppSelector((state) => state.countStore)
  const dispatch = useAppDispatch()
  const changeCount = (flag: boolean) => {
    if (flag) {
      dispatch(increment())
    } else {
      dispatch(decrement())
    }
  }
  const navigate = useNavigate()
  const params = useParams()
  const goToPage = (path: string) => {
    navigate(path)
  }
  return (
    <div>
      <Card>
        <Button type="primary">{store.count}</Button>
      </Card>
      <Card>
        <Button type="primary">{store.count}</Button>
      </Card>
      <Card>
        <Button type="primary">{store.count}</Button>
      </Card>
      <Card>
        <Button type="primary">{store.count}</Button>
      </Card>
      <Card>
        <Button type="primary">{store.count}</Button>
      </Card>
      <Card>
        <Button type="primary">{store.count}</Button>
      </Card>
      <Card>
        <Button type="primary">{store.count}</Button>
      </Card>
      <br />
      <br />
      <Button type="primary" onClick={() => goToPage('/login')}>
        login
      </Button>
      <br />
      <br />
      <Button
        type="primary"
        onClick={() => goToPage('/demo/demo-one/demo-one-son?id=1')}
      >
        demo
      </Button>
      <br />
      <br />
      <Button type="primary" onClick={() => changeCount(true)}>
        +
      </Button>
      <br />
      <br />
      <Button type="primary" onClick={() => changeCount(false)}>
        -
      </Button>
    </div>
  )
}
