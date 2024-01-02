import React, { useEffect, useState } from 'react'

interface NumberCounterProps {
  value: number
}

const NumberCounter: React.FC<NumberCounterProps> = ({ value }) => {
  const [count, setCount] = useState<number>(0)
  useEffect(() => {
    const animationDuration = 4000 // 动画持续时间，单位毫秒
    const startTime = performance.now()

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(1, elapsed / animationDuration)
      const easedProgress = 1 - (1 - progress) ** 3 // ease-out 缓动函数
      const nextCount = Math.ceil(easedProgress * value)

      setCount(nextCount)

      if (progress < 1)
        requestAnimationFrame(newTime => updateCount(newTime))
    }

    requestAnimationFrame(newTime => updateCount(newTime))
  }, [value])

  return <span>{count}</span>
}

export default NumberCounter
