"use client";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../../components/Avatar";
  import { useRouter } from "next/navigation";
import { SafeUser } from "../../types";
import { signOut } from "next-auth/react";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import LoginPage from "../../login/page";
import useRentModel from "../../hooks/useRentModel";
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import Search from "./Search";
import Categories from "../catnavbar/Categories";
import { AuthMechanism } from "mongodb";
interface UserMenuProps {
  currentUser?: SafeUser | null
}


const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => 
{
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModel();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    rentModal.onOpen();
  }, [rentModal]);

  return ( 
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div>
          dfdfdf
        </div>
        <div>
          dfdfdf
        </div>
        <div>
          dfdfdf
        </div>
        <div>
          dfdfdf
        </div>
        <div>
          dfdfdf
        </div>
        <div>
          dfdfdf
        </div>
        <div 
          onClick={onRent}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Airbnb your home
        </div>
        <div 
        onClick={toggleOpen}
        className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div 
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            
              
                <MenuItem 
                  label="My Profile" 
                  onClick={() => router.push('/dashboard/trips')}
                />
                <MenuItem 
                  label="My favorites" 
                  onClick={() => router.push('/dashboard/favorites')}
                />
                <MenuItem 
                  label="My Contacts" 
                  onClick={() => router.push('/dashboard/contacts')}
                />
                <MenuItem 
                  label="My Apartments" 
                  onClick={() => router.push('/dashboard/properties')}
                />
                <MenuItem 
                  label="Add your Apartment" 
                  onClick={rentModal.onOpen}
                />
                <hr />
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
            
            
            
          </div>
        </div>
      )}
    </div>
   );
}

 
export default UserMenu;