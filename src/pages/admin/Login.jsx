import '../../styles/admin/admin-login.css'

function AdminLogin () {
    return (
        <div className="admin-login-container">
            <div className="left-container">
                <video autoPlay muted loop>
                    <source src="/img/video.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="right-container">
                <h1>Admin Login</h1>
            </div>
        </div>
    )
}

export default AdminLogin