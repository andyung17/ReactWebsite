import React from 'react'
import {SocialIconLink, FooterLinkTitle, FooterLinkItems, FooterLinkWrapper, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Topline, Heading, Subtitle, ImgWrap, Img } from './InfoElements'
import { FaLinkedin, FaGithub, FaRegEnvelope} from 'react-icons/fa'

    const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, description2, alt, img}) => {
      return (
        <>
            <InfoContainer lightBg = {lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Topline>{topLine}</Topline><br/>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Subtitle darkText={darkText}>{description2}</Subtitle>
                                {/* <SocialIconLink href='https://www.linkedin.com/in/andy-ung-76b970194/' target='_blank' arial-label='Facebook'>
                                    <FaLinkedin />
                                </SocialIconLink>
                                <SocialIconLink href='https://github.com/andyung17' target='_blank' arial-label='Facebook'>
                                    <FaGithub/>
                                </SocialIconLink> */}
                                <FooterLinkWrapper>
                                    <FooterLinkItems>
                                        <FooterLinkTitle>Linkedin</FooterLinkTitle>
                                        <SocialIconLink href='https://www.linkedin.com/in/andy-ung-76b970194/' target='_blank' arial-label='Facebook'>
                                            <FaLinkedin />
                                        </SocialIconLink>
                                    </FooterLinkItems>
                                    <FooterLinkItems>
                                        <FooterLinkTitle>Github</FooterLinkTitle>
                                        <SocialIconLink href='https://github.com/andyung17' target='_blank' arial-label='Facebook'>
                                        <FaGithub/>
                                        </SocialIconLink>
                                    </FooterLinkItems>
                                    <FooterLinkItems>
                                        <FooterLinkTitle>Email</FooterLinkTitle>
                                        <SocialIconLink href="mailto:ung.andy01@gmail.com" target='_blank' arial-label='Facebook'>
                                            <FaRegEnvelope href="mailto:ung.andy01@gmail.com"/>
                                        </SocialIconLink>
                                    </FooterLinkItems>
                                </FooterLinkWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img className='contactImage' src={require('../../images/myface-modified.png')}  alt={alt}></Img>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
      )
    }

export default InfoSection