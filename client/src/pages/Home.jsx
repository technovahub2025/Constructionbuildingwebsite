import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import OurServices from '../components/OurServices'

const Home = () => {
  return (
    <div> <main>
        <Hero/>
          <Services />
          <OurServices/>
      </main></div>
  )
}

export default Home