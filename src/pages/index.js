import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import Projects from '../components/Projects';
// import Footer from '../components/Footer';
import WorkExperience from '../components/WorkExperience';
import InfoSection from '../components/InfoSection';
import {homeObjOne} from '../components/InfoSection/Data'

const Home = () => {
  
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <WorkExperience />
        <Projects/>
        <InfoSection {...homeObjOne} />
        {/* <Footer/> */}
    </>
  )
}

export default Home