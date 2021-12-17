// components/layout.js
import React, { FC } from 'react'
import { PageContainer, Wrapper } from 'components/atoms/Container'
import Header from './Header'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Header />
        <main>{children}</main>
      </Wrapper>
    </>
  )
}
export default Layout
