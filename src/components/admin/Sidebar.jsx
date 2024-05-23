
import { Link, useLocation } from 'react-router-dom'
import { 
    MdOutlineSpeed, 
    MdOutlineHistory, 
    MdSupervisorAccount, 
    MdOutlineDynamicFeed,
    MdSettings, 
} from 'react-icons/md'

export default function Sidebar() {

    const { pathname } = useLocation()

    return (
        <div className="col-one">
            <ul>
                <li>
                    <Link 
                        className={pathname === '/admin/dashboard' ? 'link normal active' : 'link normal'} 
                        to="/admin/dashboard"
                    >
                        <MdOutlineSpeed size={25} style={{ marginBottom: '5px' }} /> Dashboard
                    </Link>
                </li>
                <li>
                    <Link 
                        className={pathname === '/admin/scrub-history' ? 'link normal active' : 'link normal'} 
                        to="/admin/scrub-history"
                    >
                        <MdOutlineHistory size={25} style={{ marginBottom: '5px' }} /> Scrub History
                    </Link>
                </li>
                <li>
                    <Link 
                        className={pathname === '/admin/users' ? 'link normal active' : 'link normal'} 
                        to="/admin/users"
                    >
                        <MdSupervisorAccount size={25} style={{ marginBottom: '5px' }} /> Users
                    </Link>
                </li>
                <li>
                    <Link 
                        className={pathname === '/admin/packages' || pathname === '/admin/add-package' ? 'link normal active' : 'link normal'} 
                        to="/admin/packages"
                    >
                        <MdOutlineDynamicFeed size={25} style={{ marginBottom: '5px' }} /> Packages
                    </Link>
                </li>
                <li>
                    <Link 
                        className={pathname === '/admin/settings' ? 'link normal active' : 'link normal'} 
                        to="/admin/settings"
                    >
                        <MdSettings size={25} style={{ marginBottom: '5px' }} /> Settings
                    </Link>
                </li>
            </ul>
        </div>
    )
}