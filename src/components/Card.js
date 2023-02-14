import React from 'react'


export const Card = ({num, title, para, img}) => {
  return (
    <div className='flex flex-row items-center sm:mr-5 mb-5'>
      <img src={img} alt="" className='w-[100px] h-[125px] mr-3'/>
      <div className='flex flex-col justify-between'>
        <h1 className='font-Inter font-extrabold text-gray_blue text-[30px]'>{num}</h1>
        <h2 className='font-Inter font-extrabold hover:text-red cursor-pointer'>{title}</h2>
        <p className='font-Inter text-[12px] max-w-[250px]'>{para}</p>
      </div>
    </div>
  )
}
