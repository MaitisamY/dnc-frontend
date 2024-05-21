
import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../hooks/adminThemeProvider'
import { useAdmin } from '../../hooks/useAdminProvider'

import { Link } from 'react-router-dom'
import { MdLogout, MdPersonOutline } from 'react-icons/md'
import { FaRegMoon, FaRegSun } from 'react-icons/fa6'

export default function Header() {

    const { theme, toggleTheme } = useTheme()
    const { admin } = useAdmin()
    const [profileMenu, setProfileMenu] = useState(false)

    const profileRef = useRef(null);

    const toggleProfileMenu = () => {
        setProfileMenu(!profileMenu)
    }

    useEffect(() => {

        const handleClickOutside = (event) => {
            if (
                profileRef.current && !profileRef.current.contains(event.target)
            ) {
                setProfileMenu(false);
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [])

    return (
        <header>
            <Link style={{ marginLeft: '20px' }} to="/admin/dashboard" className="link normal">Admin</Link>
            <div className="link-group">
                <a onClick={toggleTheme} className="link normal">
                    {theme === 'light' ? <FaRegMoon size={25} /> : <FaRegSun size={25} />}
                </a>
                <a 
                    className={`link normal ${profileMenu ? 'active' : ''}`} 
                    ref={profileRef} 
                    onClick={toggleProfileMenu}
                >
                    <MdPersonOutline size={25} />
                </a>

                {
                    profileMenu && (
                        <div className="profile-dropdown" onClick={e => e.stopPropagation()}>
                            <div className="content">
                                <i><MdPersonOutline size={30} /></i>
                                <h3>{admin?.name} <span>Admin</span></h3>
                                <h5>{admin?.email}</h5>
                            </div>
                            <button className="logout-button">
                                Logout <span><MdLogout size={25} style={{ marginBottom: '5px' }} /></span>
                            </button>
                        </div>
                    )
                }
            </div>
        </header>
    )
}