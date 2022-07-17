import React from 'react'
import Icon1 from '../../images/bluwave-ai.jpg'
import Icon2 from '../../images/bluwave-ai.jpg'
import Icon3 from '../../images/bluwave-ai.jpg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './WorkExperienceElements'

// width="100%"
// height="250"
// xmlns="http://www.w3.org/2000/svg"
// aria-label="Placeholder: Image"
// preserveAspectRatio="xMidYMid slice"

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon></ServicesIcon>
          <div className="row no-gutters">
            <div className="col-md-4">
            {/* <svg
                className="bd-placeholder-img"
                width="100%"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Placeholder: Image"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96" />
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                Image
                </text>
            </svg> */}
            <img src={require('../../images/bluwave-ai2.jpg')}                 
                className="bd-placeholder-img"
                width="100%"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Placeholder: Image"
                preserveAspectRatio="xMidYMid slice"
                ></img>
            </div>
            </div>
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>We help your fess and increase your overall revenue.</ServicesP>
        </ServicesCard>
        {/* <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>you can acess our plataform online anywhere in the world.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
        </ServicesCard> */}
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services