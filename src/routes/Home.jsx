import React from 'react'
import Navbar from '../Components/Navbar';
import HeroSection from "../Components/HerSection";
import Work from "../Components/Work"
import Footer from '../Components/Footer';

const Home = () => {
  return (
      <div>
        <Navbar/>
        <HeroSection/>
        <Work/>
        <Footer/>
      </div>
  )
}

export default Home