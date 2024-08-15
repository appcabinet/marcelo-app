import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), 'src/app/data/posts/');
    const files = fs.readdirSync(postsDirectory);

    return files.map((file) => {
        const slug = file.replace(/\.mdx$/, '');
        return {
            params: { slug },
            fallback: false,
        };
    });
}

async function getPost(slug) {
    const filePath = path.join(process.cwd(), 'src/app/data/posts', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return { content, frontmatter: data };
}

export default async function Page({ params }) {
    const { slug } = params;
    const post = await getPost(slug);
    const metadata = post.frontmatter;

    return (
        <div className={"text-neutral-700"}>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.created}</p>
            <MDXRemote source={post.content}/>
        </div>
    );
}