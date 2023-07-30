import AuthLayout from '@/layouts/auth.layout'
import MainLayout from '@/layouts/main.layout'
import ChatPage from '@/pages/chat'
import LoginPage from '@/pages/login'
import RegisterPage from '@/pages/register'
import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <ChatPage />,
      },
    ],
  },
])

export default router
