'use client'
import { useTheme } from 'next-themes'
import clsx from 'clsx'

const NitSkeleton = ({ width = '100%', height = '1rem', className = '' }) => {
  const { theme, resolvedTheme } = useTheme()
  const isDark = theme === 'dark' || resolvedTheme === 'dark'

  const backgroundClass = isDark ? 'bg-gray-800' : 'bg-gray-300'

  return (
    <div
      className={clsx(
        'animate-pulse rounded',
        backgroundClass,
        className
      )}
      style={{ width, height }}
    />
  )
}

export default NitSkeleton
