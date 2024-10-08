import Link from "next/link";
import React from "react";
import H3 from "@/components/custom/core/H3";

const LatestPost = ({ frontmatter }) => {
    return (
        <>
            <H3 className={"mb-2 md:mb-4 text-md md:text-lg"}>Latest</H3>
            <Link href={`/w/${frontmatter.slug}`} className={"w-full flex flex-col items-start mb-4 rounded-lg group"}>
                <h4 className={"text-[17px] md:text-lg font-medium text-neutral-800 leading-6 mb-0.5 md:mb-0.5 group-hover:text-orange-400 group-hover:underline"}>
                    {frontmatter.title}
                </h4>
                <p className={"text-sm md:text-[15px] mb-3 text-neutral-400"}>
                    {frontmatter.created} · {frontmatter.duration}
                </p>

                {frontmatter?.summary && (
                    <p className={"text-md md:text-[16px] text-neutral-600"}>
                        {frontmatter.summary}
                    </p>
                )}
            </Link>
        </>
    );
};

export default LatestPost;