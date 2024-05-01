import Header from '../partials/Header'
import Main from '../partials/Main'
import Footer from '../partials/Footer'
import Banner from '../components/signUp/Banner'
import SignUpForm from '../components/signUp/SignUpForm'

function Login() {
    return (
        <>
            <Header />
            <Main>  
                <Banner />
                <SignUpForm />
            </Main>
            <Footer />
        </>
    )
}

export default Login