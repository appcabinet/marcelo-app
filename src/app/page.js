'use client';

import Link from "next/link";
import { keygen } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import EmailSignUp from "@/components/actions/EmailSignUp";

import { DM_Serif_Text } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Dot, Ellipsis } from "lucide-react";
import { ChevronRightIcon } from "@radix-ui/react-icons";

import { articles } from "@/app/data/articles";
import { work } from "@/app/data/work";
import { socials } from "@/app/data/socials";
import { projects } from "@/app/data/projects";
import { Suspense, useEffect, useRef, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const titleFont = DM_Serif_Text({ subsets: ["latin"], weight: ['400'] });

export default function Home() {
    const router = useRouter();
    const firstArticle = articles[0];
    let allArticles = articles.slice(1);

    const searchParams = useSearchParams();
    const [readMore, setReadMore] = useState(false);

    useEffect(() => {
        const scrollTo = searchParams.get('scrollTo');
        if (scrollTo) {
            const section = document.getElementById(scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [searchParams]);

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
            localStorage.setItem('hasVisited', 'true');
            router.push('/?scrollTo=home');
        }
    }, [router]);

    return (
        <Suspense>

            <div className="w-screen h-screen snap-y snap-mandatory overflow-y-scroll">
                <section
                    id="home"
                    className={"w-full h-full flex justify-center snap-always snap-start"}
                >
                    <div
                        className={"w-11/12 px-2 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                        <div className={"mb-6 flex flex-col"}>
                            <h1 className={`text-[40px] md:text-5xl leading-10 mb-1 font-medium ${titleFont.className}`}>
                                Marcelo Mantilla
                            </h1>
                            <h3 className={`text-lg mb-4 text-neutral-400 font-light`}>
                                Software Engineer
                            </h3>
                            <p className={`text-md mb-2 font-medium`}>
                                Pursuing competence, engineering backends, and re-thinking reading interfaces. {' '}
                            </p>
                            {readMore && (
                                <p className={`text-md mt-2 mb-4 md:w-6/12 leading-6`}>
                                    I studied sound engineering in Berlin, Germany before I pivoted to software.
                                    I composed music for short films and engineered music for various clients at our
                                    recording studio in Berlin. Also dabbled in some creativity coaching :)
                                    <br/>
                                    <br/>
                                    I've since pivoted to software after a failed business and a coding bootcamp taught me
                                    how to code. I'm now a passionate developer with a love of building applications.
                                    Currently, I'm rethinking how we read on the web, freelancing, and cultivating my skills
                                    as an engineer.
                                    <br/>
                                    <br/>
                                    If anything here sounds interesting, feel free to reach me at
                                    marcelo[at]appcabinet[dot]com.
                                </p>
                            )}
                            <span
                                onClick={() => setReadMore(!readMore)}
                                className={`text-md mb-4 font-light text-neutral-400 hover:text-orange-400 hover:cursor-pointer`}>
                            {readMore ? 'Read less' : 'Read more'}
                        </span>

                            <Button
                                className={"pr-3 pl-4 py-0 max-w-64 text-white text-md bg-orange-400 hover:bg-orange-500 button-hover"}
                                variant={""}>
                                <span className={`text-md font-normal py-0 text-hover`}>Reading re-imagined</span>
                                <ChevronRightIcon className={`ml-2`} height={18} width={18}/>
                            </Button>
                        </div>

                        <div className={"w-full h-[0.5px] bg-neutral-400 mt-1 mb-8 rounded"}/>

                        <div className={"flex flex-col items-start"}>
                            <Link className={"px-0 py-1 text-neutral-500 text-md button-hover flex items-center"}
                                  href={"/?scrollTo=writing"}>
                                <ChevronRightIcon className={`mr-2`} height={18} width={18}/>
                                <span className={`text-md md:text-lg font pr-4 text-hover`}>Writing</span>
                            </Link>
                            <Link className={"px-0 py-1 text-neutral-500 text-md button-hover flex items-center"}
                                  href={"/?scrollTo=work"}>
                                <ChevronRightIcon className={`mr-2 icon-hover`} height={18} width={18}/>
                                <span className={`text-md md:text-lg font pr-4 text-hover`}>Work</span>
                            </Link>
                            <Link className={"px-0 py-1 text-neutral-500 text-md button-hover flex items-center"}
                                  href={"/?scrollTo=projects"}>
                                <ChevronRightIcon className={`mr-2`} height={18} width={18}/>
                                <span className={`text-md md:text-lg font pr-4 text-hover`}>Projects</span>
                            </Link>
                            <Link className={"px-0 py-1 text-neutral-500 text-md button-hover flex items-center"}
                                  href={"/?scrollTo=contact"}>
                                <ChevronRightIcon className={`mr-2`} height={18} width={18}/>
                                <span className={`text-md md:text-lg font pr-4 text-hover`}>Contact</span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section id="writing" className={"w-full h-full flex justify-center snap-always snap-start"}>
                    <div className={"w-11/12 px-2 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                        <h1 className={`text-[40px] md:text-5xl leading-10 -ml-1 mb-5 font-medium ${titleFont.className}`}>
                            Writing
                        </h1>

                        <h3 className={"text-lg mb-3 text-neutral-400 font-light"}>Latest</h3>

                        <Link href={`/w/${firstArticle.url_header}`}
                              className={"w-full flex flex-col items-start mb-5 rounded-lg"}>
                            <h4 className={"text-lg font-medium text-neutral-800 leading-6 mb-1"}>
                                {firstArticle.title}
                            </h4>
                            <p className={"text-sm md:text-[16px] mb-3"}>
                                {firstArticle.created_at} · {firstArticle.read_time}
                            </p>
                            <p className={"text-md md:text-[16px]"}>
                                {firstArticle.summary}
                            </p>
                        </Link>

                        <div className={"w-full h-[0.5px] bg-neutral-400 mt-1 mb-8 rounded"}/>

                        <ul className={"ml-0.5"}>
                            {allArticles.map(a => (
                                <li key={a.id}
                                    className={"text-neutral-500 mb-1 md:mb-2 flex justify-start content-center"}>
                                    <div className={"w-12 mr-2 hidden md:block"}>
                                        <span className={"text-neutral-400"}>{a.read_time}</span>
                                    </div>
                                    <Dot className={"mr-2 md:hidden"}/>
                                    <Link href={`/w/${a.url_header}`}
                                          className={"underline underline-offset-2 hover:text-orange-500"}>
                                        {a.title}
                                    </Link>

                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section id="work" className={"w-full h-full flex justify-center snap-always snap-start"}>
                    <div className={"w-11/12 px-2 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                        <h1 className={`text-[40px] md:text-5xl leading-10 -ml-1 mb-4 font-medium ${titleFont.className}`}>
                            Work
                        </h1>

                        <p className={"mb-4 text-neutral-400 font-light"}>
                            You can find my full CV {``}
                            <a href={"https://www.notion.so/mindofmarcelo/Marcelo-Mantilla-7f5c1c7838f543c7889ad8303b9a2a22?pvs=4"}
                               className={"underline"}>here.
                            </a>
                        </p>

                        {work.map(w => (
                            <>
                                <div key={w.role} className={"mb-6"}>
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
                                <div className={"w-full h-[0.5px] bg-neutral-400 mt-0 mb-6 rounded"}/>
                            </>
                        ))}
                    </div>
                </section>

                <section id="projects" className={"w-full h-full flex justify-center snap-always snap-start"}>
                    <div className={"w-11/12 px-2 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                        <h1 className={`text-[40px] md:text-5xl leading-10 mb-10 font-medium ${titleFont.className}`}>
                            Projects
                        </h1>

                        {projects.map(p => (
                            <Link key={p.title} href={p.url}
                                  className={"w-full flex justify-between content-center items-center mb-4 md:mb-5"}>
                                <div className={"w-full"}>
                                    <h4 className={"text-md md:text-lg font-medium text-neutral-800 mb-1"}>
                                        {p.title}
                                    </h4>
                                    <p>
                                        {p.description}
                                    </p>
                                    <div className={"w-full h-[0.5px] bg-neutral-400 mt-4 md:mt-6 rounded"}/>
                                </div>
                                <div className={"min-w-8 min-h-8"}>
                                    <ChevronRightIcon className={"mt-2"} height={28} width={28}/>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section id="contact" className={"w-full h-full flex justify-center snap-always snap-start"}>
                    <div className={"w-11/12 px-5 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                        <h1 className={`text-[40px] md:text-5xl leading-10 -ml-1 mb-4 font-medium ${titleFont.className}`}>
                            Contact
                        </h1>
                        <p className={"mb-4 text-md md:text-lg"}>
                            Thanks for visiting! You can check my socials below, or go back to the
                            top <Link href={"/?scrollTo=home"} className={"text-orange-400 underline"}>here</Link>.
                        </p>

                        <ul className={"mb-4"}>
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
                            You can receive my updates here. I'd love to have you on board!
                        </p>

                        <EmailSignUp/>
                    </div>
                </section>

            </div>
        </Suspense>
    );
}
