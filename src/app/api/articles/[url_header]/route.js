import { NextResponse } from 'next/server';
import articles from '@/app/data/articles';

export async function GET(request, { params }) {
    const { url_header } = params;
    const article = articles.find(a => a.url_header === url_header);

    if (article) {
        return NextResponse.json(article);
    } else {
        return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
}
