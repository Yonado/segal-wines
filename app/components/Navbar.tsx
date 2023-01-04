'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useThemeSwitcher } from 'react-css-theme-switcher';


const hamburgerMenu = <svg className="fill-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" fill="fillIcon"></path><path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" fill="fill-icon"></path><path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" fill=".fillIcon"></path></g></svg>

export const Navbar = () => {
    const [wineMode, setWineMode] = useState(true)
    const { switcher, themes, currentTheme, status } = useThemeSwitcher();
    const toggleWineMode = () => {
        setWineMode(previous => {
            switcher({ theme: previous ? themes.dark : themes.light });
            return !previous;
        });
    };

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className="font-['Ktav'] font-bold ">
            <div className='hidden items-center md:justify-between md:flex flex-row w-full p-5 px-16 bg-nav text-black z-50 opacity-95 ' >
                <div className="logo w-[70%]">
                    <Link href="/">
                        <div className="text-4xl drop-shadow-sm font-medium transition easeIn nav-text ">יקבי סגל</div>
                    </Link>
                </div>
                <div className="menu w-[25%] flex flex-row gap-8 text-2xl nav-text opacity-100 items-center">
                    <Link className="" href="/red-wine">היין האדום שלנו</Link>
                    <Link href="/white-wine">היין הלבן שלנו</Link>
                    <Link href="/">צור קשר</Link>
                </div>
                <div className="toggle w-[25%] md:flex hidden mr-10 ">
                    <div className="md:flex justify-center items-center gap-4 text-center hidden">
                        <div className="nav-text">איך אתם אוהבים את היין שלכם?</div>
                        <div>
                            <div className="relative items-center cursor-pointer" onClick={toggleWineMode}>
                                <div className="w-10 h-4 bg-gray-300 rounded-full shadow-inner"></div>
                                <div className={wineMode ? "dot absolute w-6 h-6 bg-[#f9e8c0] rounded-full shadow -left-1 -top-1 transition" : "dot absolute w-6 h-6 bg-red-wine rounded-full shadow -left-1 -top-1 transition transform translate-x-[100%]"}></div>
                                <div className="nav-text">{wineMode ? "לבן" : "אדום"}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
            <div className="mobile-nav md:hidden flex flex-row items-center justify-between  p-5 pl-4 pr-8 bg-nav text-black z-50 opacity-95">
                <Link href="/"><div className="logo text-4xl text-color">יקבי סגל</div></Link>
                <div className="cursor-pointer hamburgermenu fill-white w-[60px]" onClick={() => setToggleMenu(!toggleMenu)}>{hamburgerMenu}</div>

            </div>
            <div className={toggleMenu ? "mobile-menu top-0 fixed h-screen w-full mx-auto bg-color z-50  ease-in duration-500 opacity-100" : " hidden   ease-in duration-500 opacity-0"}>
                <div className="flex flex-row-reverse p-5 px-4 w-full">
                    <div className="cursor-pointer hamburgermenu fill-white w-[60px]" onClick={() => setToggleMenu(!toggleMenu)}>{hamburgerMenu}
                    </div>
                </div>
                <div className="flex flex-col mx-auto w-full items-center text-color text-4xl gap-[50px]">
                    <Link onClick={() => setToggleMenu(!toggleMenu)} href="/">דף הבית</Link>
                    <Link onClick={() => setToggleMenu(!toggleMenu)} href="/red-wine">היין האדום שלנו</Link>
                    <Link onClick={() => setToggleMenu(!toggleMenu)} href="/white-wine">היין הלבן שלנו</Link>
                    <Link onClick={() => setToggleMenu(!toggleMenu)} href="/">יינות סגל</Link>
                    <div className="mt-10 flex flex-col justify-self-end justify-center text-xl items-center gap-4 text-center">
                        <div className="text-color">איך אתם אוהבים את היין שלכם?</div>
                        <div className="relative items-center cursor-pointer" onClick={toggleWineMode}>
                            <div className="w-10 h-4 bg-gray-300 rounded-full shadow-inner"></div>
                            <div className={wineMode ? "dot absolute w-7 h-7 bg-[#f9e8c0] rounded-full shadow -left-1 -top-1 transition translate-x-0" : "dot absolute w-7 h-7 bg-red-wine rounded-full shadow -left-1 -top-1 transition transform translate-x-[100%]"}></div>
                            <div className="text-color mt-4">{wineMode ? "לבן" : "אדום"}</div>
                        </div>
                    </div>
                </div>
            </div>

        </nav >
    )
}
