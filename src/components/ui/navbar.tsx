import { cn } from '@/lib/utils'
import React from 'react'

export interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Nav = React.forwardRef<HTMLDivElement, NavProps>(({ className, ...props }, ref) => {
  return (
    <nav
      ref={ref}
      className={cn(className, 'flex flex-col items-center justify-start flex-1')}
      {...props}>
      <ul className="flex flex-col items-center justify-center w-full gap-2 p-4">
        {props.children}
      </ul>
    </nav>
  )
})
Nav.displayName = 'Nav'

interface NavItemProps extends React.HTMLAttributes<HTMLLIElement> {
  icon?: React.ReactNode
  active?: boolean
  text?: string
  href?: string
}

const NavItem = React.forwardRef<HTMLLIElement, NavItemProps>(
  ({ icon, active, href = '#', text, className, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn(
          className,
          'w-full transition-all hover:bg-gray-100 rounded-xl',
          active && 'bg-gray-100'
        )}
        {...props}>
        <a
          href={href}
          className="flex items-center justify-center w-full px-5 text-sm font-medium transition-colors rounded-md h-14 text-neutral-600">
          {icon && icon}
          {text && <span className="ml-2">{text}</span>}
        </a>
      </li>
    )
  }
)

NavItem.displayName = 'NavItem'

export { Nav, NavItem }
