import { createContext, useContext, useState, useEffect } from 'react'

const AdminContext = createContext()

export const useTheme = () => {
    return useContext(AdminContext)
}

const AdminThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : 'light')

    const toggleTheme = () => {
        localStorage.setItem('theme', JSON.stringify(theme === 'light' ? 'dark' : 'light'))
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])

    return (
        <AdminContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminThemeProvider