import React from 'react'
import Hero from './Hero';
import Feature from './Feature';
import Marketing from './Marketing';
import Service from './Service';
// import Team from './Team';
import Team2 from './Team2';
import Pricing from './Pricing';
import Down from './Down';


const MainPage = () => {
  return (
    <>
      <Hero />
      <Feature />
      <Marketing />
      <Service />
      {/* <Team/> */}
      <Team2 />
      <Pricing />
      <Down />
    </>
  )
}

export default MainPage
