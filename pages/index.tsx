import React from 'react'
// COMPONENTS
import ActionButtons from '../components/ActionButtons'
import Banner from '../components/Banner'

export default function Home () {
  return (
    <div className="home">
      <Banner bannerImg="./assets/images/paint-banner.jpg" bannerImgAlt="paint nrush against white background">
        <h1 className="primary-text">
          We paint, we build, and we fix all your problems
        </h1>
        <h3 className='secondary-text'>
          Affordable solutions for everyday households, to common problems, and with a
          unique customer experience
        </h3>
        <ActionButtons primaryLink='/our-work' secondaryLink='/contact' />
      </Banner>
    </div>
  )
}
