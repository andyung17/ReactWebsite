import React from 'react'
import { FaBars } from 'react-icons/fa'
import {Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavItem, 
    NavMenu, 
    NavLinks,
    NavBtn} from './NavbarElements';

const Navbar = ({toggle}) => {


  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLinks to='home'>
              <NavLogo to=''>Home</NavLogo>
          </NavLinks>
          {/* <NavLogo to='/'>Home</NavLogo> */}
          <MobileIcon onClick={toggle}>
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
                <NavLinks to='contact'>Contact Me</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
              {/* <Button onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' href={require('../../images/Resume.pdf')}  download = "AndyUngResume.pdf">
                  Resume
                  {hover ? <ArrowForward /> : <ArrowRight/>}
              </Button> */}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar