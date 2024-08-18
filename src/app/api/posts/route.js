import { getAllPosts } from "@/lib/mdxUtils";
import { NextResponse } from "next/server";

export async function GET(request) {
    const posts = await getAllPosts();

    if (posts) {
        return NextResponse.json(posts);
    } else {
        return NextResponse.json({ error: 'Cannot retrieve posts' }, { status: 404 });
    }
}