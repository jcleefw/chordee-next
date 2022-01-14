import { Wrapper } from 'components/atoms/Container'
import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled.footer`
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const Footer = () => {
  return (
    <FooterDiv>
      <Wrapper>
        <div>Brought to you by jcleefw. Happy guitaring !!</div>
      </Wrapper>
    </FooterDiv>
  )
}

export default Footer
