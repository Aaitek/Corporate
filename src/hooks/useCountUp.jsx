import { useState, useEffect } from 'react'

export const useCountUp = (end, start = 0, duration = 2.5, enabled = true) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!enabled) {
      setCount(start)
      return
    }

    let startTime = null
    const startValue = start
    const endValue = end

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [end, start, duration, enabled])

  return count
}

// Simple CountUp component
export const CountUp = ({ start = 0, end, duration = 2.5, suffix = '', separator = ',', decimals = 0, enabled = true }) => {
  const count = useCountUp(end, start, duration, enabled)
  
  const formatNumber = (num) => {
    if (decimals > 0) {
      return num.toFixed(decimals)
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
  }

  return <span>{formatNumber(count)}{suffix}</span>
}



