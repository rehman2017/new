

import Image from 'next/image'
import React from 'react'



export default function Group() {
  return (
    <div className='px-6 md:px-8 lg:px-16 2xl:px-24 text-center my-12 '>
      <h2 className='font-bold  text-3xl'>Browse The Image</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className=' flex justify-between items-center w-[1183px] h-[685px] '>
        <div>

          <Image
            src="/pic7.png"
            alt="pic7"
            width={381}
            height={480}
            className="mr-[80px]"
          />
          <p  className= "font-bold text-2xl py-4">Dining</p>
        </div>
        <div>

          <Image

            src="/pic8.svg"
            alt="pic7"
            width={381}
            height={480}
            className="mr-[80px]"
          />
          <p className= "font-bold text-2xl py-4">Living</p>
        </div>

        <div>

          <Image
            src="/pic4.png"
            alt="pic7"
            width={381}
            height={480}
            className="mr-[80px]"
          />
          <p className= "font-bold text-2xl py-4">Bedroom</p>
        </div>

      </div>

    </div>
  )
}
