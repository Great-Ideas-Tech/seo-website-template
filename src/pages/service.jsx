import React from 'react'
import Banner from './components/Banner'
import Card from './components/Card'
import Service from './components/Service'

function service() {
  return (
    <>
    <Banner heading='Our Services' page='Services'/>
    <Card/>
    <Service/>
    </>
  )
}

export default service