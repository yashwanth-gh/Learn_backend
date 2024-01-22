import React from 'react'

const Card = ({imageLink,title,brand,desc,price}) => {
  return (
    <div className='bg-red-100 text-black px-2 py-1 w-full h-full'>
        <div>
            <img src={imageLink} alt={title} className='w-full h-full'/>
        </div>
        <div className='flex justify-between align-middle'>
            <h2 className='text-blue-600 ml-2'>{title}</h2>
            <div> <strong className='text-red-500 mr-3'>${price}</strong></div>
        </div>
        <div>
            <p className='flex justify-start text-gray-400'>
                {desc}
            </p>
        </div>
        <div>
            <p  className='flex justify-start  text-red-400'>
                by : {brand}
            </p>
        </div>
    </div>
  )
}

export default Card