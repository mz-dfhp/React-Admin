import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// eslint-disable-next-line react/prop-types
const Permissions = ({ app }: { app: JSX.Element }) => {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname === '/') navigate('/index')
  }, [location.pathname])
  return <>{app}</>
}

export default Permissions
