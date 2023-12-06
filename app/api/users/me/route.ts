import { getDataFromToken } from "@/app/actions/getDatafromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/usermodel";
import { connect } from "@/app/dbconfig/dbconfig";

connect();

export async function GET(request:NextRequest){

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password"); //check here to see if it's admin or not. use -isAdmin
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}