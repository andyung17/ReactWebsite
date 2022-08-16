import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #101522;
`

export const FooterWrap = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

`
export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

export const FooterLinkWrapper = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 626px) {
    flex-direction: column;
    margin-right: -10px;
  }
`
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin: 30px;
  margin-left: 30px;
  margin-right: 30px;
  text-align: center;
  max-width: 160px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 12px;
  margin-left: -3px;
`
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }
`
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`
export const SocialIcons = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 40px;
  align-items: center;
`