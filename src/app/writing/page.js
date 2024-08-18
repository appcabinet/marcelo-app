import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";
import { DM_Serif_Text } from "next/font/google";
import { getAllPosts, getLatestPost } from "@/lib/mdxUtils";
import LatestPost from "@/components/custom/latest-post";
import AppSection from "@/components/custom/section";
import MarceloAppIcon from "@/components/custom/icon";
import Divider from "@/components/custom/core/Divider";
import H3 from "@/components/custom/core/H3";
import Posts from "@/components/custom/posts";

const titleFont = DM_Serif_Text({ subsets: ["latin"], weight: ["400"] });


export default async function Page() {
    const posts = await getAllPosts();
    const latest = posts[0];

    return (
        <AppSection>
            <nav className={"h-24 flex justify-between items-center content-center mb-4"}>
                <Link href={"/writing"} className={"flex justify-start items-center group hover:text-orange-400"}>
                </Link>
                <Link href={"/writing"} className={"flex justify-start items-center group hover:text-orange-400"}>
                    <span className={"text-lg text-neutral-400 mt-[0.5px] font-light group-hover:underline"}>
                        marcelo.app
                    </span>
                    <MarceloAppIcon className={"ml-4"}/>
                </Link>
            </nav>
            <h1 className={`text-[40px] md:text-5xl leading-10 -ml-1 mb-5 font-medium text-neutral-600 ${titleFont.className}`}>
                Writing
            </h1>
            <LatestPost frontmatter={latest}/>
            <Divider className={"mt-8 mb-8"}/>
            <H3>All Posts</H3>
            <Posts posts={posts}/>
        </AppSection>
    );
}