'use client';

import { SafeUser } from "../../types";
import React from "react";
import Categories from "./Categories";
import Container from "../../components/Container"
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
    <>
    <div className="position-sticky w-full bg-white z-10 shadow-sm">
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
          <UserMenu  />
        </div>
      </Container>
    </div>
 
  </div>

  </>
  );
}


export default Navbar;