import React from 'react'
import Icon2 from '../../images/FYON.png'
import amazonLogo from '../../images/amazon.jpg'
import gameDealFinder from '../../images/GDF.jpg'
import flyter from '../../images/Flyter.png'
import buyIt from '../../images/buyIt.png'
import diabeticMealTracker from '../../images/diabeticMealTracker.jpg'
import music from '../../images/music.png'
import facerec from '../../images/facerec.png'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

// width="100%"
// height="250"
// xmlns="http://www.w3.org/2000/svg"
// aria-label="Placeholder: Image"
// preserveAspectRatio="xMidYMid slice"

const Projects = () => {
  return (
    <ServicesContainer id='projects'>
      <br/><br/><br/><br/>
      <ServicesH1>Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon2}></ServicesIcon>
          <ServicesH2>FYON Discord bot</ServicesH2>
          <ServicesP>Gathering up-to-date information about anime.</ServicesP>
          <ServicesP>Technologies: <br/>Node.js, Python, JikanAPI, DiscordAPI, CircleCi, Heroku</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={facerec}></ServicesIcon>
          <ServicesH2>Face Recognition</ServicesH2>
          <ServicesP>Facial recognition software to analyze mass collection of photos</ServicesP>
          <ServicesP>Technologies: <br/>Face recoginition, Python, Docker, CircleCi</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={music}/>
          <ServicesH2>Music Scraper</ServicesH2>
          <ServicesP>Created an API to extract music information from AniPlaylist</ServicesP>
          <ServicesP>Technologies: <br/>Flask, Pyppeteer, Python, Heroku</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={gameDealFinder}/>
          <ServicesH2>Game Deal Finder</ServicesH2>
          <ServicesP>Tracks wishlisted games and shows deals acorss many websites.</ServicesP>
          <ServicesP>Technologies: <br/>W.I.P</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={amazonLogo}/>
          <ServicesH2>Amazon Web Scrapper</ServicesH2>
          <ServicesP>Collecting information about wishlisted items.</ServicesP>
          <ServicesP>Technologies: <br/>Python, Selenium, BeautifulSoup, </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={diabeticMealTracker}/>
          <ServicesH2>TrackBite</ServicesH2>
          <ServicesP>Fitness and meal tracker that analyzes dietary and exercise habits</ServicesP>
          <ServicesP>Technologies: <br/>Java, Android Studio, Junit, Firebase</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={flyter}/>
          <ServicesH2>Flyter</ServicesH2>
          <ServicesP>Created a fake e-commerce website with products to purchase for any user</ServicesP>
          <ServicesP>Technologies: <br/>React, CommerceJS API, Stripe API</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={buyIt}></ServicesIcon>
          <ServicesH2>Buy It!</ServicesH2>
          <ServicesP>Price comparison app leveraging live pricing data.</ServicesP>
          <ServicesP>Technologies: <br/>Java, Python, Android Studio, MQTT, ParseHubAPI</ServicesP>
        </ServicesCard>
      </ServicesWrapper> <br/><br/>
      {/* <ServicesWrapper>
      <ServicesCard>
        <ServicesIcon src={music}/>
          <ServicesH2>Music Scraper</ServicesH2>
          <ServicesP>Created an API to extract music information from AniPlaylist</ServicesP>
          <ServicesP>Technologies: <br/>Flask, Pyppeteer, Python, Heroku</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={facerec}></ServicesIcon>
          <ServicesH2>Face Recognition</ServicesH2>
          <ServicesP>Facial recognition software to analyze mass collection of photos</ServicesP>
          <ServicesP>Technologies: <br/>Face recoginition, Python, Docker, CircleCi</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={diabeticMealTracker}/>
          <ServicesH2>TrackBite</ServicesH2>
          <ServicesP>Fitness and meal tracker that analyzes dietary and exercise habits</ServicesP>
          <ServicesP>Technologies: <br/>Java, Android Studio, Junit, Firebase</ServicesP>
        </ServicesCard>
      </ServicesWrapper><br/> */}
      {/* <ServicesWrapper>
      <ServicesCard>
        <ServicesIcon src={flyter}/>
          <ServicesH2>Flyter</ServicesH2>
          <ServicesP>Created a fake e-commerce website with products to purchase for any user</ServicesP>
          <ServicesP>Technologies: <br/>React, CommerceJS API, Stripe API</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={buyIt}></ServicesIcon>
          <ServicesH2>Buy It!</ServicesH2>
          <ServicesP>Price comparison app leveraging live pricing data.</ServicesP>
          <ServicesP>Technologies: <br/>Java, Python, Android Studio, MQTT, ParseHubAPI</ServicesP>
        </ServicesCard>
      </ServicesWrapper> */}
    </ServicesContainer>
  )
}

export default Projects