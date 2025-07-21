import React from "react"
import { clsx } from "clsx"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "sm" | "lg"
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = "default", 
  size = "default", 
  className, 
  children, 
  ...props 
}) => {
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "hover:bg-gray-100 dark:hover:bg-gray-800",
    outline: "border border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
  }
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3 py-1",
    lg: "h-11 px-8 py-2"
  }

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
