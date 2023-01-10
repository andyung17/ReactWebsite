import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard} from './WorkExperienceElements'
import CardDisplay from '../../pages/jobs';
import { jobObjectOne, jobObjectTwo, jobObjectThree, jobObjectFour } from '../../pages/jobs/data';
// width="100%"
// height="250"
// xmlns="http://www.w3.org/2000/svg"
// aria-label="Placeholder: Image"
// preserveAspectRatio="xMidYMid slice"

const WorkExperience = () => {
  return (
    <ServicesContainer id='work-experience'>
      <br/><br/><br/><br/>
      <ServicesH1>Work Experience</ServicesH1>
      <ServicesWrapper>
        <ServicesCard onClick={() => { window.location.href =
              "https://www.bluwave-ai.com/"    
            }} >
          <CardDisplay {...jobObjectOne}/>
        </ServicesCard>
      </ServicesWrapper>
      <br></br>
      <ServicesWrapper>
        <ServicesCard onClick={() => { window.location.href =
              "https://tc.canada.ca/en"    
            }} >
          <CardDisplay {...jobObjectTwo}/>
        </ServicesCard>
      </ServicesWrapper>
      <br></br>
      <ServicesWrapper>
        <ServicesCard onClick={() => { window.location.href =
              "https://www.arkalumen.com/"    
            }} >
          <CardDisplay {...jobObjectThree}/>
        </ServicesCard>
      </ServicesWrapper>
      <br></br>
      <ServicesWrapper>
        <ServicesCard onClick={() => { window.location.href =
              "https://www.canada.ca/en/shared-services.html"    
            }} >
          <CardDisplay {...jobObjectFour}/>
        </ServicesCard>
      </ServicesWrapper>
      <br/><br/><br/><br/>
    </ServicesContainer>
  )
}

export default WorkExperience