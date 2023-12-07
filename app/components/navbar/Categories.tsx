'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Private Room',
    icon: TbBeach,
    description: 'This is a Private Room',
  },
  {
    label: 'Shared Rooms',
    icon: GiWindmill,
    description: 'This apartment offers Shared Rooms',
  },
  {
    label: 'Hall Spot',
    icon: MdOutlineVilla,
    description: 'Properties with Hall Spot'
  },
  {
    label: '<10Min Walk',
    icon: TbMountain,
    description: 'This property is near to UNI!'
  },
  {
    label: 'Red Eye',
    icon: TbPool,
    description: 'This is property is red eye accessible!'
  },
  {
    label: 'GreenLine',
    icon: GiIsland,
    description: 'This property is on an the GreenLine!'
  },
  {
    label: 'Jamaica Plain',
    icon: GiBoatFishing,
    description: 'This property is near a lake!'
  },
  {
    label: 'Mission Hill',
    icon: FaSkiing,
    description: 'This property has skiing activies!'
  },
  {
    label: 'Jvue',
    icon: GiCastle,
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