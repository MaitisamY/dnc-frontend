import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useUser } from '../../hooks/useUserProvider'
import axios from 'axios'
import validator from 'validator'

function LoginForm() {

    const { token, updateUser, updateToken } = useUser()

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const [creds, setCreds] = useState({
        email: '',
        password: '',
        emailError: '',
        passwordError: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setCreds({
            ...creds,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { email, password } = creds;
    
        if (email === '') {
            setCreds((prevCreds) => ({
                ...prevCreds,
                emailError: 'Please enter your email'
            }));
            return;
        }
        if (email.length < 5) {
            setCreds((prevCreds) => ({
                ...prevCreds,
                emailError: 'Email should be at least 5 characters'
            }));
            return;
        }
        if (!validator.isEmail(email)) {
            setCreds((prevCreds) => ({
                ...prevCreds,
                emailError: 'Please enter a valid email'
            }));
            return;
        }
        if (password === '') {
            setCreds((prevCreds) => ({
                ...prevCreds,
                passwordError: 'Please enter your password'
            }));
            return;
        }
        if (password.length < 5) {
            setCreds((prevCreds) => ({
                ...prevCreds,
                passwordError: 'Password should be at least 5 characters'
            }));
            return;
        }
    
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/login', {
                email: email,
                password: password
            });

            updateToken(response.data.token);
    
            updateUser({
                id: response.data.data.id,
                name: response.data.data.name,
                email: response.data.data.email
            });
    
            setTimeout(() => {
                navigate('/dashboard');
            }, 3000);
    
        } catch (error) {
            toast.error(error.response.data.error, {
                position: "bottom-right",
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        if (creds.email.length >= 5 && validator.isEmail(creds.email)) {
            setCreds((prevCreds) => ({
                ...prevCreds,
                emailError: ''
            }));
        }
    
        if (creds.password.length >= 5) {
            setCreds((prevCreds) => ({
                ...prevCreds,
                passwordError: ''
            }));
        }
    }, [creds.email, creds.password]);
    
    if (token) {
        navigate('/dashboard')
    }

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
                                                type="text"
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
                                            disabled={isLoading}
                                        >
                                            {
                                                isLoading ? (
                                                    <div className="loader">
                                                        <span className="loading-spinner"></span>
                                                    </div>
                                                ) : (
                                                    'Login'
                                                )
                                            }
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