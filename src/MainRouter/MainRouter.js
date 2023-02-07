import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import MainPage from '../Components/MainPage/MainPage';
import Footer from '../Components/Footer.js/Footer';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';
const MainRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<MainPage />} />

                <Route exact path='/services' element={<Services />} />
                <Route exact path='/contact' element={<Contact />} />

                {/* -------------------------------------------------  when enter a wrong Route ------------------------------------ */}
                {/* <Route path="*" element={<WrongRoute/>}/> */}

            </Routes>
            <Footer />
        </Router>
    )
}

export default MainRouter;