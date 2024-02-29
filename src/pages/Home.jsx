import React from 'react'
import HomeHero from '../components/HomeHero'
import Swiper from '../components/Swiper'
import Supports from '../components/Supports'
import HomeMain from '../components/HomeMain'
import HomeReady from '../components/HomeReady'
import Cta from '../components/Cta'

const Home = ({ language, setLanguage }) => {

  return (
    <>
      <HomeHero language={language} setLanguage={setLanguage} />
      <Supports language={language} setLanguage={setLanguage} />
      <HomeMain language={language} setLanguage={setLanguage} />
      <HomeReady language={language} setLanguage={setLanguage} />
      <Cta language={language} setLanguage={setLanguage} />
      {/* <Swiper/> */}
    </>
  )
}

export default Home