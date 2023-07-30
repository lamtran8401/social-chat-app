import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import FormInput from '@/components/ui/form-input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as z from 'zod'

const registerFormSchema = z
  .object({
    name: z.string().min(3, 'Your name must be at least 3 characters long.'),
    email: z.string().email('Please enter a valid email address.'),
    password: z.string().min(6, 'Your password must be at least 6 characters long.'),
    confirmPassword: z
      .string()
      .min(6, 'Your password must be at least 6 characters long.'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Your password and confirmation password do not match.',
    path: ['confirmPassword'],
  })

const RegisterPage = () => {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const [formError, setFormError] = useState([])

  const onSubmit = (values: z.infer<typeof registerFormSchema>) => {
    console.log(values)
  }

  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="w-auto h-16 mx-auto" src="/logo-chat.png" alt="Your Company" />
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900 dark:text-primary-foreground">
          Create your account to get started
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {formError.length > 0 && (
          <div className="flex flex-col gap-2 mb-4 form-error">
            {formError.map((error, index) => (
              <Alert key={index} variant="destructive" size="small">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ))}
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormInput
              control={form.control}
              name="name"
              label="Name"
              type="text"
              placeholder="Please enter your name"
            />
            <FormInput
              control={form.control}
              name="email"
              label="Email"
              type="email"
              placeholder="Please enter your email"
            />
            <FormInput
              control={form.control}
              name="password"
              label="Password"
              type="password"
              placeholder="Please enter your password"
            />
            <FormInput
              control={form.control}
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Please enter your password again"
            />
            <Button type="submit" size="default" className="w-full">
              Sign up
            </Button>
          </form>
        </Form>
        <Link
          to="/auth/forgot-password"
          className="block mt-5 text-sm font-medium text-center text-gray-900 transition-all hover:text-gray-600 dark:text-zinc-200">
          Forgot your password?
        </Link>
        <p className="block mt-4 text-sm font-medium text-center text-gray-600 dark:text-zinc-300">
          Already have an account?{' '}
          <Link
            to="/auth/login"
            className="font-medium text-gray-900 transition-all hover:text-gray-600 dark:text-zinc-200">
            Login now
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
