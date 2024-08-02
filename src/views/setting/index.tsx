import { Button, Card, DatePicker, Select, Space } from 'antd'
import { settingStore } from '@/store/setting'

export default function Setting() {
  const { isDark, toggleDark, locale, setLocale } = settingStore()

  return (
    <div>
      <Space direction="vertical">
        <Card>
          <Space>
            <Button type="primary">{`isDark:${isDark}`}</Button>
            <Button type="primary" onClick={toggleDark}>toggle</Button>
          </Space>
        </Card>
        <Card>
          <Space>
            <DatePicker />
            <Button type="primary">{`locale:${locale}`}</Button>
            <Select
              defaultValue={locale}
              value={locale}
              onChange={value => setLocale(value)}
              options={[
                { label: '中文', value: 'zh-cn' },
                { label: '英文', value: 'en' },
              ]}
            />
          </Space>
        </Card>
      </Space>
    </div>
  )
}
