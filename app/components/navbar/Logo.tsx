'use client';

import exp from "constants";
import Image from "next/image";
import imges from "/next.svg"
import { useRouter } from "next/navigation";

const Logo = () =>{
const router = useRouter();
return (
    <Image 
    src={"/images/placeholder.jpg"} 
    // src="./"
    alt="Nearly_jLogo"
    className="hidden md:block cursor-pointer"
    height="100"
    width="100"
    
/>
)

}
export default Logo;
