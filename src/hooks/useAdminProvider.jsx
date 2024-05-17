import { createContext, useContext, useState, useEffect } from 'react'

const AdminContext = createContext()

export const useAdmin = () => {
    return useContext(AdminContext)
}

export const AdminProvider = ({ children }) => {
    const [admin, setUser] = useState(localStorage.getItem('admin') ? JSON.parse(localStorage.getItem('admin')) : null)
    const [token, setToken] = useState(localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)

    useEffect(() => {
        const admin = localStorage.getItem('admin')
        if (admin) {
            setUser(JSON.parse(admin))
        }

        const token = localStorage.getItem('token')
        if (token) {
            setToken(JSON.parse(token))
        }
    }, [])

    const updateAdmin = (admin) => {
        setUser(admin)
        localStorage.setItem('admin', JSON.stringify(admin))
    }

    const updateToken = (token) => {
        setToken(token)
        localStorage.setItem('token', JSON.stringify(token))
    }

    return (
        <AdminContext.Provider value={{ admin, token, updateAdmin, updateToken }}>
            {children}
        </AdminContext.Provider>
    )
}