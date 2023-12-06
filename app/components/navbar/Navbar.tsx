'use client';

import { SafeUser } from "@/app/types";

import Categories from "./Categories";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Link from "next/link";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  return ( 
    <><div className=" position-sticky w-full bg-slate-950 z-10 shadow-sm ">
        <nav className="relative" data-config-id="toggle-mobile" data-config-target=".navbar-menu" data-config-className="hidden">
          <div className="container mx-auto px-4">
            <div className="relative flex h-24 items-center">
              <Link className="inline-block" href="/">
              <Logo />
              </Link>
              <button className="lg:hidden navbar-burger flex items-center justify-center h-10 w-10 ml-auto border border-teal-900 bg-teal-200 bg-opacity-30 hover:bg-teal-700 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M3 5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M3 12H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M3 19H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center">
                <Link className="inline-block text-gray-300 font-light hover:text-teal-400 mr-10" href="/aboutus">About Us</Link>
                <Link className="inline-block text-gray-300 font-light hover:text-teal-400 mr-10" href="/features">Features</Link>
                <Link className="inline-block text-gray-300  font-light hover:text-teal-400 mr-10" href="/howitworks" >How it Works</Link>
                <Link className="inline-block text-gray-300 font-light hover:text-teal-400 mr-10" href="/pricing">Pricing</Link>
                <Link className="inline-block text-gray-300 font-light hover:text-teal-400" href="/safetytips">Safety Tips</Link>
              </div>
              <div className="hidden lg:block ml-auto">
                <Link className="inline-flex items-center justify-center h-10 mr-4 px-4 text-center text-sm text-white hover:text-teal-400 font-semibold transition duration-200" href="/login" >Login</Link>
                <Link className="group inline-block justify-center p-1 text-center text-sm text-white font-semibold rounded-lg" href="/signup">
                  <div className="inline-flex items-stretch h-10 p-0.5 rounded-lg bg-gradient-to-b from-gray-500 via-gray-700 to-gray-700 hover:to-gray-800">
                    <div className="flex items-center px-4 bg-gray-700 group-hover:bg-opacity-40 rounded-md transition duration-300">
                      <span>Get Started</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
    {/* <div className="position-sticky w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
      <Container>
        <div 
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
        >
          <Logo />
     
          <UserMenu  />
        </div>
      </Container>
    </div>
    
  </div> */}
  </div>
  </>
  );
}


export default Navbar;