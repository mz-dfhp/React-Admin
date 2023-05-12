import { memo, useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useAppSelector } from '@/hooks/redux'
import { IRoute } from '@/router'

const BreadcrumbNav: React.FC = () => {
  const location = useLocation()
  const [breadcrumbList, setBreadcrumbList] = useState<IRoute['breadcrumb']>([])
  const { routerObj } = useAppSelector((state) => state.routerStore)

  useEffect(() => {
    const breadcrumb = routerObj[location.pathname]?.breadcrumb
    setBreadcrumbList(breadcrumb)
  }, [location.pathname])

  return (
    <div className="m-x-15px flex">
      {breadcrumbList?.map((item, index) => (
        <div key={item.path} className="flex">
          {index !== 0 && <div className="m-x-4px">/</div>}
          <div>
            {item.path === location.pathname ? (
              <span className="p-x-5px p-y-3px rounded-4px hover-bg-#f5f5f5">
                {item.title}
              </span>
            ) : (
              <Link
                to={item.path!}
                className="p-x-5px p-y-3px rounded-4px hover-bg-#f5f5f5"
              >
                {item.title}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default memo(BreadcrumbNav)
