import { Dot } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DM_Mono } from "next/font/google";
import H3 from "@/components/custom/core/H3";

const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "300"] });

export default function PostList({ posts }) {
    return (
        <>
            <H3 className={"text-md md:text-lg"}>All Posts</H3>
            <ul className={"w-full ml-0.5"}>
                {posts.map(p => (
                    <li key={p.id}
                        className={"w-full text-neutral-500 mb-1 md:mb-1.5 flex justify-start content-center items-center"}>
                        <div className={"w-[125px] mr-2 hidden md:block"}>
                            <span className={`text-neutral-400 font-light ${dmMono.className}`}>{p.created}</span>
                        </div>
                        <Dot className={"mr-0 md:mr-2 md:hidden"}/>
                        <Link href={`/w/${p.slug}`}
                              className={"hover:underline hover:text-orange-500 w-full text-md md:text-md"}>
                            {p.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}