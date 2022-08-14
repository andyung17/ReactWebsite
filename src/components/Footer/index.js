import React from 'react'
import { FaLinkedin, FaGithub, FaRegEnvelope} from 'react-icons/fa'
// import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

import { FooterContainer, 
    FooterWrap, 
    FooterLinkWrapper, 
    FooterLinkItems, 
    FooterLinkContainer, 
    FooterLinkTitle, 
    SocialIconLink, 
    SocialMedia} from './FooterElements'

// import { animateScroll as scroll } from 'react-scroll';

//https://react-icons.github.io/react-icons/icons?name=fa

const Footer = () => {
//   const toggleHome = () => {
//     scroll.scrollToTop();
//   }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
            <FooterLinkTitle>Linkedin</FooterLinkTitle>
              <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                <FaLinkedin />
              </SocialIconLink>
                {/* <FooterLink to='/'>How it works</FooterLink>
                <FooterLink to='/'>Testimonials</FooterLink>
                <FooterLink to='/'>Carrers</FooterLink>
                <FooterLink to='/'>Investor</FooterLink>
                <FooterLink to='/'>Terms of Service</FooterLink> */}
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Github</FooterLinkTitle>
                {/* <FooterLink to='/'>Contact</FooterLink>
                <FooterLink to='/'>Support</FooterLink>
                <FooterLink to='/'>Destinations</FooterLink>
                <FooterLink to='/'>Sponsorships</FooterLink> */}
                <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                <FaGithub/>
              </SocialIconLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Email</FooterLinkTitle>
                {/* <FooterLink to='/'>Instagram</FooterLink>
                <FooterLink to='/'>Facebook</FooterLink>
                <FooterLink to='/'>Youtube</FooterLink>
                <FooterLink to='/'>Twitter</FooterLink> */}
                <SocialIconLink href="mailto:ung.andy01@gmail.com" target='_blank' arial-label='Facebook'>
                    <FaRegEnvelope href="mailto:ung.andy01@gmail.com"/>
              </SocialIconLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            {/* <FooterLinkItems>
              <FooterLinkTitle>Email</FooterLinkTitle>
                <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                    <FaRegEnvelope/>
              </SocialIconLink>
            </FooterLinkItems> */}
            {/* <FooterLinkItems>
              <FooterLinkTitle>Resume</FooterLinkTitle>
                <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                    <FaRegListAlt href={require('../../images/Resume.pdf')}  download = "AndyUngResume.pdf"><a  href={require('../../images/Resume.pdf')}  download = "AndyUngResume.pdf"></a></FaRegListAlt>
              </SocialIconLink>
            </FooterLinkItems> */}
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          {/* <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              dolla
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='//www.instagram.com/leonardtcomdt/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='//www.youtube.com/channel/UCF6Cz50AqAJcg6JC5LDRElg/videos?view_as=subscriber' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='//www.linkedin.com/in/leonardtlauenstein/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap> */}
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer