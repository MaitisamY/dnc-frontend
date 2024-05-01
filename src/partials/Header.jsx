import '../styles/header.css'

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
    FaFacebook, 
    FaLinkedin, 
    FaPinterest, 
    FaRegClock, 
    FaChevronDown, 
    FaChevronUp,
    FaCommentsDollar 
} from 'react-icons/fa'

function Header() {

    const { pathname } = useLocation()
    if (pathname === '/') {
        document.title = 'DNC Litigator Check | Home'
    } else {
        document.title = 'DNC Litigator Check | ' + pathname.charAt(1).toUpperCase() + pathname.slice(2)
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
                    <Link className="link text-uppercase" to="/login">Login / Signup</Link>
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