import React from 'react'
import Navbar from '../Components/Navbar';
import ProjectHeroSec from '../Components/ProjectHeroSec';
import Footer from '../Components/Footer';
import Form from '../Components/Form';
const Contact = () => {
  return (
    <>
      <Navbar />
      <ProjectHeroSec heading="Contact Us" text="Let's have a Chat" />
      <Form/>
      <Footer />
    </>
  )
}

export default Contact