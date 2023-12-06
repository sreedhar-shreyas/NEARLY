'use client';
import Container  from "../../Container";
import { MdBedroomChild, MdBedroomParent, MdMeetingRoom, MdTram, MdMyLocation,MdDirectionsCarFilled , MdDirectionsWalk} from "react-icons/md";
import LPCategoryBox from "./LPCategoryBox";
import { RiPinDistanceLine } from "react-icons/ri";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
export const categories =[
    {
        label:'Home',
        icon:  MdBedroomChild,
   

    },
    {
        label:'About Us',
        icon:  MdBedroomParent,
    },
    {
        label:'How it Works',
        icon:  MdMeetingRoom,

    },
    {
        label:'Premium',

    },
    {
        label:'Page 4',
   
    },
    
   
]

const Categories = () => {
    const params = useSearchParams();
    const category = params ?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';
    if(!isMainPage) {
        return null; 
    }
    return ( 
    <Container>
    <div
    className="
    pt-4
    flex
    flex-row
    items-center
    justify-between
    overflow-x-auto">
        {categories.map((item) => (
            <LPCategoryBox
            key={item. label} 
            label={item.label}
            selected={category === item.label}
                />
                ))}
    </div>
    </Container> );
}
 
export default Categories;