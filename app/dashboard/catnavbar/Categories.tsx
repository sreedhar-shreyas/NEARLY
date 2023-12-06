'use client';
import Container from "../../components/Container"
import { MdBedroomChild, MdBedroomParent, MdMeetingRoom, MdTram, MdMyLocation,MdDirectionsCarFilled , MdDirectionsWalk} from "react-icons/md";
import CategoryBox from "../../components/CategoryBox";
import { RiPinDistanceLine } from "react-icons/ri";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
export const categories =[
    {
        label:'Private Room',
        icon:  MdBedroomChild,
        description: 'Private Room'

    },
    {
        label:'Shared Room',
        icon:  MdBedroomParent,
        description: 'Shared RoomSpot'
    },
    {
        label:'Hall Spot',
        icon:  MdMeetingRoom,
        description: 'Shared Hall Spot'
    },
    {
        label:'< 10Min',
        icon:  MdDirectionsWalk,
        description: 'Apartments Less than 10min from UNI'
    },
    {
        label:'< 1 Mile',
        icon:  RiPinDistanceLine,
        description: 'Apartments Less than 10min from UNI'
    },
    {
        label:'RedEye',
        icon:  MdDirectionsCarFilled,
        description: 'Apartments under Red Eye Coverage'
    },
    {
        label:'GreenLine',
        icon:  MdTram,
        description: 'Apartments under Green Line E'
    },
    {
        label:'Jamaica Plain',
        icon:  MdMyLocation,
        description: 'Apartments in Jamaica Plain'
    },
    {
        label:'Mission Hill',
        icon:  MdMyLocation,
        description: 'Apartments in Mission Hill'
    }, 
    {
        label:'J Vue',
        icon:  MdMyLocation,
        description: 'Apartments in Jvue'
    },
   
]

const Categories = () => {
    const params = useSearchParams();
    const category = params ?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/dashboard';
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
            <CategoryBox
            key={item. label} 
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
                />
                ))}
    </div>
    </Container> );
}
 
export default Categories;