import React from 'react'
import Slider from '../components/Hero'
import Services from '../components/Services'
import OurServices from '../components/OurServices'

const Home = () => {
  return (
    <div className='mt-9'> <main>
        <Slider/>
          <Services />
          <OurServices/>
      </main></div>
  )
}

export default Home