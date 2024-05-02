import { useUser } from '../hooks/useUserProvider'
import { Link } from 'react-router-dom'

import Header from '../partials/Header'
import Main from '../partials/Main'
import Footer from '../partials/Footer'
import Banner from '../components/dashboard/Banner'
import ScrubSection from '../components/dashboard/ScrubSection'

function Dashboard() {

    const { user } = useUser()

    if (!user) {
        return (
            <>
                <Header />
                <Main>  
                    <Banner />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mt-5 mb-4">
                                <h3 className="text-danger">
                                    You are logged out! Please <Link className="link-box" to="/login">Login</Link> again.
                                </h3>
                            </div>
                        </div>
                    </div>
                </Main>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Header />
            <Main>  
                <Banner />
                <ScrubSection />
            </Main>
            <Footer />
        </>
    )
}

export default Dashboard