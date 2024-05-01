import Header from '../partials/Header'
import Main from '../partials/Main'
import Footer from '../partials/Footer'
import Banner from '../components/login/Banner'
import LoginForm from '../components/login/LoginForm'

function Login() {
    return (
        <>
            <Header />
            <Main>  
                <Banner />
                <LoginForm />
            </Main>
            <Footer />
        </>
    )
}

export default Login