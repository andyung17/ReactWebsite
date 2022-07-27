import React from 'react'
import Icon2 from '../../images/FYON.png'
import amazonLogo from '../../images/amazon.jpg'
import gameDealFinder from '../../images/GDF.jpg'
import diabeticMealTracker from '../../images/diabeticMealTracker.jpg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

// width="100%"
// height="250"
// xmlns="http://www.w3.org/2000/svg"
// aria-label="Placeholder: Image"
// preserveAspectRatio="xMidYMid slice"

const Projects = () => {
  return (
    <ServicesContainer id='projects'>
      <ServicesH1>Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon2}></ServicesIcon>
          <ServicesH2>FYON Discord bot</ServicesH2>
          <ServicesP>Gathering up-to-date information about anime.</ServicesP>
          <ServicesP>Technologies: <br/>Node.js, Python, JikanAPI, DiscordAPI, CircleCi, Heroku</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={gameDealFinder}/>
          <ServicesH2>Game Deal Finder</ServicesH2>
          <ServicesP>Tracks wishlisted games and shows deals acorss many websites.</ServicesP>
          <ServicesP>Technologies: <br/>mySQL.. tbc</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={amazonLogo}/>
          <ServicesH2>Amazon Web Scrapper</ServicesH2>
          <ServicesP>Collecting information about wishlisted items.</ServicesP>
          <ServicesP>Technologies: <br/>Python, Selenium, BeautifulSoup, </ServicesP>
        </ServicesCard>
      </ServicesWrapper> <br/>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon></ServicesIcon>
          <ServicesH2>Buy It!</ServicesH2>
          <ServicesP>Price comparison app leveraging live pricing data.</ServicesP>
          <ServicesP>Technologies: <br/>Java, Python, Android Studio, MQTT, ParseHubAPI</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Game Deal Finder</ServicesH2>
          <ServicesP>Tracks wishlisted games and shows deals acorss many websites.</ServicesP>
          <ServicesP>Technologies: <br/>mySQL.. tbc</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={diabeticMealTracker}/>
          <ServicesH2>Diabetic Meal Tracker</ServicesH2>
          <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Projects