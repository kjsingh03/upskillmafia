import React from 'react'

function Card({card,add}) {
    return (
        <div className="flex flex-col gap-2 p-2">
          <div className="w-full h-[12rem]">
            <img
              src={card.image}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="flex items-center justify-between">
            <p>{card.name}</p>
            <p>${card.price}</p>
          </div>
          <button onClick={()=>add(card.id)} className="bg-yellow-700 text-white p-2 rounded-lg hover:bg-yellow-800">
            Add to cart
          </button>
        </div>    
    )
}

export default Card
