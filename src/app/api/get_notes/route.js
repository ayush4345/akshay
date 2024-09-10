import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/util/db";

export const dynamic = 'force-dynamic';

export async function GET(req) {

    const response = await prisma.note.findMany()

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