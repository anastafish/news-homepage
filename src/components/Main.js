import React from 'react'
import web from '../news-homepage-main/assets/images/image-web-3-desktop.jpg'


const New = ({title, para, br}) => (
    <div className='flex flex-col w-full mt-2'>
        <h1 className='text-white font-Inter font-extrabold
         hover:text-orange cursor-pointer'>{title}</h1>
        <p className='text-white font-Inter font-normal text-[12px]'>{para}</p>
        {br && <hr className='border-white opacity-50 mt-2'/>}
    </div>
)

export const Main = () => {
  return (
    <div className='sm:grid flex flex-col col-span-3 row-span-8 grid-cols-4 grid-rows-2 mt-5'>
       <div className='col-span-3 row-span-2 flex flex-col'>
        <img src={web} alt="" />
        <div className='flex sm:flex-row flex-col justify-between items-center mt-5'>
            <h1 className='sm:text-left text-center text-[35px] font-Inter font-extrabold'>The Bright Future <br /> of Web 3.0?</h1>
            <div className='flex flex-col sm:items-start items-center'>
                <p className='text-[15px] max-w-[330px] font-Inter font-bold'>We dive into the next evolution of
                    the web that claims to put the power
                    of the platforms back into the hands
                    of the people. But is it really fulfilling its promise?
                    </p>
                    <button className='bg-red p-2 mt-2 text-white font-Inter w-[50%] hover:bg-dark_blue'>Read More</button>
            </div>
        </div>
       </div>

       <div className='sm:ml-5 sm:mt-0 mt-5 bg-dark_blue row-span-2
        flex flex-col items-start justify-start p-4 h-fit'>
            <h1 className='text-left text-[35px] font-Inter font-extrabold text-orange'>New</h1>
            <New title="Hydrogen VS Electric Cars"
             para="Will hydrogen-fueled cars ever catch up to EVs?"
             br={true}
             />
            <New title="The Downsides of AI Artistry"
             para="What are the possible adverse effects of on-demand AI image generation?"
             br={true}
             />
            <New title="Is VC Funding Drying Up?"
             para="Private funding by VC firms is down 50% YOY. We take a look at what that means."
             br={false}
             />
       </div>
    </div>
  )
}