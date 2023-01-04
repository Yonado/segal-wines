import { Wire_One } from '@next/font/google'
import React from 'react'
import data from '../data.json'
import Products from './Products'

const white_wine = () => {
    const [id, name, image, properties, estPrice, winnerOfYear, kind] = data.whiteWine;
    return (
        <div>
            <div className="bg-color">
                <div className='image-strip h-[300px] mt-[-140px] bg-color w-full '>
                    <img className="h-full w-full " src="galil_elyon.jpeg" alt="" />
                </div>
                <div className="bg-color">
                    <div className='mt-24 flex flex-col center text-color items-center p-5 gap-4'>
                        <h2 className='text-center text-6xl md:text-8xl'>יינות לבנים</h2>
                        <p className="font-[Tinos] text-2xl max-w-[50%] mx-auto text-center">אנחנו נרגשים להציג את מיטב היינות הלבנים שלנו. כדי להנות מיין אדום במלואו, אתם מוזמנים לקרוא כאן</p>
                    </div>
                    <div className="bg-color w-full mx-auto drop-shadow-2xl rounded">
                        <Products />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default white_wine