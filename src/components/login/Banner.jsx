import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

function Banner() {
    return (
        <div 
            className="breadcrumb-area text-center shadow dark text-light bg-cover" 
            style={{ backgroundImage: 'url(/img/banner/24.jpg)' }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1>Login</h1>
                        {/* <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li><Link to="/" className="link"><FaHome /> Home</Link></li>
                                <li className="active">Login</li>
                            </ol>
                        </nav> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner