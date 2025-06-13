import * as React from "react"
import { forwardRef } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'medium', isLoading = false, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    const variantStyles = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus-visible:ring-gray-400"
    }
    const sizeStyles = {
      small: "text-sm px-3 py-1",
      medium: "text-base px-4 py-2",
      large: "text-lg px-6 py-3"
    }

    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${isLoading ? 'opacity-70 cursor-not-allowed' : ''} ${className ?? ''}`

    return (
      <button
        className={buttonClasses}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <>
            <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {children}
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = "Button"

Button.displayName = "Button"

export { Button }
