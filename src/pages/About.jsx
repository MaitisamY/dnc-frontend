import Header from '../partials/Header'
import Main from '../partials/Main'
import Footer from '../partials/Footer'
import Banner from '../components/about/Banner'
import AboutUs from '../components/about/AboutUs'

function Home() {
    return (
        <>
            <Header />
            <Main>  
                <Banner />
                <AboutUs />
            </Main>
            <Footer />
        </>
    )
}

export default Home