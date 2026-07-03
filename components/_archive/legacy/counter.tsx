'use client'

import { useEffect, useRef } from 'react'

interface CounterProps {
  target: number
  label: string
  suffix?: string
}

export function Counter({ target, label, suffix = '' }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        const element = ref.current?.querySelector('[data-count]') as HTMLElement
        if (!element) return

        let current = 0
        const increment = target / 60
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          element.textContent = Math.floor(current) + suffix
        }, 30)
      }
    })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, suffix])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-accent-warm mb-3">
        <span data-count>0{suffix}</span>
      </div>
      <p className="text-text-secondary text-sm md:text-base">{label}</p>
    </div>
  )
}
