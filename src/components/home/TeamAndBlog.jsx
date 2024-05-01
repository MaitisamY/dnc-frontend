import { FaFacebook, FaTwitter, FaPinterest, FaCheck, FaEnvelopeOpenText, FaPhone, FaRegHeart, FaRegCommentAlt } from "react-icons/fa"

function TeamAndBlog() {
    return (
        <>
            <div className="team-area team-grid-style text-center overflow-hidden default-padding bottom-less">
                
                <div className="center-shape" style={{ backgroundImage: 'url(/img/shape/34.webp)' }}></div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Expert team</h4>
                                <h2 className="title">Meet our expert from <br />trusted source in IT services</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="team-style-one">
                                <div className="thumb">
                                    <img src="/img/team/1.webp" alt="Thumb" />
                                    <div className="angle-shape" style={{ backgroundImage: 'url(/img/shape/24.webp)' }}></div>
                                </div>
                                <div className="info">
                                    <div className="content">
                                        <h4 className="title"><a href="team-details.html">Sporia Deko</a></h4>
                                        <span>Marketing</span>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a className="facebook" href="#">
                                                <FaFacebook size={20} />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="twitter" href="#">
                                                <FaTwitter size={20} />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="pinterest" href="#">
                                                <FaPinterest size={20} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="team-style-one">
                                <div className="thumb">
                                    <img src="/img/team/5.webp" alt="Thumb" />
                                    <div className="angle-shape" style={{ backgroundImage: 'url(/img/shape/24.webp)' }}></div>
                                </div>
                                <div className="info">
                                    <div className="content">
                                        <h4 className="title"><a href="team-details.html">Adhom Jonam</a></h4>
                                        <span>Project Manager</span>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a className="facebook" href="#">
                                                <FaFacebook size={20} />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="twitter" href="#">
                                                <FaTwitter size={20} />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="pinterest" href="#">
                                                <FaPinterest size={20} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="team-style-one">
                                <div className="thumb">
                                    <img src="/img/team/3.webp" alt="Thumb" />
                                    <div className="angle-shape" style={{ backgroundImage: 'url(/img/shape/24.webp)' }}></div>
                                </div>
                                <div className="info">
                                    <div className="content">
                                        <h4 className="title"><a href="team-details.html">Turka Pruda</a></h4>
                                        <span>Co-Founder</span>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a className="facebook" href="#">
                                                <FaFacebook size={20} />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="twitter" href="#">
                                                <FaTwitter size={20} />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="pinterest" href="#">
                                                <FaPinterest size={20} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="team-style-one">
                                <div className="thumb">
                                    <img src="/img/team/4.webp" alt="Thumb" />
                                    <div className="angle-shape" style={{ backgroundImage: 'url(assets/img/shape/24.webp)' }}></div>
                                </div>
                                <div className="info">
                                    <div className="content">
                                        <h4 className="title"><a href="team-details.html">Monas Paul</a></h4>
                                        <span>Designer</span>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a className="facebook" href="#">
                                                <FaFacebook size={20} />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="twitter" href="#">
                                                <FaTwitter size={20} />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="pinterest" href="#">
                                                <FaPinterest size={20} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>

            <div 
                className="meeting-style-one-area bg-cover default-padding text-light" 
                style={{ backgroundImage: 'url(/img/banner/5.webp)' }}
            >
                
                <div className="shape-left-top" style={{ backgroundImage: 'url(assets/img/shape/41.webp)' }}></div>
                
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 col-lg-5 meeting-style-one">
                            <h4 className="sub-title">Need a Meeting?</h4>
                            <h2 className="heading">Tell us about your business, <br /> we are ready to solve.</h2>
                            <ul className="list">
                                <li><FaCheck /> &nbsp; Engaging Group Discussion</li>
                                <li><FaCheck /> &nbsp; Monthly fee IT services</li>
                                <li><FaCheck /> &nbsp; Quality & Customer Experience</li>
                            </ul>
                        </div>
                        <div className="col-xl-6 col-lg-7 meeting-style-one">
                            <ul className="text-end">
                                <li>
                                    <a href="mailto:info@crysta.com">
                                        <FaEnvelopeOpenText size={40} />
                                        <h5>Urgent message</h5>
                                        <p>
                                            info@crysta.com
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+88034568901">
                                        <FaPhone size={40} />
                                        <h5>Instant Call</h5>
                                        <p>
                                            +880(3456)8901
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-area blog-grid bg-gray default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">From the blog</h4>
                                <h2 className="title">Latest News & Articles</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-xl-4 col-md-6 single-item">
                            <div className="blog-style-two">
                                <div className="thumb">
                                    <a href="blog-single-with-sidebar.html"><img src="/img/blog/1.webp" alt="Thumb" /></a>
                                    <div className="tags">
                                        <a href="#">Analysis</a>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="meta">
                                        <ul>
                                            <li>
                                                <a href="#"><FaRegCommentAlt /> 12 Comments</a>
                                            </li>
                                            <li>
                                            <a href="#"><FaRegHeart /> 25</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="title">
                                        <a href="blog-single-with-sidebar.html">Discovery incommode earnestly commanded mentions.</a>
                                    </h4>
                                </div>
                                <div className="author">
                                    <div className="thumbs">
                                        <a href="#"><img src="/img/teams/1.webp" alt="Author" /></a>
                                    </div>
                                    <div className="author-info">
                                        <h5>Bruham Ibrahi</h5>
                                        <span>March 16, 2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-md-6 single-item">
                            <div className="blog-style-two">
                                <div className="thumb">
                                    <a href="blog-single-with-sidebar.html"><img src="/img/blog/2.webp" alt="Thumb" /></a>
                                    <div className="tags">
                                        <a href="#">Technology</a>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="meta">
                                        <ul>
                                            <li>
                                                <a href="#"><FaRegCommentAlt /> 18 Comments</a>
                                            </li>
                                            <li>
                                                <a href="#"><FaRegHeart /> 38</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="title">
                                        <a href="blog-single-with-sidebar.html">Everything melancholy uncommonly but solicitude.</a>
                                    </h4>
                                </div>
                                <div className="author">
                                    <div className="thumbs">
                                        <a href="#"><img src="/img/teams/6.webp" alt="Author" /></a>
                                    </div>
                                    <div className="author-info">
                                        <h5>Mutuali Bintha</h5>
                                        <span>January 25, 2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-md-6 single-item">
                            <div className="blog-style-two">
                                <div className="thumb">
                                    <a href="blog-single-with-sidebar.html"><img src="/img/blog/3.webp" alt="Thumb" /></a>
                                    <div className="tags">
                                        <a href="#">Solution</a>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="meta">
                                        <ul>
                                            <li>
                                                <a href="#"><FaRegCommentAlt /> 25 Comments</a>
                                            </li>
                                            <li>
                                                <a href="#"><FaRegHeart /> 65</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="title">
                                        <a href="blog-single-with-sidebar.html">Providing top quality cleaning and related services charms.</a>
                                    </h4>
                                </div>
                                <div className="author">
                                    <div className="thumbs">
                                        <a href="#"><img src="/img/teams/5.webp" alt="Author" /></a>
                                    </div>
                                    <div className="author-info">
                                        <h5>Dickua Pathari</h5>
                                        <span>July 16, 2022</span>
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

export default TeamAndBlog