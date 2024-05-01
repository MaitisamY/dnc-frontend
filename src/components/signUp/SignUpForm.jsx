import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

function SignUpForm() {
    return (
        <div className="contact-form-area about-area default-padding-top about-solid-thumb bg-gray overflow-hidden">
            <div className="container">
                <div className="about-style-one-box">
                    <div className="row">
                        <div className="about-style-one col-xl-6 col-lg-6">
                            <div className="thumb">
                                <img src="/img/login-background.jpg" alt="Thumb" />
                                <div className="thumb-shape">
                                    <div className="shape"></div>
                                    <div className="shape"></div>
                                    <div className="shape"></div>
                                    <div className="shape"></div>
                                    <div className="shape"></div>
                                </div>
                            </div>
                        </div>
                        <div className="about-style-one pl-lg-30 pl-70 pl-md-15 pl-xs-15 col-xl-6 col-lg-6">
                            <div className="signUpForm">
                                <h4 className="sub-heading">SignUp Form</h4>
                                <h2 className="heading">Create your identity</h2>
                                <form id="signUpForm">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                                                <span className="alert-error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 mt-2">
                                            <div className="form-group">
                                                <input className="form-control" id="emailAddress" name="emailAddress" placeholder="Email Address" type="text" />
                                                <span className="alert-error"></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-2">
                                            <div className="form-group">
                                                <input className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Phone" type="tel" />
                                                <span className="alert-error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 mt-2">
                                            <div className="form-group">
                                                <input className="form-control" id="password" name="password" placeholder="Password" type="password" />
                                                <span className="alert-error"></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-2">
                                            <div className="form-group">
                                                <input className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" type="password" />
                                                <span className="alert-error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 mt-3">
                                            <button 
                                                type="submit" 
                                                className="btn btn-gradient" 
                                                name="submit"  
                                                style={{ width: '100%' }}
                                            >
                                                Sign-up
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="d-flex justify-content-left mt-2">
                                            Have an account?
                                            <Link className="link" to="/login" style={{ marginLeft: '2px' }}>Login</Link>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 alert-notification">
                                        <div id="message" className="alert-msg"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="shape-left-top" style={{ backgroundImage: "url(/img/shape/1.png)" }}></div>
            
            <div className="shape-animated">
                <img src="/img/shape/11.png" alt="Shape" />
            </div>
            
            <div className="blur-bg"></div>


        </div>
    )
}

export default SignUpForm