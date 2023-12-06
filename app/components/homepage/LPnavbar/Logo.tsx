'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="/images/Nearly-Logo.jpg" 
      height="100" 
      width="100" 
      alt="Nearly-Logo" 
    />
   );
}
 
export default Logo;
