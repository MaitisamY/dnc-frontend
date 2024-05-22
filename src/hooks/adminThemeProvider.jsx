import { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const useTheme = () => {
    return useContext(AdminContext);
};

const AdminThemeProvider = ({ children }) => {
    const getInitialTheme = () => {
        return localStorage.getItem('theme') || 'light';
    };

    const [theme, setTheme] = useState(getInitialTheme);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <AdminContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminThemeProvider;
