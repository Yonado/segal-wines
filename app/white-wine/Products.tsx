import Link from 'next/link'
import React from 'react'
import data from '../data.json'
const Products = () => {
    const [id, name, image, estPrice, kind, properties, winnerOfYear] = data.whiteWine
    return (
        <div>
            <div className="h-full my-5 grid gap-8 md:px-0 px-12 grid-cols-1 md:grid-cols-3 mx-auto bg-color  container shadow-white shadow-3xl pt-5">
                {data.whiteWine.map(wine => {
                    return (
                        <Link key={wine.id} href={`/white-wine/${wine.slug}`}>
                            <div className="py-5 h-[614px] flex flex-col justify-center items-center bg-white gap-2 drop-shadow-2xl shadow-white my-5">
                                <div className="h-[450px] flex items-center justify-center">
                                    <img className="w-36 max-h-[360px]" src={wine.image} alt="" />
                                </div>
                                <h4 className="text-2xl font-bold text-center md:w-full w-[95%] mb-6 md:mb-0">{wine.name}</h4>
                                <h6 className='text-xl '>{wine.estPrice} ש״ח</h6>
                                <h6 className="text-lg">זן: {wine.kind}</h6>
                                <h6 className="text-lg" >סוג: {wine.properties}</h6>
                                <h6 className="text-lg font-[Tinos] text-gray-700">ניצח בשנת {wine.winnerOfYear}</h6>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
export default Products


