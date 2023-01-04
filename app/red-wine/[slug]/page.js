'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import data from "../../data.json"
import Link from 'next/link'

const page = () => {
    const path = usePathname()
    const filterData = data.redWine.filter(item => path.includes(item.slug));

    return (
        <div>
            {filterData?.map(wine => {
                return (
                    <div className="bg-color">
                        <div className='container mx-auto flex flex-col justify-center bg-color p-5 rounded '>
                            <Link href="/red-wine"><div>
                                <h6 className="text-gray-400 font-[Tinos] text-sm underline underline-offset-4 w-full">כל היינות האדומים <span className="text-xs">⬅</span></h6>
                            </div></Link>
                            <div className='bg-white grid items-center grid-cols-1 gap-10 md:gap-0 md:grid-cols-2 p-10 shadow-2xl shadow-[#fda90067] md:w-[100%] mx-auto w-[90%] h-full'>
                                <div className="left mx-auto ">
                                    <img className="h-128" src={wine.image}></img>
                                </div>
                                <div className="right text-center md:text-right flex gap-2 flex-col font-[Tinos]">
                                    <h6 className="text-sm font-[Ktav] text-gray-400 mb-[-20px]">יקבי סגל</h6>
                                    <h4 className="text-5xl leading-[72px] text-gold-black font-bold">{wine.name}</h4>
                                    <h6 className='text-xl  text-[#705329]'>{wine.estPrice} ש״ח</h6>
                                    <h6 className="text-2xl font-[Ktav] text-[#705329]">זן: {wine.kind}</h6>
                                    <h6 className="text-2xl font-[Ktav] text-[#705329]" >סוג: {wine.properties}</h6>
                                    <h6 className="text-2xl font-[Ktav]  text-[#705329]">ניצח בשנת {wine.winnerOfYear}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default page

