import React, {useState} from 'react'
import Video from '../../videos/video2.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import {Button} from '../ButtonElement'

const HeroSection = () => {


    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video2.mp4'/>
        </HeroBg>
        <HeroContent>
            <img src={require('../../images/myface-modified.png')} style={{height:150, width:150, position: 'relative'}} alt="Andy Ung face"></img>
            <HeroH1>Welcome to my Website</HeroH1>
            <HeroP> 
                I'm a 4th year software engineer studying at the University of Ottawa.
            </HeroP>
            <HeroBtnWrapper>
                <Button to='test' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                    <strong>About me</strong> {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection