import { useContext, useEffect } from 'react'
import { User } from '../interfaces/user.interface'
import { AuthContext } from '../provider/auth.provider'
import { useLocalStorage } from './useLocalStorage'

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext)
  const { getItem, setItem } = useLocalStorage()

  const addUser = (user: User) => {
    setUser(user)
    setItem('user', JSON.stringify(user))
  }

  const removeUser = () => {
    setUser(null)
    setItem('user', '')
  }

  useEffect(() => {
    const currentUser = getItem('user')
    if (currentUser) {
      addUser(JSON.parse(currentUser) as User)
    }
  })

  const login = (user: User) => {
    addUser(user)
  }

  const logout = () => {
    removeUser()
  }

  return { user, login, logout }
}
export default useAuth
