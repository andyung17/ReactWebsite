import styled from 'styled-components'

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #181818;
  @media screen and (max-width: 768px) {
    max-height: 6000px;
  }
  position: relative;
 `
export const ServicesWrapper = styled.div`
    margin: 0 auto;
    display:inline-block;
    // grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    min-width: 1400px;
    @media screen and (max-width: 1400px) {
      min-width: 100%;
    }
    grid-gap: 20px;
`
export const ServicesCard = styled.div`
  background: #fff;
  align-content: center;
  margin-left:auto;
  margin-right:auto;
  min-width: 80%;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  max-height: 10000px;
  max-width: 80%;
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  position: 'absolute';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justifyContent: 'center';
  alignItems: 'center';
`
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  padding-top: 6px;
  z-index: 1;
  height: 40px;
  border-radius: 5px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`
