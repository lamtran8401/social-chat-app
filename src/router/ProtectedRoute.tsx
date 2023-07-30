import { useAuth } from '@/hook'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (!user) navigate('/auth/login')
  // }, [user, navigate])

  return children
}

export default ProtectedRoute
