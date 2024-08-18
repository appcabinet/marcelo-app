import Link from "next/link";
import React from "react";

const LatestPost = ({ frontmatter }) => {
    const created = new Date(frontmatter.created).toLocaleDateString();

    return (
        <>
            <h3 className={"text-lg mb-3 text-neutral-400 font-light"}>Latest</h3>
            <Link href={`/w/${frontmatter.slug}`} className={"w-full flex flex-col items-start mb-5 rounded-lg"}>
                <h4 className={"text-lg font-medium text-neutral-800 leading-6 mb-2"}>
                    {frontmatter.title}
                </h4>
                <p className={"text-sm md:text-[16px] mb-3 text-neutral-400"}>
                    {created} · {frontmatter.duration}
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