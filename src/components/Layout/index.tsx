import React, { FC } from 'react'
import { Wrapper } from 'components/atoms/Container'
import Header from './Header'
import styles from './layout.module.scss'
import Footer from './Footer'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Wrapper style={{ height: 'auto', minHeight: '85vh' }}>
        <Header />
        <main className={styles.main}>{children}</main>
      </Wrapper>
      <Footer />
    </>
  )
}
export default Layout
