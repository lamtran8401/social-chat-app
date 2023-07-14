import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <div className="auth-layout__content">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
