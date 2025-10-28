'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
  startDelay?: number
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
  className = '',
  startDelay = 0
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [shouldStart, setShouldStart] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    // Wait for startDelay before beginning animation
    const delayTimer = setTimeout(() => {
      setShouldStart(true)
    }, startDelay)

    return () => clearTimeout(delayTimer)
  }, [isInView, startDelay])

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [shouldStart, end, duration])

  return (
    <div ref={ref} className={className}>
      {count}{suffix}
    </div>
  )
}
