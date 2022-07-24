import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard} from './WorkExperienceElements'
import CardDisplay from '../../pages/jobs';

// width="100%"
// height="250"
// xmlns="http://www.w3.org/2000/svg"
// aria-label="Placeholder: Image"
// preserveAspectRatio="xMidYMid slice"

const WorkExperience = () => {
  return (
    <ServicesContainer id='work-experience'>
      <ServicesH1>Work Experience</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <CardDisplay/>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default WorkExperience