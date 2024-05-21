import '../../styles/admin/admin-login.css'

import { useAdminLogin } from '../../utils/useAdminLogin'
import { FaUnlockKeyhole, FaAt, FaEye, FaEyeSlash } from 'react-icons/fa6'

function AdminLogin () {

    const {
        creds,
        errors,
        isLoading,
        isShown,
        handleChange,
        togglePassword,
        handleSubmit
    } = useAdminLogin()

    document.title = 'Admin Login | DNC Litigator Check'

    return (
        <div className="admin-login-container">
            {/* <video autoPlay muted loop>
                <source src="/video/2.mp4" type="video/mp4" />
            </video> */}
            <div className="login-box">
                <div className="login-box-header">
                    <h1>Admin Login</h1>
                </div>

                <div className="login-box-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="custom-group">
                                <span><FaAt /></span>
                                <input
                                    className="field"
                                    id="email"
                                    name="email"
                                    value={creds.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                            </div>
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                        <div className="form-group">
                            <div className="custom-group">
                                <span><FaUnlockKeyhole /></span>
                                <input
                                    className="field"
                                    type={isShown ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={creds.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                />
                                <a onClick={togglePassword}>{isShown ? <FaEyeSlash /> : <FaEye />}</a>
                            </div>
                            {errors.password && <p>{errors.password}</p>}
                        </div>
                        <button type="submit" className="custom-button" disabled={isLoading}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin