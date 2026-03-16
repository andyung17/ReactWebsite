import React, { useState } from "react";
import Video from "../../videos/video2.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroP_small,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video2.mp4" />
      </HeroBg>
      <HeroContent>
        <img
          src={require("../../images/my_face.jpg")}
          style={{
            height: 175,
            width: 200,
            position: "relative",
            borderRadius: "50%",
          }}
          alt="Andy ng face"
        ></img>
        <HeroH1>Software Engineer</HeroH1>
        <HeroP>OMSCS Student at Georgia Tech</HeroP>
        <HeroP_small>Artificial Intelligence Specialization</HeroP_small>
        <HeroBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            href={require("../../images/Resume.pdf")}
            download="AndyUngResume.pdf"
          >
            Resume
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
