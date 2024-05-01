import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

function Banner() {
    return (
        <div 
            class="breadcrumb-area text-center shadow dark text-light bg-cover" 
            style={{ backgroundImage: 'url(/img/banner/24.jpg)' }}
        >
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <h1>Sign Up</h1>
                        {/* <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li><a href="/"><i class="fas fa-home"></i> Home</a></li>
                                <li class="active">SignUp</li>
                            </ol>
                        </nav> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner