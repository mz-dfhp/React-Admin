import { memo } from 'react'

const icons = [
  'i-bi:123',
  'i-bi:0-circle',
  'i-bi:0-circle-fill',
  'i-bi:0-square',
  'i-bi:0-square-fill',
  'i-bi:1-circle',
  'i-bi:1-circle-fill',
  'i-bi:1-square',
  'i-bi:1-square-fill',
  'i-bi:2-circle',
  'i-bi:2-circle-fill',
  'i-bi:2-square',
  'i-bi:2-square-fill',
  'i-bi:3-circle',
  'i-bi:3-circle-fill',
  'i-bi:3-square',
  'i-bi:3-square-fill',
  'i-bi:4-circle',
  'i-bi:4-circle-fill',
  'i-bi:4-square',
  'i-bi:4-square-fill',
  'i-bi:5-circle',
  'i-bi:5-circle-fill',
  'i-bi:5-square',
  'i-bi:5-square-fill',
  'i-bi:6-circle',
  'i-bi:6-circle-fill',
  'i-bi:6-square',
  'i-bi:6-square-fill',
  'i-bi:7-circle',
  'i-bi:7-circle-fill',
  'i-bi:7-square',
  'i-bi:7-square-fill',
  'i-bi:8-circle',
  'i-bi:8-circle-fill',
  'i-bi:8-square',
  'i-bi:8-square-fill',
  'i-bi:9-circle',
  'i-bi:9-circle-fill',
  'i-bi:9-square',
  'i-bi:9-square-fill',
  'i-bi:activity',
  'i-bi:airplane',
  'i-bi:airplane-engines',
  'i-bi:airplane-engines-fill',
  'i-bi:airplane-fill',
  'i-bi:alarm'
]

function randomNumber(m: number, n: number) {
  const num = Math.floor(Math.random() * (m - n) + n)
  return num
}

const RandomIcons: React.FC = () => {
  return <div className={icons[randomNumber(0, icons.length)] + ' m-r-8px'} />
}

export default memo(RandomIcons)
