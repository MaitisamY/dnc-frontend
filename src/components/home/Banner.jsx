import { Link } from 'react-router-dom'

function Banner() {
    return (
        <>
            <div className="banner-area banner-style-two navigation-icon-solid navigation-between-bottom navigation-custom overflow-hidden top-pad-150 text-light">
            {/* <!-- Slider main container --> */}
            <div className="banner-slide">
                {/* <!-- Additional required wrapper --> */}
                <div className="swiper-wrapper">
                    <div className="swiper-slide bg-cover shadow dark" style={{ backgroundImage: 'url(/img/banner/12.webp)' }}>
                        <div className="container">
                            <div className="row align-center">
                                <div className="col-xl-8">
                                    <div className="title-area">
                                        <h2><i>Transform every</i> <strong>Technical process</strong></h2>
                                        <p>
                                            Affixed pretend account ten natural. Need eat week even yet that.
                                            <br /> 
                                            Incommode delighted he resolving sportsmen do in listening.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
        </>
    )
}

export default Banner