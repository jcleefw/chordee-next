import { PageContainer, Section } from 'components/atoms/Container'
import type { NextPage } from 'next'
import React from 'react'

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Section>
        Chordee is a simple web app that helps you learn the your guitar notes
        easily by the keys and tuning you are playing.
      </Section>
    </PageContainer>
  )
}

export default Home
