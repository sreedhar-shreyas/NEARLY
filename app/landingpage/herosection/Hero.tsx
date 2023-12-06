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
<Image src="/images/hero_bg_section-top.png" className='z-10 rotate-70 h-full w-full object-scale-down  blur-sm' alt='' height={700} width={1000}/>
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
              HALL-SPOT?
            </div>
            <div className="text-zinc-900 text-2xl font-bold tracking-tight whitespace-nowrap bg-yellow-300 justify-center items-stretch mt-16 px-8 py-6 self-end max-md:mt-10 max-md:px-5">
              HALL-SPOT?
            </div>
          </div>
        </div>
        <div className="text-white text-2xl tracking-[6.48px] whitespace-nowrap mr-11 mt-8 max-md:max-w-full max-md:mr-2.5">
          IN THE OLD FASHIONED WAY?
        </div>
      </div>
    </div>




      <section data-section-id="1" data-share="" data-category="headers-gradient" data-component-id="41589f05_01_awz" className="relative radial-gradient(446.5% 301.92% at 50.09% 3.49%,#052410 13.21%,#75a274 27.92%,#a0caac 34.17%);">
        <div className="relative pt-24">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mb-14 mx-auto text-center">
              <Link className="group relative inline-flex mb-6 items-center rounded-full overflow-hidden shadow-3xl" href="/">
                <div className="animate-showLine absolute bottom-0 left-1/2 transform -translate-x-1/2 p-px mx-auto w-auto bg-gradient-to-r from-transparent via-yellowGreen-500 to-transparent"></div>
                <div className="flex flex-wrap sm:flex-nowrap items-center px-4 py-4 sm:py-2 bg-teal-800 group-hover:bg-opacity-80 rounded-full transition duration-300">
                  <span className="text-sm text-white" >TEXT</span>
                  <div className="mt-1 sm:mt-0 mx-auto sm:mr-0 sm:ml-2 flex items-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b font-bold from-green-500 via-green-500 to-teal-400 transition duration-300" >Read more</span>
                    <span className="ml-3">
                      <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.00004 5H9.33337M9.33337 5L5.33337 1M9.33337 5L5.33337 9" stroke="url(#paint0_linear_3112_14890)" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round"></path>
                        <defs><linearGradient id="paint0_linear_3112_14890" x1="9.46358" y1="-1.5" x2="5.46163" y2="9.11123" gradientUnits="userSpaceOnUse"><stop stop-color="#ACE348"><stop offset="1" stop-color="#25ACA0"></stop></stop></linearGradient></defs>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
              <div className="max-w-lg sm:max-w-xl lg:max-w-none mx-auto">
                <h1 className="font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-config-id="auto-txt-9-1">Find your Roommates Now</h1>
                <p className="max-w-lg mx-auto text-lg text-gray-300 mb-10" data-config-id="auto-txt-10-1">List bla bla</p>
                {/* <Link className="group relative flex xs:inline-flex items-center justify-center px-5 h-12 font-bold text-white bg-gradient-to-br from-cyanGreen-800 to-cyan-800 rounded-lg transition-all duration-300" href="#">
                  <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-teal-600 animate-pulse group-hover:ring-0 transition duration-300"></div>
                  <span className="mr-3" data-config-id="auto-txt-11-1">Request Access</span>
                  <span className="transform group-hover:translate-x-1 transition duration-100">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-4-1">
                      <path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </span>
                </Link> */}
              </div>
            </div>
            {/* <Image className="block mx-auto" src="aurora-assets/headers/header-dark-theme-center.png" alt="" data-config-id="auto-img-2-1"> */}
          </div>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
          <div className="navbar-backdrop fixed inset-0 bg-teal-800 opacity-70"></div>
          <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white overflow-y-auto" data-config-id="toggle-mobile-2" data-config-target=".navbar-menu" data-config-className="hidden">
            <div className="flex mb-auto items-center">
              <Link className="inline-block mr-auto" href="#">
                {/* <Image className="h-10" src="aurora-assets/logos/aurora-logo.svg" alt="" data-config-id="auto-img-3-1"> */}
              </Link>
              <Link className="navbar-close" href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-5-1">
                  <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"></path>
                </svg>
              </Link>
            </div>
            <div className="py-12 mb-auto">
              <ul className="flex-col">
                <li className="mb-6"><Link className="inline-block text-black" href="#" data-config-id="auto-txt-12-1">Product</Link></li>
                <li className="mb-6"><Link className="inline-block text-black" href="#" data-config-id="auto-txt-13-1">Features</Link></li>
                <li className="mb-6"><Link className="inline-block text-black" href="#" data-config-id="auto-txt-14-1">Pricing</Link></li>
                <li><Link className="inline-block text-black" href="#" data-config-id="auto-txt-15-1">Resources</Link></li>
              </ul>
            </div>
            <div><Link className="flex items-center justify-center h-12 mb-4 px-4 text-center text-base text-gray-700 font-semibold border border-gray-200 hover:bg-gray-100 shadow-lg rounded-lg transition duration-200" href="#" data-config-id="auto-txt-16-1">Login</Link><Link className="flex items-center justify-center h-12 px-4 text-center text-base text-white font-semibold bg-gradient-to-b from-cyanGreen-800 to-cyan-800 rounded-lg transition duration-200" href="#" data-config-id="auto-txt-17-1">Get Started</Link></div>
          </nav>
        </div>
      </section>

    </div>
    <div>Change color and CSSS</div>
 
        </>
  )
}
