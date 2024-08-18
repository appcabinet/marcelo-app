'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Link from "next/link";
import { keygen } from "@/lib/utils";
import EmailSignUp from "@/components/custom/EmailSignUp";

import { DM_Serif_Text } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Dot, Loader2 } from "lucide-react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { work } from "@/app/data/home/work";
import { socials } from "@/app/data/home/socials";
import { projects } from "@/app/data/home/projects";
import { useRouter, useSearchParams } from "next/navigation";
import H1 from "@/components/custom/core/H1";
import Divider from "@/components/custom/core/Divider";
import LatestPost from "@/components/custom/LatestPost";
import H3 from "@/components/custom/core/H3";

const titleFont = DM_Serif_Text({ subsets: ["latin"], weight: ['400'] });

async function getPosts() {
    const response = await fetch('/api/posts');
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return await response.json();
}

async function HomeComponent() {
    const router = useRouter();
    const posts = await getPosts();
    const latest = posts[0];
    let allPosts = posts.slice(1);

    const searchParams = useSearchParams();
    const [readMore, setReadMore] = useState(false);

    useEffect(() => {
        const scrollTo = searchParams.get('scrollTo');
        if (scrollTo) {
            const section = document.getElementById(scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            } else {
                document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
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

    return (
        <div className="w-screen h-screen snap-y snap-mandatory overflow-y-scroll">
            <section
                id="home"
                className={"w-full h-full flex justify-center snap-always snap-start"}
            >
                <div
                    className={"w-11/12 lg:w-9/12 px-0 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                    {/*<img src={"/de3-icon.png"} alt={"Marcelo Mantilla"} className={"w-64 h-64 rounded-lg mb-4"}/>*/}
                    <div className={"mb-6 flex flex-col"}>
                        <h1 className={`text-[40px] md:text-5xl leading-10 mb-1 font-medium ${titleFont.className}`}>
                            Marcelo Mantilla
                        </h1>
                        <H3 className={"mb-4"}>
                            Software Engineer
                        </H3>
                        <p className={`text-md mb-2 font-medium`}>
                            Pursuing competence, engineering backends, and re-thinking reading interfaces. {' '}
                        </p>
                        {readMore && (
                            <p className={`text-md mt-2 mb-2 md:w-6/12 leading-6`}>
                                I studied sound engineering in Berlin, Germany before pivoting to software.
                                I composed music for short films and engineered music for various clients at our
                                recording studio in Berlin.
                                <br/>
                                <br/>
                                I've since pivoted to software after a failed business and a coding bootcamp taught
                                me
                                how to code. I'm now a passionate developer with a love of building applications.
                                Currently, I'm rethinking how we read on the web, freelancing, and cultivating my
                                skills
                                as an engineer.
                            </p>
                        )}
                        <span
                            onClick={() => setReadMore(!readMore)}
                            className={`text-md font-light text-neutral-400 hover:text-orange-400 hover:cursor-pointer hidden sm:block`}>
                            {readMore ? 'Show less' : 'Read more'}
                        </span>

                        <Link href={"/w/god-capitalism"}>
                            <Button
                                className={"pr-3 pl-4 py-0 mt-4 max-w-64 text-white text-md bg-orange-400 hover:bg-orange-500 button-hover"}
                                variant={""}>
                                <span className={`text-md font-normal py-0 text-hover-l`}>Read latest</span>
                                <ChevronRightIcon className={`ml-2`} height={18} width={18}/>
                            </Button>
                        </Link>
                    </div>

                    <Divider className={"mt-1 mb-8"}/>

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
            </section>

            <section id="writing" className={"w-full h-full flex justify-center snap-always snap-start"}>
                <div
                    className={"w-11/12 lg:w-9/12 px-0 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                    <H1 className={"decoration-orange-400 underline underline-offset-4"}>
                        Writing
                    </H1>
                    <LatestPost frontmatter={latest}/>
                    <Divider className={"mt-1 mb-8"}/>

                    <ul className={"ml-0.5"}>
                        {posts.map(p => (
                            <li key={p.id}
                                className={"text-neutral-500 mb-1 md:mb-2 flex justify-start content-center"}>
                                <div className={"w-12 mr-2 hidden md:block"}>
                                    <span className={"text-neutral-400"}>{p.created}</span>
                                </div>
                                <Dot className={"mr-2 md:hidden"}/>
                                <Link href={`/w/${p.slug}`}
                                      className={" hover:text-orange-500"}>
                                    {p.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="work" className={"w-full h-full flex justify-center snap-always snap-start"}>
                <div
                    className={"w-11/12 lg:w-9/12 px-0 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                    <H1 className={"decoration-orange-400 underline underline-offset-4"}>
                        Work
                    </H1>

                    <p className={"mb-4 text-neutral-400 font-light"}>
                        You can find my full CV {``}
                        <Link
                            href={"https://www.notion.so/mindofmarcelo/Marcelo-Mantilla-7f5c1c7838f543c7889ad8303b9a2a22?pvs=4"}
                            className={"underline text-orange-400"}>here.
                        </Link>
                    </p>

                    {work.map((w, index) => {
                        let hidden = index > 2 ? 'hidden' : '';
                        return (
                            <React.Fragment key={w.role}>
                                <div className={`mb-5 ${hidden} sm:block`}>
                                    <h4 className={"text-lg font-medium text-neutral-800 mb-0"}>
                                        {w.role}
                                    </h4>
                                    <p className={"mb-2 text-neutral-500"}>
                                        {w.company} · {w.from}
                                    </p>
                                    <p>
                                        {w.description}
                                    </p>
                                </div>
                                <Divider className={`mb-4 ${hidden} sm:block`}/>
                            </React.Fragment>
                        );
                    })}
                </div>
            </section>

            <section id="projects" className={"w-full h-full flex justify-center snap-always snap-start"}>
                <div
                    className={"w-11/12 lg:w-9/12 px-0 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                    <H1 className={"decoration-orange-400 underline underline-offset-4"}>
                        Projects
                    </H1>

                    {projects.map(p => (
                        <Link key={p.title} href={p.url}
                              className={"w-full flex justify-between content-center items-center mb-3 md:mb-5"}>
                            <div className={"w-full"}>
                                <h4 className={"text-md md:text-lg font-medium text-neutral-800 mb-1"}>
                                    {p.title}
                                </h4>
                                <p>
                                    {p.description}
                                </p>
                                <div className={"w-full h-[0.5px] bg-neutral-400 mt-3 md:mt-6 rounded"}/>
                                <Divider className={"mt-3 md:mt-6 mb-8"}/>
                            </div>
                            <div className={"min-w-8 min-h-8 md:ml-4 mr-8 ml-8"}>
                                <ChevronRightIcon className={""} height={28} width={28}/>
                            </div>
                        </Link>
                    ))}
                    <br/>
                </div>
            </section>

            <section id="contact" className={"w-full h-full flex justify-center snap-always snap-start"}>
                <div
                    className={"w-11/12 lg:w-9/12 px-0 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                    <div className={"flex flex-col justify-center items-start"}>
                        <H1 className={"decoration-orange-400 underline underline-offset-4"}>
                            Contact
                        </H1>
                        <p className={"mb-5 text-md md:text-lg"}>
                            Thanks for visiting! You can check my socials below, or go back to the
                            top {searchParams.get('scrollTo') === 'home' ?
                            (
                                <Link href={"/?scrollTo=root"} className={"text-orange-400 hover:underline"}>here</Link>
                            ) : (
                                <Link href={"/?scrollTo=home"} className={"text-orange-400 hover:underline"}>here</Link>
                            )
                        }.
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