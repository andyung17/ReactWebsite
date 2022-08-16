import styled from 'styled-components'

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
 `
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 10 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (min-width: 980px) and (max-width: 1440px){
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 980px){
      grid-template-columns: 1fr;
    }

    @media screen and (min-width: 1440px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
`
export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 430px;
  max-width: 325px;
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }

  @media screen and (min-width: 980px) and (max-width: 1440px){
    margin: auto;
  }

  @media screen and (max-width: 980px){
    margin: auto;
  }
`
export const ServicesIcon = styled.img`
  height: 160px;
  max-width: 160px;
  margin-bottom: 10px;
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
  // @media screen and (max-width: 480px) {
  //   font-size: 2rem;
  // }  
`
export const ServicesH2 = styled.h2`
  font-size: 1.2rem;
  // @media screen and (max-width: 1000px) {
  //   text-align: center;
  //   font-size: 1rem;
  // }
  // @media screen and (max-width: 786px) {
  //   font-size: 1rem;
  //   text-align: center;
  // }
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  // @media screen and (max-width: 1000px) {
  //   font-size: 0.85rem;
  // }
  // @media screen and (max-width: 786px) {
  //   font-size: 0.85rem;
  // }
`
