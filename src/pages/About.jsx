import Header from '../partials/Header'
import Main from '../partials/Main'
import Footer from '../partials/Footer'
import Banner from '../components/about/Banner'

function Home() {
    return (
        <>
            <Header />
            <Main>  
                <Banner />
            </Main>
            <Footer />
        </>
    )
}

export default Home