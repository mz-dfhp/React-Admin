import React, { memo, useRef, useState } from 'react'
import { Tabs } from 'antd'

const defaultPanes = new Array(2).fill(null).map((_, index) => {
  const id = String(index + 1)
  return {
    label: `Tab ${id}`,
    key: id
  }
})

const AppTabs: React.FC = () => {
  const [activeKey, setActiveKey] = useState(defaultPanes[0].key)
  const [items, setItems] = useState(defaultPanes)
  const newTabIndex = useRef(0)

  const onChange = (key: string) => {
    setActiveKey(key)
  }

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`
    setItems([...items, { label: 'New Tab', key: newActiveKey }])
    setActiveKey(newActiveKey)
  }

  const remove = (targetKey: string) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey)
    const newPanes = items.filter((pane) => pane.key !== targetKey)
    if (newPanes.length && targetKey === activeKey) {
      const { key } =
        newPanes[
          targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
        ]
      setActiveKey(key)
    }
    setItems(newPanes)
  }

  const onEdit = (targetKey: string, action: 'add' | 'remove') => {
    if (action === 'add') {
      add()
    } else {
      remove(targetKey)
    }
  }

  return (
    <div className="p-x-20px bg-white">
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
        items={items}
      />
    </div>
  )
}

export default memo(AppTabs)
