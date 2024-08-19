import Link from "next/link";
import React from "react";
import H3 from "@/components/custom/core/H3";

const LatestPost = ({ frontmatter }) => {
    const preview = frontmatter;
    console.log('preview:', preview);
    return (
        <>
            <H3 className={"mb-4"}>Latest</H3>
            <Link href={`/w/${frontmatter.slug}`} className={"w-full flex flex-col items-start mb-4 rounded-lg"}>
                <h4 className={"text-lg font-medium text-neutral-800 leading-6 mb-2"}>
                    {frontmatter.title}
                </h4>
                <p className={"text-sm md:text-[16px] mb-3 text-neutral-400"}>
                    {frontmatter.created} · {frontmatter.duration} minute read
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