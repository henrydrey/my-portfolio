import React from 'react'
import AboutImg from "../../assets/about.jpg"
import resume from "../../assets/CV of Henry Danful Kofi Mensah.pdf"
import Info from './Info'
import { UilDownloadAlt } from "@iconscout/react-unicons"


const About = () => {
  return (
    <section className='px-0 pb-[2rem] sm:pt-[6rem] sm:px-[1rem] sm:pb-[2rem] md:pt-[1rem] lg:pt-[6rem] md:px-0 md:pb-[4rem] items-center sm:mx-5 md:mx-0' id='about'>
        <h2 className=' text-h1-font-size text-title-color text-center justify-center content-center sm:ml-10 md:ml-0'>About Me</h2>
        <span className='block text-small-font-size mb-[4rem] text-center md:mb-mb-3 sm:ml-10 md:ml-0'>Let's talk about me</span>

        <div className='md:grid-cols-[repeat(2,_1fr)] sm:items-center gap-x-[4rem] sm:grid-cols-[1fr] lg:gap-y-[2.5rem] w-full max-w-[968px] md:mx-auto grid gap-[1.5rem]'>
            <img src={AboutImg} alt="mugshot" className='md:w-[350px] rounded-3xl justify-self-center sm:w-[220px]' />

            <div className='lg:text-center'>
                <Info />

                <p className='py-0 pl-0 mb-mb-2-5 lg:py-0 lg-px-[1rem] lg:mb-[2rem] md:p-0 w-full'>
                    As a front-end developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind and .NET framework. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am a developer with a proven ability to collaborate effectively with senior developers while spending extra time to be mentored. Driven and enthusiastic front-end developer with a plethora of diverse skills, and passion for creating exceptional web experiences.
                </p>

                <a download="" href={resume} className='button_dark button--flex bg-title-color text-container-color py-3 px-8 rounded-xl font-font-medium hover:bg-title-color-dark inline-flex items-center'>
                    <span className='pr-2'>Download resume</span>  
                    <UilDownloadAlt size="20" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default About
