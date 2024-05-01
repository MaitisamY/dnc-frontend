import { useLocation } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

function Banner() {

    const { pathname } = useLocation()

    return (
        <div 
            className="breadcrumb-area text-center shadow dark text-light bg-cover" 
            style={{ backgroundImage: 'url(/img/banner/18.jpg)' }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1>
                            {
                                pathname === '/services/mass-phone-scrub' ? 'Mass Phone Scrub' 
                                : pathname === '/services/number-lookup' ? 'Number Lookup' 
                                : pathname === '/services/mass-phone-verification' ? 'Mass Phone Verification'
                                : pathname === '/services/single-number-verification' ? 'Single Number Verification'
                                : pathname === '/services/tcpa-updates' ? 'TCPA Updates' : null
                            }
                        </h1>
                        {/* <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li><a href="#"><FaHome /> Home</a></li>
                                <li className="active">Phone Scrub</li>
                            </ol>
                        </nav> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner