import { useState } from 'react';

function TestimonialAndFAQ() {

    const [accordian, setAccordian] = useState(1)

    const handleAccordian = (id) => {
        setAccordian(id)
    }

    return (
        <>
            <div className="testimonial-area bg-fit bg-gray default-padding" style={{ backgroundImage: 'url(/img/shape/33.webp)' }}>
                <div className="container">
                    <div className="testimonial-style-one-box text-light">
                        <div className="row align-center">

                            <div className="col-lg-12">
                                <div className="testimonial-style-one-carousel swiper">
                                    
                                    <div className="swiper-wrapper">
                                        
                                        <div className="swiper-slide">
                                            <div className="testimonial-style-one">
                                                <div className="quote-icon">
                                                    <img src="/img/quote.webp" alt="quote" />
                                                </div>
                                                <div className="item">
                                                    <div className="provider">
                                                        <div className="thumb">
                                                            <img src="/img/teams/1.webp" alt="Thumb" />
                                                        </div>
                                                        <div className="info">
                                                            <h4>Matthew J. Wyman</h4>
                                                            <span>Senior Consultant</span>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <p>
                                                            Maximum consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div className="swiper-slide">
                                            <div className="testimonial-style-one">
                                                <div className="quote-icon">
                                                    <img src="/img/quote.webp" alt="quote" />
                                                </div>
                                                <div className="item">
                                                    <div className="provider">
                                                        <div className="thumb">
                                                            <img src="/img/teams/6.webp" alt="Thumb" />
                                                        </div>
                                                        <div className="info">
                                                            <h4>Anthom Bu Spar</h4>
                                                            <span>Marketing Manager</span>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <p>
                                                            Big consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="swiper-slide">
                                            <div className="testimonial-style-one">
                                                <div className="quote-icon">
                                                    <img src="/img/quote.webp" alt="quote" />
                                                </div>
                                                <div className="item">
                                                    <div className="provider">
                                                        <div className="thumb">
                                                            <img src="/img/teams/5.webp" alt="Thumb" />
                                                        </div>
                                                        <div className="info">
                                                            <h4>Metho k. Partho</h4>
                                                            <span>Senior Developer</span>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <p>
                                                            Golden consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point.
                                                        </p>
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
            </div>

            <div className="faq-area bg-gray default-padding overflow-hidden">
                
                <div className="shape">
                    <div className="circle-shape"></div>
                    <div className="circle-shape"></div>
                </div>
                
                <div className="container">
                    <div className="row align-center">

                        <div className="col-lg-6 faq-style-one">
                            <div className="thumb">
                                <img src="/img/about/1.webp" alt="Thumb" />
                            </div>
                        </div>
                        
                        <div className="col-lg-6 faq-style-one">
                            <div className="heading-left">
                                <h4 className="sub-title">faq</h4>
                                <h2 className="heading">Most common question <br /> about our services</h2>
                            </div>
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button 
                                        className="accordion-button" 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target="#collapseOne" 
                                        aria-expanded={accordian === 1 ? 'true' : 'false'} 
                                        aria-controls="collapseOne"
                                        onClick={() => handleAccordian(1)}
                                    >
                                        Where can I get analytics help?
                                    </button>
                                </h2>
                                <div 
                                    id="collapseOne" 
                                    className="accordion-collapse collapse show" 
                                    aria-labelledby="headingOne" 
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                            <p>
                                                Jennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                                            </p>
                                    </div>
                                </div>
                                </div>
                                <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                        <button 
                                            className="accordion-button collapsed" 
                                            type="button" 
                                            data-bs-toggle="collapse" 
                                            data-bs-target="#collapseTwo" 
                                            aria-expanded={accordian === 2 ? 'true' : 'false'}
                                            aria-controls="collapseTwo"
                                            onClick={() => handleAccordian(2)}
                                        >
                                            How much does data analytics costs?
                                        </button>
                                </h2>
                                <div 
                                    id="collapseTwo" 
                                    className="accordion-collapse collapse" 
                                    aria-labelledby="headingTwo" 
                                    data-bs-parent="#faqAccordion"
                                >
                                        <div className="accordion-body">
                                            <p>
                                                Jennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                                            </p>
                                        </div>
                                </div>
                                </div>
                                <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                        <button 
                                            className="accordion-button collapsed" 
                                            type="button" 
                                            data-bs-toggle="collapse" 
                                            data-bs-target="#collapseThree" 
                                            aria-expanded={accordian === 3 ? 'true' : 'false'}
                                            aria-controls="collapseThree"
                                            onClick={() => handleAccordian(3)}
                                        >
                                            What kind of data is needed for analysis?
                                        </button>
                                </h2>
                                <div 
                                    id="collapseThree" 
                                    className="accordion-collapse collapse" 
                                    aria-labelledby="headingThree" 
                                    data-bs-parent="#faqAccordion"
                                >
                                        <div className="accordion-body">
                                            <p>
                                                Jennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
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

export default TestimonialAndFAQ