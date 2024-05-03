import '../styles/header.css'

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaPinterest, FaRegClock, FaChevronDown,FaCommentsDollar, FaBars } from 'react-icons/fa'
import { useUser } from '../hooks/useUserProvider'
import { toast } from 'react-toastify'
import axios from 'axios'

function Header() {

    const { user } = useUser()
    const { pathname } = useLocation()

    if (pathname === '/') {
        document.title = 'DNC Litigator Check | Home'
    } else {
        document.title = 'DNC Litigator Check | ' + pathname.charAt(1).toUpperCase() + pathname.slice(2)
    }

    const handleLogout = async () => {
    
        try {
            await axios.post('http://localhost:3000/logout')
    
            localStorage.removeItem('user')
            window.location.href = '/login';
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {/* PRE HEADER */}
            <div className="pre-header">
                <div className="pre-header-utils">
                    <p>Need Help? <a href="tel:+4733378901">Request A Callback</a></p>
                    <p><FaRegClock size={24} /> &nbsp; Working Hours: 8:00 AM – 7:45 PM</p>
                </div>

                <div className="pre-header-social">
                    <a 
                        href="https://www.facebook.com/people/DNC-Litigator-Check/61552625304100/"
                        target="_blank"
                    >
                        <FaFacebook size={24} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/company/dnclitigatorcheck"
                        target="_blank"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a 
                        href="https://www.pinterest.com/dnclitigatorcheck/"
                        target="_blank"
                    >
                        <FaPinterest size={24} />
                    </a>
                </div>
            </div>

            {/* HEADER */}
            <header>
                <div className="header-logo">
                    <Link to="/">
                        <img src="/img/logo-final-dnc.webp" alt="logo" />
                    </Link>
                </div>

                <a className="menu-toggle"><FaBars /></a>

                <div className="header-nav">
                    <Link className="link text-uppercase" to="/">Home</Link>
                    <Link className="link text-uppercase" to="/about">About</Link>
                    <Link className="link text-uppercase" to="/prices-benefits">
                        Prices & Benefits
                    </Link>
                    <Link 
                        className="link text-uppercase dropdown"
                        to=""
                    >
                        Services <FaChevronDown />
                        <div className="dropdown-menu">
                            <ul>
                                <li>
                                    <Link className="link" to="/services/mass-phone-scrub">
                                        Mass Phone Scrub
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/services/number-lookup">
                                        Number Lookup
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/services/mass-phone-verification">
                                        Mass Phone Verification
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/services/single-number-verification">
                                        Single Number Verification
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/services/tcpa-updates">
                                        TCPA Updates
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Link>
                    <Link className="link text-uppercase" to="/contact">Contact</Link>
                    {
                        user ? 
                        <Link className="link text-uppercase dropdown" to="">
                            {user.name} <FaChevronDown />
                            <div className="dropdown-menu">
                                <ul>
                                    <li>
                                        <Link className="link" to="/dashboard">
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="/purchase-coins">
                                            Purchase more scrub coins
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="/my-subscription">
                                            My Subscription 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="/payment-method">
                                            Payment Method
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="/edit-account">
                                            Edit Account
                                        </Link>
                                    </li>
                                    <li>
                                        <button 
                                            className="link-box-danger text-uppercase" 
                                            onClick={handleLogout}
                                            style={{ width: '100%' }}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </Link> 
                        : <Link className="link text-uppercase" to="/login">Login / Signup</Link>
                    }
                </div>

                <div className="header-connect">
                    <FaCommentsDollar size={70} style={{ color: '#104cba' }} />
                    <p className="mail">
                        <a className="link" href="mailto:info@dnclitigatorcheck.com">
                            <span>Have any Questions?</span> <br />
                            <i>info@dnclitigatorcheck.com</i>
                        </a>
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header