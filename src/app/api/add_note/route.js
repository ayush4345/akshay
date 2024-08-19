import { NextResponse } from "next/server";
import { prisma } from "@/util/db";

export async function POST(req) {
    const { description, title, content } = await req.json();

    const response = await prisma.note.create({
        data: {
            title: title,
            description: description,
            publishedOn: new Date().toLocaleDateString(),
            content: content,
            slug: title.replace(" ", "_")
        },
    });

    return NextResponse.json({
        success: true,
        response: response,
    });
}