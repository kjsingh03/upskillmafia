import React from 'react'

function Card({card}) {
    return (
        <div className=" bg-gradient-to-tr from-red-600 via-blue-600 to-pink-600 p-0.5 rounded-sm">
            <div className="flex flex-col gap-3 items-center bg-black p-3">
                <img src={card.image} className='w-[6rem] h-[6rem] object-cover' alt="" />
                <p className="">{card.name}</p>
                <p className="">{card.desc}</p>
            </div>
        </div>
    )
}

export default Card
