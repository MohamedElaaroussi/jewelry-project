import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "../../../../db/connection"
import { Client } from "../../../../models/Client"
import { getToken } from "next-auth/jwt"
import { getPaginatedResult } from "@/utils/util"

connectToDatabase()
export const GET = async (req: NextRequest) => {
    // getting the page number and limit from the url
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const search = searchParams.get("search");
    let startDate = searchParams.get("startDate");
    let endDate: string | Date | null = searchParams.get("endDate");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;


    if (endDate) {
        endDate = new Date(endDate);
        endDate.setHours(23, 59, 59, 999);
    }

    try {
        const searchByQuery = { ...(search ? { $or: [{ 'username': { $regex: ".*" + search + ".*", $options: 'i' } }, { 'phone': { $regex: ".*" + search + ".*", $options: 'i' } }] } : {}) }
        const searchBtwDate = { ...(startDate && endDate ? { $and: [{ "createdAt": { $gte: startDate } }, { "createdAt": { $lte: endDate } }] } : {}) }
        const totalClient = await Client.countDocuments({ ...searchByQuery, ...searchBtwDate })

        // calling a method that return start index and end index, 
        // and results object that may contain next and previous page
        const { startIndex, results } = getPaginatedResult(page, limit, totalClient)

        const clients = await Client.find({ ...searchByQuery, ...searchBtwDate }).skip(startIndex).limit(limit).exec();
        results.total = totalClient;
        results.result = clients;
        return NextResponse.json(results, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}

export const POST = async (req: NextRequest) => {
    try {
        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        const client = await req.json()
        // check if email or phone exist already 
        const phoneExistAlready = await Client.findOne({ phone: client?.phone })
        const emailExistAlready = await Client.findOne({ email: client?.email })

        if (phoneExistAlready) {
            return NextResponse.json({ "message": "Phone already exist" }, { status: 400 })
        }
        if (emailExistAlready) {
            return NextResponse.json({ "message": "email already exist" }, { status: 400 })
        }
        // @ts-ignore
        client.createdBy = token.user._id;
        const createClient = new Client(client)
        await createClient.save()
        return NextResponse.json({ message: "Client was created successfully" }, { status: 201 })
    } catch {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}