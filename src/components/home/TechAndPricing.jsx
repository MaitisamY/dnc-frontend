import { useState } from "react"
import { BsCheckCircle } from "react-icons/bs"

function TechAndPricing() {

    const [tab, setTab] = useState(1)

    const handleTab = (id) => {
        setTab(id)
    }

    return (
        <>
            <div className="benifits-area bg-cover shadow light default-padding-top" style={{ backgroundImage: 'url(/img/banner.webp)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h4 className="bg-text" style={{ backgroundImage: 'url(/img/banner/38.webp)'}}>Technology</h4>
                        </div>
                        <div className="col-lg-7 offset-lg-5 benifits-style-one">
                            <div className="item">
                                <h2 className="heading">We’re using latest <br /> technology in projects </h2>
                                <p className="mb--5">
                                    Jennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                                </p>
                                <a className="btn mt-30 btn-md btn-gradient" href="contact-us.html">Start a project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pricing-area bg-gray default-padding bottom-less">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-4">
                            <div className="heading-left">
                                <h4 className="sub-title">Our Pricing</h4>
                                <h2 className="heading">Committed to giving <br /> the best lowest in technology</h2>
                            </div>
                            <div className="pricing-tab">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button 
                                            className={`nav-link ${tab === 1 ? 'active' : ''}`} 
                                            id="price-montly-tab" 
                                            data-bs-toggle="tab" 
                                            data-bs-target="#price-montly" 
                                            type="button" role="tab" 
                                            aria-controls="price-montly" 
                                            aria-selected="true"
                                            onClick={() => handleTab(1)}
                                        >
                                            Monthly
                                        </button>
                                        <button 
                                            className={`nav-link ${tab === 2 ? 'active' : ''}`} 
                                            id="price-yearly-tab" 
                                            data-bs-toggle="tab" 
                                            data-bs-target="#price-yearly" 
                                            type="button" 
                                            role="tab" 
                                            aria-controls="price-yearly" 
                                            aria-selected="false"
                                            onClick={() => handleTab(2)}
                                        >
                                            Yearly
                                        </button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content" id="nav-tabContent">
                                
                                        <div className="tab-pane fade show active" id="price-montly" role="tabpanel" aria-labelledby="price-montly-tab">
                                            <div className="row">
                                                <div className="pricing-style-one col-md-6">
                                                    
                                                    <div className="item">
                                                        <div className="pricing-header">
                                                            <i className="flaticon-cleaning-6"></i>
                                                            <h4>Regular Plan</h4>
                                                            <h2>
                                                                {
                                                                    tab === 1 ? (
                                                                        <>
                                                                            <sup>$</sup>35 <sub>/Monthly</sub>
                                                                        </>
                                                                    ) : tab === 2 ? (
                                                                        <>
                                                                            <sup>$</sup>159 <sub>/Yearly</sub>
                                                                        </>
                                                                    ) : null
                                                                }
                                                                
                                                            </h2>
                                                            <p>
                                                                Resolve parties but why she shewing. She sang know now minute exact dear.
                                                            </p>
                                                            <div className="button">
                                                                <a className="btn btn-dark effect btn-sm" href="contact-us.html">Choose Plan</a>
                                                            </div>
                                                        </div>
                                                        <div className="pricing-info">
                                                            <ul>
                                                                <li><BsCheckCircle style={{ color: '#104cba' }} /> Unlimited install</li>
                                                                <li><BsCheckCircle style={{ color: '#104cba' }} /> Unlimited Download</li>
                                                                <li><BsCheckCircle style={{ color: '#104cba' }} /> Free One Year Support</li>
                                                                <li><BsCheckCircle style={{ color: '#104cba' }} /> Free 40 GB Linux Hosting</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="pricing-style-one col-md-6">
                                                    <div className="item active">
                                                        <div className="pricing-header">
                                                            <i className="flaticon-cleaning-6"></i>
                                                            <h4>Premium Plan</h4>
                                                            <h2>
                                                                {
                                                                    tab === 1 ? (
                                                                        <>
                                                                            <sup>$</sup>99 <sub>/Monthly</sub>
                                                                        </>
                                                                    ) : tab === 2 ? (
                                                                        <>
                                                                            <sup>$</sup>299 <sub>/Yearly</sub>
                                                                        </>
                                                                    ) : null
                                                                }
                                                            </h2>
                                                            <p>
                                                                Resolve parties but why she shewing. She sang know now minute exact dear.
                                                            </p>
                                                            <div className="button">
                                                                <a className="btn btn-dark effect btn-sm" href="contact-us.html">Choose Plan</a>
                                                            </div>
                                                        </div>
                                                        <div className="pricing-info">
                                                            <ul>
                                                                <li><BsCheckCircle style={{ color: '#104cba' }} /> Unlimited install</li>
                                                                <li><BsCheckCircle style={{ color: '#104cba' }} /> Unlimited Download</li>
                                                                <li><BsCheckCircle style={{ color: '#104cba' }} /> Life time Support</li>
                                                                <li><BsCheckCircle style={{ color: '#104cba' }} /> Premium 100 GB Linux Hosting</li>
                                                            </ul>
                                                        </div>
                                                    </div>
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

export default TechAndPricing