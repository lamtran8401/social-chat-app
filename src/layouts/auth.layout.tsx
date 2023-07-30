import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="min-h-screen dark:bg-zinc-900">
      <Outlet />
    </div>
  )
}

export default AuthLayout
