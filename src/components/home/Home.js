import React from 'react'
import "./home.css"
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'


const Home = () => {
  return (
    <section className='sm:pt-[3rem] sm:px-[1rem] sm:pb-[2rem] md:pt-[1rem] lg:pt-[6rem] md:px-0 md:pb-[2rem] pt-[4rem]' id='home'>
      <div className='sm:gap-y-[3rem] max-w-[968px] md:mx-mb-2-5 lg:mx-auto grid gap-6 sm:mx-mb-2'>
        <div className='grid-cols-[116px_repeat(2,_1fr)] pt-[4.5rem] gap-x-8 items-center grid gap-6 md:grid-cols-[100px_repeat(2,_1fr)] md:gap-x-[1.25rem]'>
        {/* sm:grid-cols-[116px_repeat(2,_1fr)] sm:pt-[4.5rem] sm:gap-x-8 sm:items-center  */}
            <Social />

            <div className='home_img'></div>

            <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  )
}

export default Home
