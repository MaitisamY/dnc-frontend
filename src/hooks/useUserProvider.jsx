import { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)
    const [token, setToken] = useState(localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            setUser(JSON.parse(user))
        }

        const token = localStorage.getItem('token')
        if (token) {
            setToken(JSON.parse(token))
        }
    }, [])

    const updateUser = (user) => {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
    }

    const updateToken = (token) => {
        setToken(token)
        localStorage.setItem('token', JSON.stringify(token))
    }

    return (
        <UserContext.Provider value={{ user, token, updateUser, updateToken }}>
            {children}
        </UserContext.Provider>
    )
}