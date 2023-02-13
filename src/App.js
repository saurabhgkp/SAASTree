import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/MainPage/MainPage';
import Footer from './Components/Footer.js/Footer';
import Services from './Pages/Services';
import Contact from './Pages/Contact';


function App() {
  return (
    <>
     <Navbar />
     <MainPage/>
     <Footer />
     <Services />
     <Contact />
    </>
  );
}

export default App;
