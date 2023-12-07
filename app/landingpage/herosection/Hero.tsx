import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (<>


        <div className="bg-slate-950" id="content">
        
    <div className="bg-black flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
      <div className="flex w-full max-w-[1330px] flex-col mt-48 mb-36 items-end max-md:max-w-full max-md:my-10">
     
        <div className="flex-col fill-white overflow-hidden self-stretch relative flex min-h-[681px] w-full mt-7 py-11 items-end max-md:max-w-full">
          <Image src="/images/test_bg.svg" className="absolute h-full w-full object-cover object-center inset-0 object-scale-down p-5" alt="" height={700} width={1000}
          />
<Image src="/images/hero_bg_section-top.png" className='z-10 rotate-70 h-full w-full object-scale-down  blur-xl' alt='' height={700} width={1000}/>
          {/* <Image
          alt=""
          height={70} width={100}
            loading="lazy"
            src="..."
            className="aspect-[1.28] object-contain object-center w-[225px] overflow-hidden max-w-full mr-44 max-md:mr-2.5"
          /> */}
          <div className="relative self-stretch flex flex-col mt-16 mb-11 pl-16 pr-3 items-start max-md:max-w-full max-md:my-10 max-md:pl-5">
            {/* <Image
              height={70} width={100}
            alt=""
              loading="lazy"
              src="..."
              className="aspect-[1.19] object-contain object-center w-[178px] overflow-hidden max-w-full"
            /> */}
            <div className="text-zinc-900 text-2xl font-bold tracking-tight whitespace-nowrap bg-fuchsia-600 justify-center items-stretch mt-16 px-8 py-6 self-end max-md:mt-10 max-md:px-5 rotate-10">
              TOOO MANY WHATSAPP MESSAGES?
            </div>
          </div>
        </div>
        <div className="text-white text-2xl tracking-[6.48px] whitespace-nowrap mr-11 mt-8 max-md:max-w-full max-md:mr-2.5">
          IN THE OLD FASHIONED WAY?
        </div>
      </div>
    </div>






    </div>

 
        </>
  )
}