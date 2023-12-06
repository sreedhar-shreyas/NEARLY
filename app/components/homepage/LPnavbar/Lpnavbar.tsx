'use client';
import Container from "../../Container";
import Logo from "./Logo";
import Categories from "./Categories";
import { useRouter } from "next/navigation";


import { Fragment } from 'react'
import Button from "./Button";


const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]



const Lpnavbar = () => {
    const router = useRouter();
  return ( 
    <div className="fixed w-full bg-white z-10 shadow-sm">
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
          gap-
          md:gap-0
        "
      >
        <Logo />
          <Categories />
      <Button
      onClick={() => router.push('/Login')}
      />
      </div>
    </Container>
  </div>

</div>

  );
}


export default Lpnavbar;


