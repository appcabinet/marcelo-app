import { Dot } from "lucide-react";
import Link from "next/link";
import React from "react";


export default function Posts({ posts }) {
    return (
        <ul className={"w-full ml-0.5"}>
            {posts.map(p => (
                <li key={p.id}
                    className={"w-full text-neutral-500 mb-1 md:mb-2 flex justify-start content-center"}>
                    <div className={"w-[120px] mr-2 hidden md:block"}>
                        <span className={"text-neutral-400"}>{p.created}</span>
                    </div>
                    <Dot className={"mr-2 md:hidden"}/>
                    <Link href={`/w/${p.slug}`}
                          className={" hover:text-orange-500 w-full"}>
                        {p.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}