'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { MdBedroomChild, MdBedroomParent, MdMeetingRoom, MdTram, MdMyLocation,MdDirectionsCarFilled , MdDirectionsWalk} from "react-icons/md";

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Private Room',
    icon: MdBedroomChild,
    description: 'This is a Private Room',
  },
  {
    label: 'Shared Rooms',
    icon: MdBedroomParent,
    description: 'This apartment offers Shared Rooms',
  },
  {
    label: 'Hall Spot',
    icon: MdMeetingRoom,
    description: 'Properties with Hall Spot'
  },
  {
    label: '<10Min Walk',
    icon: MdDirectionsWalk,
    description: 'This property is near to UNI!'
  },
  {
    label: 'Red Eye',
    icon: MdDirectionsCarFilled,
    description: 'This is property is red eye accessible!'
  },
  {
    label: 'GreenLine',
    icon: MdTram,
    description: 'This property is on an the GreenLine!'
  },
  {
    label: 'Jamaica Plain',
    icon: MdMyLocation,
    description: 'This property is near a lake!'
  },
  {
    label: 'Mission Hill',
    icon: MdMyLocation,
    description: 'This property has skiing activies!'
  },
  {
    label: 'Jvue',
    icon: MdMyLocation,
    description: 'This property is an ancient castle!'
  },
  
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
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
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;

