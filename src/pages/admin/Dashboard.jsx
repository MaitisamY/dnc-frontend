import '../../styles/admin/admin.css'

import { useLocation } from 'react-router-dom'
import { useTheme } from '../../hooks/adminThemeProvider'
import BarChart from '../../components/admin/BarChart'
import PieChart from '../../components/admin/PieChart'

import Header from '../../components/admin/Header'
import Sidebar from '../../components/admin/Sidebar'

function AdminDashboard () {

    const { theme } = useTheme()
    const { pathname } = useLocation()

    document.title = 'Dashboard | Admin'

    return (
        <div className={`admin ${theme === 'light' ? '' : 'dark'}`}>
            <Header />

            <main>
                <Sidebar />

                <div className="col-two">
                    <h1>Dashboard</h1>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', gap: '20px' }}>
                        <BarChart />
                        <PieChart />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AdminDashboard
