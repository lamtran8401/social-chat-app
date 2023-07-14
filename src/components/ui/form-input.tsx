import React from 'react'
import { Control } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormMessage } from './form'
import { Input } from './input'

export interface FormInputProps {
  label?: string
  name: string
  type?: string
  placeholder?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, unknown>
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ control, label, placeholder, name, type }, ref) => {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                id={name}
                label={label}
                type={type}
                placeholder={placeholder}
                {...field}
                ref={ref}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  }
)

FormInput.displayName = 'FormInput'

export default FormInput
