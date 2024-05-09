import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/useUserProvider'
import { useSignUp } from '../../helpers/signUp.js'

function SignUpForm() {

    const { user } = useUser()
    const navigate = useNavigate()

    const {
        creds,
        errors,
        serverResponse,
        isLoading,
        handleChange,
        handleSubmit
    } = useSignUp()

    if (user) {
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
                            <div className="signUpForm">
                                <h4 className="sub-heading">SignUp Form</h4>
                                <h2 className="heading">Create your identity</h2>
                                <form id="signUpForm">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input 
                                                    className="form-control" 
                                                    value={creds.name} 
                                                    name="name" 
                                                    placeholder="Name" 
                                                    type="text" 
                                                    onChange={handleChange}
                                                />
                                                {
                                                    errors.nameError && 
                                                    <p style={{ color: 'red', fontWeight: '600', fontSize: '14px', marginLeft: '10px' }}>
                                                        {errors.nameError}
                                                    </p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 mt-2">
                                            <div className="form-group">
                                                <input 
                                                    className="form-control" 
                                                    value={creds.email} 
                                                    name="email" 
                                                    placeholder="Email Address" 
                                                    type="email" 
                                                    onChange={handleChange}
                                                />
                                                {
                                                    errors.emailError && 
                                                    <p style={{ color: 'red', fontWeight: '600', fontSize: '14px', marginLeft: '10px' }}>
                                                        {errors.emailError}
                                                    </p>
                                                }
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-2">
                                            <div className="form-group">
                                                <input 
                                                    className="form-control" 
                                                    value={creds.phone} 
                                                    name="phone" 
                                                    placeholder="Phone" 
                                                    type="tel" 
                                                    onChange={handleChange}
                                                />
                                                {
                                                    errors.phoneError && 
                                                    <p style={{ color: 'red', fontWeight: '600', fontSize: '14px', marginLeft: '10px' }}>
                                                        {errors.phoneError}
                                                    </p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 mt-2">
                                            <div className="form-group">
                                                <input 
                                                    className="form-control" 
                                                    value={creds.password}
                                                    name="password" 
                                                    placeholder="Password" 
                                                    type="password" 
                                                    onChange={handleChange}
                                                />
                                                {
                                                    errors.passwordError && 
                                                    <p style={{ color: 'red', fontWeight: '600', fontSize: '14px', marginLeft: '10px' }}>
                                                        {errors.passwordError}
                                                    </p>
                                                }
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-2">
                                            <div className="form-group">
                                                <input 
                                                    className="form-control" 
                                                    value={creds.confirmPassword} 
                                                    name="confirmPassword" 
                                                    placeholder="Confirm Password" 
                                                    type="password" 
                                                    onChange={handleChange}
                                                />
                                                {
                                                    errors.confirmPasswordError && 
                                                    <p style={{ color: 'red', fontWeight: '600', fontSize: '14px', marginLeft: '10px' }}>
                                                        {errors.confirmPasswordError}
                                                    </p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        errors.isMatched &&
                                        <p style={{ color: 'red', fontWeight: '600', fontSize: '14px', marginLeft: '10px' }}>
                                            {errors.isMatched}
                                        </p>
                                    }
                                    <div className="row">
                                        <div className="col-lg-12 mt-3">
                                            <button 
                                                type="submit" 
                                                className="btn btn-gradient" 
                                                name="submit"  
                                                style={{ width: '100%' }}
                                                onClick={handleSubmit}
                                            >
                                                {
                                                    isLoading ? (
                                                        <div className="loader">
                                                            <span className="loading-spinner"></span>
                                                        </div>
                                                    ) : (
                                                        'Sign Up'
                                                    )
                                                }
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

                                    {
                                        serverResponse && 
                                        <p 
                                            className={serverResponse.status === 200 ? 'success' : 'error'}
                                        >
                                            {serverResponse.message}
                                        </p>
                                    }
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