import React from 'react'
import resume from "../../assets/CV of Henry Danful Kofi Mensah.pdf"
import { Link } from 'react-router-dom'
import { UilDownloadAlt } from "@iconscout/react-unicons"
import { UilSmileWinkAlt } from "@iconscout/react-unicons"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import tailwind from "../../assets/tailwind 1.png"
import c_sharp from "../../assets/c-sharp.png"

const techStack = [
  { src: html, name: `HTML` },
  { src: css, name: `CSS` },
  { src: js, name: `JavaScript` },
  { src: react, name: `React` },
  { src: tailwind, name: `Tailwind CSS` },
  { src: c_sharp, name: `C#` },
]

const Data = () => {
  return (
    <div className='sm:col-[1/3] md:col-[2/3]'>
      <h1 className='text-big-font-size mb-mb-0-25'>
        Henry Mensah
      </h1>
      <h3 className=' relative text-h3-font-size pr-[5.4rem] font-normal mb-mb-1 lg:max-w-none lg:mb-mb-2-5 md:mb-mb-1'>Software Developer</h3>
      <p className='max-w-[400px] mb-mb-2 text-small-font-size'>
        A passionate software developer, majoring in front-end development but with backend development skills
      </p>


      <div className='flex flex-row gap-x-4 mb-mb-2-5'>
        <div>
          <Link to='mailto:henrydanfulmensah@gmail.com' className='inline-flex bg-title-color text-container-color sm:px-5 py-3 md:px-8 font-font-medium rounded-xl items-center hover:bg-title-color-dark'>
          <span className='pr-2'>Say hello</span>
            <UilSmileWinkAlt size="25" />
          </Link>
        </div>
        <div>
          <Link download="" to={resume} className='rounded-xl font-font-medium text-title-color-dark sm:px-5 py-3 md:px-8 inline-flex bg-[#E2E2E2] border-title-color-dark border-[1px] button-flex hover:bg-container-color items-center'>
            <span className='pr-2'>View resume</span>
            <UilDownloadAlt size="16" />
          </Link>
        </div>
      </div>

      <div className=' flex flex-col space-y-4 mb-mb-2 mt-mb-1'>
        <div>
          <h3 className=" text-h3-font-size">Tech stack</h3>
        </div>
        <div className="sm:flex sm:flex-row space-x-5">
          {techStack.map((stack) => {
            return (
              <img src={stack.src} key={stack.name} alt={stack.name} className="h-10 w-10" />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Data
