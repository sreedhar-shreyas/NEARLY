'use client';

import exp from "constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () =>{
const router = useRouter();
return (
    <Image 
    onClick={() => router.push('/')}
    alt="Nearly_Logo"
    className="hidden md:block cursor-pointer"
    height="100"
    width="100"
    src="/images/nearly-logo-w.png"
/>
)

}
export default Logo;