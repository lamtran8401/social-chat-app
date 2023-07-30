import * as React from 'react'

import { cn } from '@/lib/utils'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { Label } from '@radix-ui/react-label'

type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  name: string
  icon?: React.ReactNode
  maxWidth?: boolean
  suffix?: React.ReactNode
  suffixClassName?: string
  size?: InputSize
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      size = 'sm',
      icon,
      maxWidth,
      suffix,
      suffixClassName,
      name,
      className,
      type,
      ...props
    },
    ref
  ) => {
    if (type === 'password')
      return (
        <InputPassword
          type="password"
          size={size}
          id={name}
          name={name}
          {...props}
          ref={ref}
        />
      )

    return (
      <div
        className={cn(
          'grid items-center w-full gap-y-3',
          icon && 'relative',
          suffix && 'relative',
          !maxWidth && 'max-w-sm'
        )}>
        {label && <Label htmlFor={type}>{label}</Label>}
        <input
          type={type}
          id={name}
          name={name}
          className={cn(
            'transition-all dark:bg-zinc-900 dark:text-primary-foreground flex w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
            icon && 'pl-10 mb-0',
            size === 'sm' && 'text-sm h-10',
            size === 'md' && 'text-base h-12',
            size === 'lg' && 'text-lg h-14'
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <div className="absolute w-5 h-5 -translate-y-1/2 select-none left-3 top-1/2">
            {icon}
          </div>
        )}
        {suffix && (
          <div
            className={cn(
              suffixClassName,
              'absolute -translate-y-1/2 select-none right-1 top-1/2',
              size === 'sm' && 'w-8 h-8',
              size === 'md' && 'w-10 h-10',
              size === 'lg' && 'w-12 h-12'
            )}>
            {suffix}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, className, size = 'sm', type, ...props }, ref) => {
    const [typeInput, setTypeInput] = React.useState(type)

    return (
      <div className="grid items-center w-full max-w-sm gap-y-3">
        {label && <Label htmlFor={type}>{label}</Label>}
        <div className="relative items-center w-full max-w-sm">
          <input
            type={typeInput}
            id={name}
            name={name}
            className={cn(
              'transition-all dark:bg-zinc-900 dark:text-primary-foreground flex w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              className,
              size === 'sm' && 'text-sm h-10',
              size === 'md' && 'text-base h-12',
              size === 'lg' && 'text-lg h-14'
            )}
            ref={ref}
            {...props}
          />
          {typeInput === 'password' ? (
            <EyeSlashIcon
              className="absolute w-5 h-5 -translate-y-1/2 cursor-pointer select-none right-3 top-1/2 text-muted-foreground"
              onClick={() => setTypeInput(typeInput === 'password' ? 'text' : 'password')}
            />
          ) : (
            <EyeIcon
              className="absolute w-5 h-5 -translate-y-1/2 cursor-pointer select-none right-3 top-1/2 text-muted-foreground"
              onClick={() => setTypeInput(typeInput === 'password' ? 'text' : 'password')}
            />
          )}
        </div>
      </div>
    )
  }
)

InputPassword.displayName = 'InputPassword'

export { Input }
