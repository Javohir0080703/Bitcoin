import React from 'react'
import { homeready } from '../data'
import { Link } from 'react-router-dom'
import axios from 'axios';

const HomeReady = ({ language, setLanguage }) => {

  const langs = [
    // ru
    {
      title: "Готовы начать?",
      text: "Независимо от того, являетесь ли вы разработчиком, мерчантом, конечным пользователем или покупателем окон, мы приветствуем вас в сообществе BTCA.",
      ready: "Готовый?",
      lang: 'ru'
    },
    // eng 
    {
      title: "Ready to get started?",
      text: "Whether you are a developer, merchant, end user or window buyer, we welcome you to the BTCA community.",
      ready: "Ready?",
      lang: 'eng'
    }
  ]
  return (
    <section className='pt-32  bg-#151822 z-50 relative'>
      <div className='containerb'>
        <div>
          {
            langs.map((lan, index) => {
              if (lan.lang === language) {
                return (
                  <div key={index}>
                    <h1 className='title-gradient font-bold text-[42px] leading-[44px] text-center mb-4'>{lan.title}</h1>
                    <p className='font-semibold text-lg leading-8 text-center w-full max-w-[543px] mx-auto text-white mb-12 '>{lan.text}</p>

                  </div>
                )
              }
            })
          }
        </div>
        <ul className='flex  items-center space-x-6'>
          {
            homeready.map((e, index) => {
              if (e.lang === language) {
                return (
                  < li className='bg-#1a1f2f pl-9  pt-6 w-full max-w-[365px] rounded-lg pb-8 relative z-0' key={index} >
                    <div className='flex items-center justify-between mb-2.5'>
                      <span className='font-bold text-lg leading-5 text-white'>{e.shag}</span>
                      <svg width="252" height="1" viewBox="0 0 252 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="-8.74228e-08" y1="0.5" x2="303" y2="0.499947" stroke="white" strokeOpacity="0.1" />
                      </svg>

                    </div>
                    <h3 className='font-bold text-[32px] leading-9 mb-10 text-white'>{e.title}</h3>
                    <Link className='py-4 px-8 bg-#1D9A6D  rounded-xl inline-block text-white font-bold text-base leading-5 '>{e.button}</Link>
                    <img className='absolute right-0 bottom-0 -z-30' src={e.img} alt="" />
                  </ li>
                )
              }
            })
          }
        </ul>
      </div>
      {
       langs.map((e, index) => {
          if (e.lang === language) {
            return (
              <div key={index}>
                <span className='top-0 right-[398px] font-bold text-[180px] absolute leading-[196px] bg-gradient-to-r text-transparent bg-clip-text from-[#FFFFFF]/[5%] to-[#B0FAFF][0%] -z-10'>{e.ready}</span>
              </div>
            )
          }
        })
      }
    </section>
  )
}

export default HomeReady

