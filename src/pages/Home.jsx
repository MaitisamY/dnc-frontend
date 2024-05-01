import Header from '../partials/Header'
import Main from '../partials/Main'
import Footer from '../partials/Footer'
import Banner from '../components/home/Banner'
import WhyChooseUs from '../components/home/WhyChooseUs'
import TechAndPricing from '../components/home/TechAndPricing'
import TestimonialAndFAQ from '../components/home/TestimonialAndFAQ'
import TeamAndBlog from '../components/home/TeamAndBlog'

function Home() {
    return (
        <>
            <Header />
            <Main>  
                <Banner />
                <WhyChooseUs />
                <TechAndPricing />
                <TestimonialAndFAQ />
                <TeamAndBlog />
            </Main>
            <Footer />
        </>
    )
}

export default Home