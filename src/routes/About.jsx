import React from 'react'
import Navbar from '../Components/Navbar';
import ProjectHeroSec from '../Components/ProjectHeroSec';
import Contentabout from '../Components/Contentabout';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <ProjectHeroSec heading="About Us" text="I am Friendly Frontend Developer!" />
      <Contentabout/>
      <Footer />
    </>
  )
}

export default About