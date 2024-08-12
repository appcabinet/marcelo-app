import Link from "next/link";
import { keygen } from "@/lib/utils";

import { DM_Serif_Text } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Dot, Ellipsis } from "lucide-react";
import { ChevronRightIcon } from "@radix-ui/react-icons";

import { articles } from "@/app/data/articles";
import { work } from "@/app/data/work";
import { socials } from "@/app/data/socials";
import { projects } from "@/app/data/projects";

const nameFont = DM_Serif_Text({ subsets: ["latin"], weight: ['400'] });

async function getArticles() {
    return articles;
}

async function getWork() {
    return work;
}

async function getSocials() {
    return socials;
}

async function getProjects() {
    return projects;

}

export default async function Home() {
    let articles = await getArticles();
    const firstArticle = articles[0];
    articles = articles.slice(1);

    const work = await getWork();
    const socials = await getSocials();
    const projects = await getProjects();

    return (
        <div className="w-screen h-screen snap-y snap-mandatory overflow-y-scroll">
            <div id="home-0" className={"w-full h-full flex justify-center snap-always snap-start"}>
                <div className={"w-[2px] bg-orange-400 h-full fade-stripe-y"}/>
                <div className={"w-11/12 px-5 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                    <div className={"mb-6"}>
                        <h1 className={`text-[40px] leading-10 mb-1 font-medium ${nameFont.className}`}>
                            Marcelo Mantilla
                        </h1>
                        <h3 className={`text-lg mb-4 text-neutral-400 font-light`}>
                            Software Engineer
                        </h3>
                        <p className={`text-md mb-8`}>
                            Pursuing competence, building apps, and re-thinking reading interfaces.
                        </p>
                        <Button
                            className={"pr-3 pl-4 py-0 text-white text-md bg-orange-400 hover:bg-orange-500 button-hover"}
                            variant={""}>
                            <span className={`text-md font-light py-0 text-hover`}>Read latest</span>
                            <ChevronRightIcon className={`ml-2`} height={18} width={18}/>
                        </Button>
                    </div>


                    {/*<div className={"w-full flex justify-center content-center items-center"}>*/}
                    {/*    <Ellipsis className={`text-neutral-200`} size={24}/>*/}
                    {/*</div>*/}

                    <div className={"flex flex-col items-start"}>
                        <Button className={"px-0 py-0 text-neutral-700 text-md button-hover"} variant={"icon"}>
                            <ChevronRightIcon className={`mr-1`} height={18} width={18}/>
                            <span className={`text-md font-light pr-4 text-hover`}>Writing</span>
                        </Button>
                        <Button className={"px-0 py-0 text-neutral-700 text-md button-hover"} variant={"icon"}>
                            <ChevronRightIcon className={`mr-1 icon-hover`} height={18} width={18}/>
                            <span className={`text-md font-light pr-4 text-hover`}>Work</span>
                        </Button>
                        <Button className={"px-0 text-neutral-700 text-md button-hover"} variant={"icon"}>
                            <ChevronRightIcon className={`mr-1`} height={18} width={18}/>
                            <span className={`text-md font-light pr-4 text-hover`}>Projects</span>
                        </Button>
                        <Button className={"px-0 text-neutral-700 text-md button-hover"} variant={"icon"}>
                            <ChevronRightIcon className={`mr-1`} height={18} width={18}/>
                            <span className={`text-md font-light pr-4 text-hover`}>About</span>
                        </Button>
                    </div>


                </div>
            </div>

            <div id="home-1" className={"w-full h-full flex justify-center snap-always snap-start"}>
                <div className={"w-[1px] bg-orange-400 h-full"}/>
                <div className={"w-11/12 px-5 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                    <h1 className={`text-[40px] leading-10 -ml-1 mb-5 font-medium ${nameFont.className}`}>
                        Writing
                    </h1>

                    <h3 className={"text-lg mb-3 text-neutral-400 font-light"}>Latest</h3>

                    <div className={"w-full h-[0.5px] bg-neutral-400 mt-1 mb-6 rounded"}/>

                    <Link href={`/w/${firstArticle.url_header}`}
                          className={"w-full flex flex-col items-start mb-5 rounded-lg"}>
                        <h4 className={"text-lg font-medium text-neutral-800 leading-6 mb-1"}>
                            {firstArticle.title}
                        </h4>
                        <span className={"text-sm mb-2"}>
                            {firstArticle.created_at} · {firstArticle.read_time}
                        </span>
                        <p className={"text-sm"}>
                            {firstArticle.summary}
                        </p>
                    </Link>

                    <div className={"w-full h-[0.5px] bg-neutral-400 mt-1 mb-8 rounded"}/>

                    <ul>
                        {articles.map(a => (
                            <li key={a.id} className={"text-neutral-500 mb-1 flex justify-start"}>
                                <Dot/>
                                <Link href={`/w/${a.url_header}`}
                                      className={"underline underline-offset-2 hover:text-orange-500"}>
                                    {a.title}
                                </Link>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div id="home-2" className={"w-full h-full flex justify-center snap-always snap-start"}>
                <div className={"w-[1px] bg-orange-400 h-full"}/>
                <div className={"w-11/12 px-5 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                    <h1 className={`text-[40px] leading-10 -ml-1 mb-4 font-medium ${nameFont.className}`}>
                        Work
                    </h1>

                    <p className={"mb-4"}>
                        You can find my full CV {``}
                        <a href={"https://www.notion.so/mindofmarcelo/Marcelo-Mantilla-7f5c1c7838f543c7889ad8303b9a2a22?pvs=4"}
                           className={"underline"}>here.
                        </a>
                    </p>

                    {work.map(w => (
                        <div key={w.role} className={"mb-8"}>
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
                    ))}
                </div>
            </div>

            <div id="home-3" className={"w-full h-full flex justify-center snap-always snap-start"}>
                <div className={"w-[1px] bg-orange-400 h-full"}/>
                <div className={"w-11/12 px-5 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                    <h1 className={`text-[40px] leading-10 -ml-1 mb-10 font-medium ${nameFont.className}`}>
                        Projects
                    </h1>

                    {projects.map(p => (
                        <Link key={p.title} href={p.url}
                              className={"w-full flex justify-between content-center items-center mb-5"}>
                            <div className={"w-full"}>
                                <h4 className={"text-lg font-medium text-neutral-800 mb-0"}>
                                    {p.title}
                                </h4>
                                <p>
                                    {p.description}
                                </p>
                                <div className={"w-full h-[0.5px] bg-neutral-400 mt-6 rounded"}/>
                            </div>
                            <div className={"min-w-12 min-h-12"}>
                                <ChevronRightIcon className={"mt-2"} height={28} width={28}/>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div id="home-3" className={"w-full h-full flex justify-center snap-always snap-start"}>
                <div className={"w-[1px] bg-orange-400 h-full"}/>
                <div className={"w-11/12 px-5 h-full text-neutral-600 flex flex-col justify-center items-start"}>
                    <h1 className={`text-[40px] leading-10 -ml-1 mb-4 font-medium ${nameFont.className}`}>
                        That's it.
                    </h1>
                    <p>
                        Thanks for visiting! You can check my socials below.
                    </p>

                    <ul>
                        {socials.map(s => (
                            <li key={keygen()} className={"text-neutral-500 mb-1 flex justify-start"}>
                                <Dot/>
                                <Link href={s.url}
                                      className={"underline underline-offset-2 hover:text-orange-500"}>
                                    {s.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <p>
                        For updates on my writing and new projects, you can subscribe to my newsletter below.
                    </p>
                </div>
            </div>

        </div>
    );
}
