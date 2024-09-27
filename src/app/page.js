'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Link from "next/link";
import { keygen } from "@/lib/utils";
import EmailSignUp from "@/components/custom/EmailSignUp";

import { DM_Serif_Text } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Dot, Loader2 } from "lucide-react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { work } from "@/data/home/work";
import { socials } from "@/data/home/socials";
import { projects } from "@/data/home/projects";
import { useRouter, useSearchParams } from "next/navigation";
import H1 from "@/components/custom/core/H1";
import Divider from "@/components/custom/core/Divider";
import LatestPost from "@/components/custom/LatestPost";
import H3 from "@/components/custom/core/H3";
import PostList from "@/components/custom/PostList";
import Image from "next/image";

const titleFont = DM_Serif_Text({ subsets: ["latin"], weight: ['400'] });

function HomeComponent() {
    const [posts, setPosts] = useState([]);
    const [readMore, setReadMore] = useState(false);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => {
                    setPosts(data);
                    setLoading(false);
                }
            )
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        const scrollTo = searchParams.get('scrollTo');
        if (scrollTo) {
            const section = document.getElementById(scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            } else {
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [searchParams]);

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
            localStorage.setItem('hasVisited', 'true');
            router.push('/');
        }
    }, [router]);

    const latest = posts[0];
    let allPosts = posts.slice(1);

    if (loading) return (
        <div className={"w-full h-full flex justify-center items-center"}>
            <Loader2/>
        </div>
    );

    return (
        <div className="w-screen h-screen snap-y snap-mandatory overflow-y-scroll">
            <section
                id="home"
                className={"w-full h-full flex justify-center snap-always snap-start"}
            >
                <div
                    className={"w-11/12 lg:w-9/12 px-0 h-full text-neutral-600 flex flex-col justify-between items-start"}>
                    <nav className={"w-full h-24 flex justify-between items-center content-center mb-4"}>
                        <Link href={"/"} className={"flex justify-start items-center group hover:text-orange-400"}>
                            <span
                                className={"text-lg text-neutral-600 mt-[0.5px] font-light group-hover:text-orange-400 group-hover:underline"}>
                                marcelo.app
                            </span>
                        </Link>
                    </nav>

                    <div className={"mb-6 flex flex-col w-full"}>
                        <div>
                            <Image src={'/de3-icon.png'} alt={'DALL-E 3 Generated Image'} width={300} height={300}
                             className={'rounded-lg mb-8 shadow-sm'}/>
                        </div>
                        <h1 className={`text-[40px] md:text-5xl leading-10 mb-1 font-medium ${titleFont.className}`}>
                            Marcelo Mantilla
                        </h1>
                        <H3 className={"mb-4"}>
                            Software Engineer
                        </H3>
                        <p className={`text-md mb-2 font-medium`}>
                            Pursuing competence, engineering backends, and building applications. {' '}
                        </p>
                        {readMore && (
                            <p className={`text-md mt-2 mb-2 md:w-6/12 leading-6`}>
                                I studied sound engineering in Berlin, Germany before pivoting to software. My entire
                                music portfolio is available {``}
                                <Link
                                    href={"https://soundcloud.com/pondermars"}
                                    className={"underline text-orange-400"}>here
                                </Link>.
                                <br/>
                                <br/>
                                I've since transitioned to software engineering after a failed business and a coding
                                bootcamp taught me how to code. At the moment I'm consulting, writing, and building {` `}
                                <Link href={"https://openbook.so"} className={"underline text-orange-400"}>openbook.so</Link>.
                                <br/>
                                <br/>
                                If you think I'd be a good fit for your project, feel free to reach out 👋
                            </p>
                        )}
                        <span
                            onClick={() => setReadMore(!readMore)}
                            className={`text-md font-light text-neutral-400 hover:text-orange-400 hover:cursor-pointer hidden sm:block`}>
                            {readMore ? 'Show less' : 'Read more'}
                        </span>

                        <Link href={`/w/${latest.slug}`}>
                            <Button
                                className={"pr-3 pl-4 py-0 mt-4 max-w-64 text-white text-md bg-orange-400 hover:bg-orange-500 button-hover"}
                                variant={""}>
                                <span className={`text-md font-normal py-0 text-hover-l`}>Read latest</span>
                                <ChevronRightIcon className={`ml-2`} height={18} width={18}/>
                            </Button>
                        </Link>
                        <Divider className={"mt-6 mb-8"}/>
                        <div className={"flex flex-col items-start"}>
                            <Link className={"px-0 py-1 text-neutral-500 text-md button-hover flex items-center"}
                                  href={"/?scrollTo=writing"}>
                                <ChevronRightIcon className={`mr-2`} height={18} width={18}/>
                                <span className={`text-md md:text-lg font pr-4 text-hover-l`}>Writing</span>
                            </Link>
                            <Link className={"px-0 py-1 text-neutral-500 text-md button-hover flex items-center"}
                                  href={"/?scrollTo=work"}>
                                <ChevronRightIcon className={`mr-2 icon-hover`} height={18} width={18}/>
                                <span className={`text-md md:text-lg font pr-4 text-hover-l`}>Work</span>
                            </Link>
                            <Link className={"px-0 py-1 text-neutral-500 text-md button-hover flex items-center"}
                                  href={"/?scrollTo=projects"}>
                                <ChevronRightIcon className={`mr-2`} height={18} width={18}/>
                                <span className={`text-md md:text-lg font pr-4 text-hover-l`}>Projects</span>
                            </Link>
                            <Link className={"px-0 py-1 text-neutral-500 text-md button-hover flex items-center"}
                                  href={"/?scrollTo=contact"}>
                                <ChevronRightIcon className={`mr-2`} height={18} width={18}/>
                                <span className={`text-md md:text-lg font pr-4 text-hover-l`}>Contact</span>
                            </Link>
                        </div>
                    </div>
                    <div className={"h-48 md:h-24"}/>
                </div>
            </section>


            <section id="writing" className={"w-full h-full flex justify-center snap-always snap-center"}>
                <div
                    className={"w-11/12 lg:w-9/12 px-0 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                    <Link href={"/writing"}>
                        <H1 className={"hover:text-orange-400"}>
                            Writing
                        </H1>
                    </Link>
                    <p className={"mb-4 md:text-lg text-neutral-400 font-light"}>
                        You can find all my writing {``}
                        <Link
                            href={"/writing"}
                            className={"underline text-orange-400"}>here.
                        </Link>
                    </p>

                    {!loading && <LatestPost frontmatter={latest}/>}
                    <Divider className={"mt-2 mb-5 md:mt-4 md:mb-8"}/>

                    <ul className={"ml-0.5"}>
                        <PostList posts={allPosts}/>
                    </ul>
                    <div className={"h-20 md:h-8"}/>
                </div>
            </section>


            <section id="work" className={"w-full h-full flex justify-center snap-always snap-start"}>
                <div
                    className={"w-11/12 lg:w-9/12 px-0 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                    <H1 className={""}>
                        Work
                    </H1>
                    <p className={"mb-4 md:text-lg text-neutral-400 font-light"}>
                        You can find my full CV {``}
                        <Link
                            href={"https://mindofmarcelo.notion.site/Marcelo-Mantilla-eb508cc3db6646d9a55a61822cf344d1?pvs=4"}
                            className={"underline text-orange-400"}>here.
                        </Link>
                    </p>
                    {work.map((w, index) => {
                        let hidden = index > 2 ? 'hidden' : '';
                        return (
                            <React.Fragment key={w.role}>
                                <div className={`mb-3 md:mb-5 ${hidden} sm:block`}>
                                    <h4 className={"text-md md:text-lg font-medium text-neutral-800 mb-0"}>
                                        {w.role}
                                    </h4>
                                    <p className={"text-[15px] md:text-md mb-2 text-neutral-500"}>
                                        {w.company} · {w.from}
                                    </p>
                                    <p className={"text-[15px] md:text-md"}>
                                        {w.description}
                                    </p>
                                </div>
                                <Divider className={`mb-2 md:mb-4 ${hidden} sm:block`}/>
                            </React.Fragment>
                        );
                    })}
                    <div className={"h-20 md:h-8"}/>
                </div>
            </section>


            <section id="projects" className={"w-full h-full flex justify-center snap-always snap-start"}>
                <div
                    className={"w-11/12 lg:w-9/12 px-0 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                    <H1 className={"mb-6 md:mb-8"}>
                        Projects
                    </H1>
                    {projects.map(p => (
                        <Link key={p.title} href={p.url}
                              className={"w-full flex justify-between content-center items-center"}>
                            <div className={"w-full"}>
                                <h4 className={"text-md md:text-lg font-medium text-neutral-800 mb-1"}>
                                    {p.title}
                                </h4>
                                <p className={"text-[15px] md:text-[17px]"}>
                                    {p.description}
                                </p>
                                <Divider className={"mb-3 mt-3 md:mb-6 md:mt-6"}/>
                            </div>
                            <div className={"min-w-8 min-h-8 md:ml-4 ml-2"}>
                                <ChevronRightIcon className={""} height={28} width={28}/>
                            </div>
                        </Link>
                    ))}
                    <br/>
                    <div className={"h-20 md:h-8"}/>
                </div>
            </section>


            <section id="contact" className={"w-full h-full flex justify-center snap-always snap-start"}>
                <div
                    className={"w-11/12 lg:w-9/12 px-0 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                    <div className={"flex flex-col justify-center items-start"}>
                        <H1 className={""}>
                            Contact
                        </H1>
                        <p className={"mb-5 text-md md:text-lg"}>
                            Thanks for visiting! You can check my socials below, or go back to the {' '}
                            <Link href={"https://marcelo.app"} replace
                                  className={"underline text-orange-400"}>top</Link>.
                        </p>
                        <ul className={"mb-5"}>
                            {socials.map(s => (
                                <li key={keygen()} className={"text-neutral-500 mb-1 flex justify-start"}>
                                    <Dot/>
                                    <Link href={s.url}
                                          className={"underline underline-offset-2 hover:text-orange-500 font-light md:text-lg"}>
                                        {s.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p className={"md:text-lg"}>
                            Sign up for my newsletter to get updates on my latest projects & articles.
                        </p>
                        <EmailSignUp/>
                    </div>
                    <div className={"h-20 md:h-8"}/>
                </div>
            </section>
        </div>
    );
}

export default function Home() {
    return (
        <Suspense fallback={
            <div className={"w-full h-full flex justify-center items-center"}>
                <Loader2/>
            </div>
        }>
            <HomeComponent/>
        </Suspense>
    );
}