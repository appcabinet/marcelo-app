import path from "path";
import fs from "fs";
import Link from "next/link";
import { getPost } from "@/lib/mdxUtils";
import { MDXRemote } from "next-mdx-remote/rsc";
import { DM_Sans, DM_Serif_Text } from "next/font/google";

import components from "./components";
import MarceloAppIcon from "@/components/custom/icon";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import AppSection from "@/components/custom/section";

const dmSerif = DM_Serif_Text({ subsets: ["latin"], weight: ["400"] });

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


export default async function Page({ params }) {
    const { slug } = params;
    const { content, frontmatter } = await getPost(slug);

    return (
        <AppSection>
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
            <div className={"mb-6"}>
                <h1 className={`mb-2 text-3xl md:text-4xl text-neutral-600 decoration-orange-400 underline underline-offset-4 ${dmSerif.className}`}>{frontmatter.title}</h1>
                <h6 className={'text-lg md:text-lg text-neutral-500'}>
                    <span>{frontmatter.created}</span>
                    &nbsp;·&nbsp;
                    <span>{frontmatter.duration}</span>
                </h6>
            </div>
            <MDXRemote source={content} components={components}/>
        </AppSection>
    );
}