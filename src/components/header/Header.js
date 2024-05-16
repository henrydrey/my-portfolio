import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./header.css"


const Header = () => {
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header")
        if (this.scrollY >= 80) {
            header.classList.add("scroll-header")
        }
        else {
            header.classList.remove("scroll-header")
        }
    })

    const [toggle, showMenu] = useState(false)

    return (
        <header className="header sm:w-full sm:fixed md:top-0 md:left-0 z-z-fixed bg-[#CECECE1A] before:opacity-[0.1] sm:top-auto ">
            <Navbar toggle={toggle} showMenu={showMenu} />
        </header>
    )
}

export default Header