async function getArticle(url_header) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${url_header}`);
    if (!res.ok) {
        throw new Error('Failed to fetch article');
    }
    return res.json();
}

export default async function ArticlePage({ params }) {
    const { url_header } = params;
    const article = await getArticle(url_header);

    return (
        <div>
            <h1>{article.title}</h1>
            BONGONANZA
        </div>
    );
}