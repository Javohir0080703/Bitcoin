import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { homeSwiper } from '../data';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import coinImg from '../img/home-hero-coin.png'
import luna from '../img/390.svg'
import prev from '../img/prev.png'
import next from '../img/next.png'

const HomeHero = ({ language }) => {

    const lang = [
        // ru
        {
            title: "Становитесь своим собственным банком",
            lan: 'ru'
        },
        {
            text: "Получите свободу, благодаря конфиденциальным, глобальным цифровым деньгам. Становитесь своим собственным банком с полным контролем над своими цифровыми активами.",
            lan: 'ru'
        },
        // eng
        {
            title: "Become your own bank",
            lan: 'eng'
        },
        {
            text: "Gain freedom with confidential, global digital money. Become your own bank with full control over your digital assets",
            lan: 'eng'
        },
    ]
    const [custom_swiper, set_swiper] = useState({});

    const nextSlide = () => {
        custom_swiper.slideNext();
    };
    const prevSlide = () => {
        custom_swiper.slidePrev();
    };

    return (
        <section className='pt-[247px] pb-5 home-hero-bg home-hero relative'>
            <div className='containerb'>
                <div className='flex items-center justify-between mb-[87px]'>
                    <div>
                        {
                            lang.map((e, index) => {
                                if (e.lan === language) {

                                    return (
                                        <div key={index}>
                                            <h1 className='font-extrabold text-[56px] leading-[61px] title-gradient mb-4 w-full max-w-[698px]'>{e.title}</h1>
                                            <p className='w-full max-w-[567px] font-semibold text-lg leading-8 text-white'>{e.text}</p>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <img className='z-50' src={coinImg} alt="coin" />
                </div>

                <div className=''>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        navigation={true}
                        slidesPerView={'auto'}
                        onInit={(ev) => {
                            set_swiper(ev);
                        }}
                        // onAnimationEnd={true}
                        coverflowEffect={{
                            rotate: 1,
                            stretch: -60,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                            
                        }}
                        loop={true}
                        modules={[EffectCoverflow, Navigation]}
                        className="mySwiper grid gap-x-5 relative"
                    >
                        <div className='flex items-center absolute z-40  bottom-[-10px] right-[450px] '>
                            <button onClick={prevSlide}>
                                <img src={prev} alt="prev" />
                            </button>
                            <button onClick={nextSlide}>
                                <img src={next} alt="next" />
                            </button>
                        </div>
                        {
                            homeSwiper.map((e, index) => {
                                if (e.lang === language) {

                                    return (
                                        <SwiperSlide className='bg-#151822 z-0 w-full max-w-[353px] rounded-lg pl-[30px] pt-[30px] pr-[50px] relative z-20' key={index}>
                                            <h3 className='font-semibold text-lg leading-8 mb-0.5 text-white'>{e.title}</h3>
                                            <p className='font-bold text-[32px] leading-9 mb-4 text-white'>{e.text}</p>
                                            <p className='text-base leading-6 mb-8 text-white'>{e.textb}</p>
                                            <button className='py-4 px-8 bg-#1D9A6D rounded-xl text-white text-base '>
                                                Перейти и получить
                                            </button>

                                            <img className='absolute left-0 bottom-0 -z-10' src={e.img} alt="img" />
                                        </SwiperSlide>
                                    )
                                }
                            })
                        }



                    </Swiper>

                </div>
            </div>

            <img className='absolute top-[-58px]  right-0 z-0  ' src={luna} alt="luna" />
        </section>
    )
}

export default HomeHero