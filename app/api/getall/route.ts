import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export async function GET() {
    const users = await prisma.user.findMany({
        select:{
            email:true,
            name:true
          }
        }
    );

    return NextResponse.json(users);
}
  