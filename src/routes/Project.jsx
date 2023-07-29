import React from 'react'
import Navbar from '../Components/Navbar';
import ProjectHeroSec from '../Components/ProjectHeroSec';
import PricingCard from '../Components/PricingCard';
import Work from '../Components/Work';
import Footer from '../Components/Footer';


const Project = () => {
  return (
    <div>
      <Navbar/>
      <ProjectHeroSec heading="Our work" text="Let's Work together"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project