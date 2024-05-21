import '../../styles/admin/admin.css'

import { Link, useLocation } from 'react-router-dom'
import { MdLogout, MdPersonOutline } from 'react-icons/md'
import { FaRegMoon, FaRegSun } from 'react-icons/fa6'
import { useTheme } from '../../hooks/adminThemeProvider'

import Header from '../../components/admin/Header'
import Sidebar from '../../components/admin/Sidebar'

function AdminUsers() {

    const { theme, toggleTheme } = useTheme()
    const { pathname } = useLocation()

    document.title = 'Users | Admin'

    return (
        <div className={`admin ${theme === 'light' ? '' : 'dark'}`}>
            <Header />

            <main>
                <Sidebar />

                <div className="col-two">
                    <h1>Users</h1>
                </div>
            </main>
        </div>
    )
}

export default AdminUsers