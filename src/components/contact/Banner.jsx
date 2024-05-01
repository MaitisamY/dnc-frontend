import { FaHome } from 'react-icons/fa'

function Banner() {
    return (
        <div 
            className="breadcrumb-area text-center shadow dark text-light bg-cover" 
            style={{ backgroundImage: 'url(/img/banner/24.jpg)' }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1>Contact Us</h1>
                        {/* <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li><a href="/"><FaHome /> Home</a></li>
                                <li className="active">Contact Us</li>
                            </ol>
                        </nav> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner