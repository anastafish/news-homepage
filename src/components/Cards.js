import React from 'react'
import { Card } from './Card'
import contorller from '../news-homepage-main/assets/images/image-gaming-growth.jpg'
import laptop from '../news-homepage-main/assets/images/image-top-laptops.jpg'
import retro from '../news-homepage-main/assets/images/image-retro-pcs.jpg'
export const Cards = () => {
  return (
    <div className='flex sm:flex-row flex-col justify-between items-center mt-5 p-5 row-span-8 col-span-4'>
            <Card 
            num="01"
            title="Reviving Retro PCs"
            para="What happens when old PCs are given modern upgrades?"
            img={retro}
            />
            <Card 
            num="02"
            title="  Top 10 Laptops of 2022"
            para="  Our best picks for various needs and budgets."
            img={laptop}
            />
            <Card 
            num="03"
            title="  The Growth of Gaming"
            para="  How the pandemic has sparked fresh opportunities."
            img={contorller}
            />
        </div>
  )
}
