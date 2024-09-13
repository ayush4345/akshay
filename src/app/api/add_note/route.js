import { NextResponse } from "next/server";
import { prisma } from "@/util/db";

export async function POST(req) {
    const { description, title, content, slug, password } = await req.json();

    // Check password
    if (password !== process.env.DASHBOARD_PASSWORD) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const response = await prisma.note.create({
        data: {
            title: title,
            description: description,
            publishedOn: new Date().toISOString(),
            content: content,
            slug: slug.toLowerCase(),
            readingTime: Math.max(1, Math.floor(content.split(/\s+/).length / 200))
        },
    });

    return NextResponse.json({
        success: true,
        response: response,
    });
}