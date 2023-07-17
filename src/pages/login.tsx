import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import FormInput from '@/components/ui/form-input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as z from 'zod'

const loginFormSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  password: z.string().min(6, 'Your password must be at least 6 characters long.'),
})

const LoginPage = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    console.log(values)
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-16 w-auto" src="/logo-chat.png" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              <Button type="submit" size="default" className="w-full">
                Sign in
              </Button>
            </form>
          </Form>
          <Link
            to="/forgot-password"
            className="transition-all mt-5 block text-center text-sm font-medium text-gray-900 hover:text-gray-600">
            Forgot your password?
          </Link>
          <p className="mt-4 block text-center text-sm font-medium text-gray-600">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="transition-all font-medium text-gray-900 hover:text-gray-600">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default LoginPage
