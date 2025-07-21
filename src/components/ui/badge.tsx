import React from "react"
import { clsx } from "clsx"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline"
}

export const Badge: React.FC<BadgeProps> = ({ 
  variant = "default", 
  className, 
  children, 
  ...props 
}) => {
  const variants = {
    default: "bg-blue-600 text-white",
    secondary: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100",
    outline: "border border-gray-300 text-gray-900 dark:border-gray-700 dark:text-gray-100"
  }

  return (
    <div
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
