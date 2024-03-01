import React, { useState } from 'react'
import axios from 'axios';

const Cta = ({ language, setLanguage }) => {
    const [email, setEmail] = useState('');
    const langs = [
        // ru
        {
            title: "Никогда не пропускайте обновления",
            text: "Подпишитесь на информационный бюллетень и будьте первым, кто получит новейшие оповещения, объявления и обновления о разработках BTCA.",
            inputplaceholder: "Ваш e-mail",
            button: "Подписаться",
            lan: "ru"
        },
        // eng
        {
            title: " Never miss an update",
            text: "Subscribe to the newsletter and be the first to receive the latest alerts, announcements and updates on BTCA developments.",
            inputplaceholder: "Your email",
            button: "Subscribe",
            lan: "eng"
        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "") {
            alert("Iltimos malumotni to'ldiring")
        } else {
            alert("Malumot yuborildi")
            const telegram_bot_id = '6449286041:AAHA1VJlhGPS3QKrpeGowx9wGPjhgJ6W53Q';
            const chat_id = '5659934636';

            const telegramMessage = `Email: ${email}`;

            axios
                .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
                    chat_id,
                    text: telegramMessage,
                })
                .then((response) => {
                    setEmail('');
                })
            // .catch((error) => {
            //   console.error(error);
            // });
        };
        if (!validateEmail(email)) {
            setError('Hatolik! Malumot email formatida emas');
            return;
        }
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    return (
        <section className='py-10 bg-#0D111B'>
            <div className='containerb'>
                <div className='pt-[75px] pl-[54px] pb-[76px] w-full max-w-[1140px] home-main rounded-[28px]'>
                    {
                        langs.map((e, index) => {
                            if (e.lan === language) {
                                return (
                                    <div key={index}>
                                        <h1 className='font-bold text-[42px] leading-10 title-gradient mb-4 z-50'>{e.title}</h1>
                                        <p className='text-white font-semibold text-lg leading-8 w-full max-w-[500px] mb-8'>{e.text}</p>
                                        <form onSubmit={handleSubmit} className='w-full max-w-[661px] items-center justify-between flex bg-white/[28%] rounded-[14px] pr-3'>
                                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder={e.inputplaceholder} className='w-full focus:outline-none text-base text-white bg-transparent leading-6 py-5 pl-8 ' />
                                            <button className='text-white py-3.5 px-8 bg-#279D88 rounded-[66px]'>{e.button}</button>
                                        </form>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Cta