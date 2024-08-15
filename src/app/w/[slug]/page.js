import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { DM_Sans, DM_Serif_Text } from "next/font/google";

import components from "./components";
import { ChevronLeft, Dot } from "lucide-react";
import MarceloAppIcon from "@/components/custom/icon";
import Link from "next/link";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

const dmSerif = DM_Serif_Text({ subsets: ["latin"], weight: ["400"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

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
    const { content, frontmatter } = await getPost(slug);

    return (
        <article
            className={"w-screen h-screen overflow-y-auto scroll-smooth flex justify-center mb-12"}>
            <div className={"w-11/12 sm:w-[625px] text-neutral-700 mb-12"}>
                <nav className={"h-24 flex justify-between items-center content-center mb-4"}>
                    <Link href={"/writing"} className={"flex justify-start items-center group hover:text-orange-400"}>
                        <ChevronLeftIcon className={"mr-1 text-neutral-400"} height={100}
                                         width={23}/>
                        <span
                            className={"text-lg text-neutral-400 mt-[0.5px] font-light group-hover:underline"}>Writing</span>
                    </Link>
                    <Link href={"/"}>
                        <MarceloAppIcon className={"mr-2"}/>
                    </Link>
                </nav>
                <section className={"mb-6"}>
                    <h1 className={`mb-2 text-3xl md:text-4xl text-neutral-600 decoration-orange-400 underline underline-offset-4 ${dmSerif.className}`}>{frontmatter.title}</h1>
                    <h6 className={'text-lg md:text-lg text-neutral-500'}>
                        <span>{frontmatter.created}</span>
                        &nbsp;·&nbsp;
                        <span>{frontmatter.duration}</span>
                    </h6>
                </section>
                <MDXRemote source={content} components={components}/>
            </div>
        </article>
    );
}