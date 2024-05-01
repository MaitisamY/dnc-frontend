import './styles/app.css'

import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const PriceAndBenefit = lazy(() => import('./pages/PriceAndBenefit'))
const MassPhoneScrub = lazy(() => import('./pages/MassPhoneScrub'))
const NumberLookup = lazy(() => import('./pages/NumberLookup'))
const MassPhoneVerification = lazy(() => import('./pages/MassPhoneVerification'))
const SingleNumberVerification = lazy(() => import('./pages/SingleNumberVerification'))
const TCPAUpdates = lazy(() => import('./pages/TCPAUpdates'))
const Contact = lazy(() => import('./pages/Contact'))
const Login = lazy(() => import('./pages/Login'))
const SignUp = lazy(() => import('./pages/SignUp'))

function App() {
    return (
        <Suspense fallback={<div className="se-pre-con"></div>}>
            <Router>
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/prices-benefits" element={<PriceAndBenefit />} />
                    <Route path="/services/mass-phone-scrub" element={<MassPhoneScrub />} />
                    <Route path="/services/number-lookup" element={<NumberLookup />} />
                    <Route path="/services/mass-phone-verification" element={<MassPhoneVerification />} />
                    <Route path="/services/single-number-verification" element={<SingleNumberVerification />} />
                    <Route path="/services/tcpa-updates" element={<TCPAUpdates />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </Router>
        </Suspense>
    )
}

export default App