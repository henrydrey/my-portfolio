import React from 'react'
import "./scrollup.css"
import {UilArrowUp} from "@iconscout/react-unicons"

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = this.document.querySelector(".scrollup")
        if (this.scrollY >= 560) {
            scrollUp.classList.add("show-scroll")
        }
        else {
            scrollUp.classList.remove("show-scroll")
        }
    })
  return (
    <a href='#home' className='scrollup fixed right-[2.5rem] bottom-[-20%] bg-title-color opacity-[0.8] py-[0.3rem] px-[0.5rem] rounded-[0.4rem] z-z-tooltip transition-all delay-100 lg:right-[1.5rem] lg:py-[0.25rem] lg:px-[0.4rem] hover:bg-title-color-dark'>
        <UilArrowUp className="text-[1.5rem] text-container-color lg:text-[1.25rem]" />
    </a>
  )
}

export default ScrollUp