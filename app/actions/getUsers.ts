import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

export default async function getUsers() {

try{
    const findUser = await prisma.user.findMany({
      select:{
        email:true,
        name:true
      }
    }
    )

 
    return findUser;
  } catch (error: any) {
    throw new Error(error);
  }
}