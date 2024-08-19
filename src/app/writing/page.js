import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";
import { DM_Serif_Text } from "next/font/google";
import { getAllPosts, getLatestPost } from "@/lib/mdxUtils";
import LatestPost from "@/components/custom/LatestPost";
import AppSection from "@/components/custom/core/AppSection";
import AppIcon from "@/components/custom/core/AppIcon";
import Divider from "@/components/custom/core/Divider";
import H3 from "@/components/custom/core/H3";
import PostList from "@/components/custom/PostList";
import Contact from "@/components/custom/Contact";
import H1 from "@/components/custom/core/H1";

const titleFont = DM_Serif_Text({ subsets: ["latin"], weight: ["400"] });


export default async function Page() {
    const posts = await getAllPosts();
    const latest = posts[0];

    return (
        <AppSection>
            <nav className={"h-16 md:h-24 flex justify-between items-center content-center"}>
                <Link href={"/writing"} className={"flex justify-start items-center group hover:text-orange-400"}>
                </Link>
                <Link href={"/"} className={"flex justify-start items-center group hover:text-orange-400"}>
                    <span
                        className={"text-lg text-neutral-600 mt-[0.5px] font-light group-hover:text-orange-400 group-hover:underline"}>
                        marcelo.app
                    </span>
                </Link>
            </nav>
            <H1 className={"mb-8"}>
                Writing
            </H1>
            <LatestPost frontmatter={latest}/>
            <Divider className={"mt-8 mb-10 bg-neutral-300"}/>
            <PostList posts={posts}/>
            <Divider className={"mt-12 mb-10 bg-neutral-300"}/>
            <Contact/>
            <div className={"w-full h-32"}/>
        </AppSection>
    );
}