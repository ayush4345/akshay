import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/util/db";

export async function POST(req) {

    const { slug } = await req.json()

    const response = await prisma.note.findMany({ where: { slug: slug } })

    if (response) {
        return NextResponse.json({
            success: true,
            response: response,
        });
    } else {
        return NextResponse.json({
            success: false,
            response: [],
        });
    }

}