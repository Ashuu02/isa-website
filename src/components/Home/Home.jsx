import React from 'react'
import Blog from '../Blog/Blog'
import Achievements from './Achievements'
import FooterSlider from '../Footer/FooterSlider'
import UpcomingEvents from './UpcomingEvents'

const Home = () => {
  return (
    <>
    <UpcomingEvents />
      <Achievements />
      <Blog />
      <FooterSlider/>
    </>
  )
}
export default Home
