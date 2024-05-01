import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'

function Footer() {
    return (
        <footer className="bg-dark text-light">
            <div className="container">
                <div className="f-items default-padding">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 item">
                            <div className="f-item about">
                                <img className="logo" src="/img/logo-final-dnc-orange.webp" alt="Logo" />
                                <p>
                                    Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address did showing.
                                </p>
                                <ul className="social">
                                    <li>
                                        <a href="#"><FaFacebook /></a>
                                    </li>
                                    <li>
                                        <a href="#"><FaTwitter /></a>
                                    </li>
                                    <li>
                                        <a href="#"><FaLinkedin /></a>
                                    </li>
                                    <li>
                                        <a href="#"><FaYoutube /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 item">
                            <div className="f-item link">
                                <h4 className="widget-title">Quick Links</h4>
                                <ul>
                                    <li>
                                        <a href="services-details.html"><i className="fas fa-angle-right"></i> IT Management</a>
                                    </li>
                                    <li>
                                        <a href="services-details.html"><i className="fas fa-angle-right"></i> Cyber Security</a>
                                    </li>
                                    <li>
                                        <a href="services-details.html"><i className="fas fa-angle-right"></i> Cloud Computing</a>
                                    </li>
                                    <li>
                                        <a href="services-details.html"><i className="fas fa-angle-right"></i> IT Consulting</a>
                                    </li>
                                    <li>
                                        <a href="services-details.html"><i className="fas fa-angle-right"></i> Software Dev</a>
                                    </li>
                                    <li>
                                        <a href="services-details.html"><i className="fas fa-angle-right"></i> Backup & Recovery</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 item">
                            <div className="f-item contact-widget">
                                <h4 className="widget-title">Contact Info</h4>
                                <div className="address">
                                    <ul>
                                        <li>
                                            5919 Trussville Crossings Pkwy, new Dusting town, Austria
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-clock"></i>
                                            </div>
                                            <div className="content">
                                                <strong>Opening Hours:</strong>
                                                8:00 AM – 7:45 PM
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-user-headset"></i>
                                            </div>
                                            <div className="content">
                                                <strong>Phone:</strong>
                                                <a href="tel:2151234567">+123 34598768</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 item">
                            <div className="f-item newsletter">
                                <h4 className="widget-title">Subscribe to Newsletter</h4>
                                <p>
                                    Join our subscribers list to get the latest news and special offers. 
                                </p>
                                <form action="#">
                                    <input type="email" placeholder="Your Email" className="form-control" name="email" />
                                    <button type="submit"> Subscribe Now <i className="fa fa-paper-plane"></i></button>  
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-box">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; Copyright {new Date().getFullYear()}. All Rights Reserved by <a href="/" className="link">DNC Litigator Check</a></p>
                            </div>
                            {/* <div className="col-lg-6 text-right">
                                <ul>
                                    <li>
                                        <a href="about-us.html">Terms</a>
                                    </li>
                                    <li>
                                        <a href="about-us.html">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="about-us.html">Support</a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer