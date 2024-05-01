import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

function LoginForm() {
    const navigate = useNavigate()

    const [creds, setCreds] = useState({
        email: '',
        password: '',
        emailError: '',
        passwordError: ''
    })

    const [serverResponse, setServerResponse] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setCreds({
            ...creds,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (creds.email === '') {
            setCreds({
                ...creds,
                emailError: 'Please enter your email'
            });
            return;
        }
        if (creds.email.length < 5) {
            setCreds({
                ...creds,
                emailError: 'Please enter a valid email'
            });
            return;
        }
        if (creds.password === '') {
            setCreds({
                ...creds,
                passwordError: 'Please enter your password'
            });
            return;
        }
        if (creds.password.length < 5) {
            setCreds({
                ...creds,
                passwordError: 'Please enter a valid password'
            });
            return;
        }
        else {
            try {
                const response = await axios.post('http://localhost:3000/login', {
                    email: creds.email, // Corrected to use creds.email
                    password: creds.password // Corrected to use creds.password
                });
                if (response.status === 200) {

                    setServerResponse({ status: 200, message: response.data.message});
                    setTimeout(() => {
                        navigate('/dashboard')
                    }, 3000);
                    
                } else {
                    toast.warn(response.data.message, {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light"
                    });
                    setServerResponse({ status: 400, message: response.data.message});
                }
                
            } catch (error) {
                toast.error(error.response.data.message, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
                setServerResponse(error.response.data.message);
            }
        }
    };
    

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
                            <h4 className="sub-heading">Login Form</h4>
                            <h2 className="heading">Verify your identity</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12 mt-2">
                                        <div className="form-group">
                                            <input 
                                                className="form-control custom-input"  
                                                name="email" 
                                                placeholder="Enter registered email" 
                                                type="email"
                                                value={creds.email}
                                                onChange={handleChange}
                                            />
                                            {creds.emailError && 
                                                <p style={{ color: 'red', fontWeight: '600', fontSize: '14px', marginLeft: '10px' }}>
                                                    {creds.emailError}
                                                </p>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-2">
                                        <div className="form-group">
                                            <input 
                                                className="form-control custom-input" 
                                                name="password" 
                                                placeholder="Enter your password" 
                                                type="password"
                                                value={creds.password}
                                                onChange={handleChange}
                                            />
                                            {creds.passwordError && 
                                                <p style={{ color: 'red', fontWeight: '600', fontSize: '14px', marginLeft: '10px' }}>
                                                    {creds.passwordError}
                                                </p>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-2">
                                        <div id="loginError" style={{ color: 'red', fontWeight: '600', fontSize: '14px' }}></div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div>
                                        <a href="#" style={{ float: 'right' }}>Forgot password?</a>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-12 mt-2">
                                        <button 
                                            type="submit" 
                                            className="btn btn-gradient" 
                                            name="submit"  
                                            style={{ width: '100%' }}
                                        >
                                            Login
                                        </button>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="d-flex justify-content-left mt-2">
                                        Don't have an account?
                                        <Link className="link" to="/signup" style={{ marginLeft: '2px' }}>Sign Up</Link>
                                    </div>
                                </div>
                                
                                <div className="col-lg-12 alert-notification">
                                    <div id="message" className="alert-msg"></div>
                                </div>
                                {
                                    serverResponse && 
                                    <p 
                                        style={{ color: '#104cba', fontWeight: '600', fontSize: '14px' }}
                                    >
                                        {serverResponse.message}
                                    </p>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-left-top" style={{ backgroundImage: 'url(/img/shape/1.png)' }}></div>
            <div className="shape-animated">
                <img src="/img/shape/11.png" alt="Shape" />
            </div>
            <div className="blur-bg"></div>
        </div>
    )
}

export default LoginForm