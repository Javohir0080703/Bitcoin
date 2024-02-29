import React from 'react'

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
    <section className='pt-32 bg-#151822 '>
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
      </div>
    </section>
  )
}

export default HomeReady