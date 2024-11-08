import React from 'react'
import { cn } from '@/lib/utils'

interface AccordionGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: {
    default?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  children: React.ReactNode
}

export function AccordionGrid({
  columns = {
    default: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 3,
  },
  className,
  children,
  ...props
}: AccordionGridProps) {
  const gridClass = cn(
    'grid gap-4',
    `grid-cols-${columns.default}`,
    columns.sm && `sm:grid-cols-${columns.sm}`,
    columns.md && `md:grid-cols-${columns.md}`,
    columns.lg && `lg:grid-cols-${columns.lg}`,
    columns.xl && `xl:grid-cols-${columns.xl}`,
    className
  )

  return (
    <div className={gridClass} {...props}>
      {children}
    </div>
  )
} 