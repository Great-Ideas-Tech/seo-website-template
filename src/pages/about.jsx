import React from 'react'
import Banner from './components/Banner'
import About from './components/About'
import PricingPlan from './components/PricingPlan'

function about() {
  return (
    <>
    <Banner  heading='About Us' page='About'/>
    <About/>
    <PricingPlan/>
    </>
  )
}

export default about