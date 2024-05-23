import '../../styles/admin/admin.css'

import { useState, useEffect } from 'react'
import { useTheme } from '../../hooks/adminThemeProvider'
import { Link } from 'react-router-dom'
import { FaPlus, FaTrash } from 'react-icons/fa6'

import Header from '../../components/admin/Header'
import Sidebar from '../../components/admin/Sidebar'

function Settings () {

    const { theme } = useTheme()

    document.title = 'Settings | Admin'

    return (
        <div className={`admin ${theme === 'light' ? '' : 'dark'}`}>
            <Header />

            <main>
                <Sidebar />

                <div className="col-two">
                    <h1>Settings</h1>
                    

                </div>
            </main>
        </div>
    )
}

export default Settings