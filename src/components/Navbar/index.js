import React from 'react'
import { FaBars } from 'react-icons/fa'
import {Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavItem, 
    NavMenu, 
    NavLinks,
    NavBtn,
    NavBtnLink} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>test</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
                <NavLinks to='work-experience'>Work Experience</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='projects'>Projects</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/test'>test</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar