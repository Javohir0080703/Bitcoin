import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = ({language,setLanguage}) => {
  return (
    <div className='flex flex-col min-h-screen '>
      <div className='bg-black'><Header language={language}  setLanguage={setLanguage}/></div>
      <main className='grow'>
        <Outlet />
      </main>
      <Footer language={language}  setLanguage={setLanguage} />
    </div>
  )
}

export default MainLayout