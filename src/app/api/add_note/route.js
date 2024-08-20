import { NextResponse } from "next/server";
import { prisma } from "@/util/db";

export async function POST(req) {
    const { description, title, content } = await req.json();

    const response = await prisma.note.create({
        data: {
            title: title,
            description: description,
            publishedOn: new Date().toISOString(),
            content: content,
            slug: title.replace(" ", "_"),
            readingTime: Math.floor(content.length / 210) == 0 ? 1 : Math.floor(content.length / 210)
        },
    });

    return NextResponse.json({
        success: true,
        response: response,
    });
}