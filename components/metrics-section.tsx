'use client'

import { Counter } from './counter'

export function MetricsSection() {
  return (
    <section className="section-py bg-bg-secondary/50 border-y border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          <Counter target={8} label="Years of Experience" suffix="+" />
          <Counter target={5} label="Industries & Domains" suffix="+" />
          <Counter target={15} label="Full Lifecycle Projects" suffix="+" />
          <Counter target={100} label="Engineering Passion" suffix="%" />
        </div>
      </div>
    </section>
  )
}
