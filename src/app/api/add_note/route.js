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
            slug: title.replace(/\s+/g, "_").toLowerCase(),
            readingTime: Math.max(1, Math.floor(content.split(/\s+/).length / 200))
        },
    });

    return NextResponse.json({
        success: true,
        response: response,
    });
}