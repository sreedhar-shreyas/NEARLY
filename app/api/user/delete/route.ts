import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  email?: string;
}

export async function DELETE(
  request: Request, 
  { params }: { params: IParams }
) {
  

  const { email } = params;

  if (!email || typeof email !== 'string') {
    throw new Error('Invalid Email ID');
  }

  const listing = await prisma.user.delete({
    where: {
      id: email,
    }
  });

  return NextResponse.json(listing);
}
