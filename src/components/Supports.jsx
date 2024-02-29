import React from 'react'
import suports from '../img/222333.png'
import { Link } from 'react-router-dom'
const Supports = ({ language, setLanguage }) => {

    const langs = [
        // ru
        {
            title: 'Нас поддерживают',
            text: 'Получите свободу, благодаря конфиденциальным, глобальным цифровым деньгам. Становитесь своим собственным банком с полным контролем над своими цифровыми активами.',
            tips: 'СОВЕТЫ',
            boxtext: 'Поменяйте местами, чтобы увидеть больше',
            bgText: 'ПАРТНЕРЫ',
            lan: 'ru'
        },

        // eng
        {
            title: 'They support us',
            text: 'Gain freedom with confidential, global digital money. Become your own bank with full control over your digital assets.',
            tips: 'TIPS',
            boxtext: 'Swap to see more',
            bgText: 'PARTNERS',
            lan: 'eng'
        }
    ]
    return (
        <section className='pt-[95px] pb-5 bg-[#151822] relative'>
            <div className='containerb flex items-center justify-between'>
                <div>
                    {
                        langs.map((lan, index) => {
                            if (lan.lan === language) {
                                return (
                                    <div key={index} className='w-full max-w-[567px] '>
                                        <h2 className='title-gradient font-bold text-[42px] leading-[44px] mb-6'>
                                            {lan.title}
                                        </h2>
                                        <p className='text-white font-semibold text-lg leading-8 mb-12'>{lan.text}</p>
                                        <Link className='py-2.5 px-4 bg-#1a1f2f flex rounded-lg items-center justify-between w-full max-w-[493px]'>
                                            <div >
                                                <span className='py-1.5 mb-1 inline-block px-[22px] bg-#1A204A rounded-[37px] text-xs leading-3 text-white'>{lan.tips}</span>
                                                <p className='text-white font-semibold text-lg opacity-[80%]'>{lan.boxtext}</p>
                                            </div>
                                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.4167 15.5L18.5833 21.6667L12.4167 27.8334V23.0542C5.38667 22.345 0.0833359 19.2309 0.0833359 15.5C0.0833359 11.7692 5.38667 8.65504 12.4167 7.94587V11.0138C7.09792 11.538 3.16667 13.3417 3.16667 15.5C3.16667 17.6584 7.09792 19.4621 12.4167 19.9863V15.5ZM27.8333 15.5C27.8333 13.3417 23.9021 11.538 18.5833 11.0138V7.94587C25.6133 8.65504 30.9167 11.7692 30.9167 15.5C30.9167 18.83 26.6925 21.6667 20.7725 22.7459L21.8517 21.6667L20.0017 19.8013C24.5804 19.1384 27.8333 17.458 27.8333 15.5ZM13.9583 0.083374H17.0417V17.0417L13.9583 13.9584V0.083374ZM13.9583 30.9167V29.375L17.0417 26.2917V30.9167H13.9583Z" fill="white" />
                                            </svg>

                                        </Link>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <img className='w-full max-w-[500px]' src={suports} alt="supports" />
            </div>
           <div className='absolute top-[96px] left-0'>
           {
                langs.map((e) => {
                    if (e.lan === language) {
                        return (
                           <div>
                            <span className='font-bold text-[180px] leading-[196px] bg-gradient-to-r text-transparent bg-clip-text from-[#FFFFFF]/[5%] to-[#B0FAFF][0%] -z-10'>{e.bgText}</span>
                           </div>
                        )
                    }
                })
            }
           </div>
        </section>
    )
}

export default Supports