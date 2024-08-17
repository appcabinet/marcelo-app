import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";
import { DM_Serif_Text } from "next/font/google";
import { getAllPosts, getLatestPost } from "@/lib/mdxUtils";
import LatestPost from "@/components/custom/latest-post";
import AppSection from "@/components/custom/section";

const titleFont = DM_Serif_Text({ subsets: ["latin"], weight: ["400"] });


export default async function Page() {
    const posts = await getAllPosts();
    const latest = posts[0];


    return (
        <AppSection>
            <div className={"text-neutral-400"}>
                <h1 className={`text-[40px] md:text-5xl leading-10 -ml-1 mb-5 font-medium ${titleFont.className}`}>
                    Writing
                </h1>
                <LatestPost frontmatter={latest}/>
            </div>
        </AppSection>
    );
}