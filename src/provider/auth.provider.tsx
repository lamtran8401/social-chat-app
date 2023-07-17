import { ReactNode, createContext, useState } from 'react'
import { User } from '../interfaces/user.interface'

interface AuthContextProps {
  user: User | null
  setUser: (user: User | null) => void
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => null,
})

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export { AuthContext }

export default AuthProvider
