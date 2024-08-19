import { DM_Serif_Text } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Button } from "@/components/ui/button";

const dmSerif = DM_Serif_Text({ subsets: ["latin"], weight: ["400"] });
const alegreya = Merriweather({ subsets: ["latin"], weight: ["400"] });

const components = {
    h1: (props) => <h1 {...props} className="text-4xl font-bold my-4 text-neutral-600"/>,
    h2: (props) => <h2 {...props} className="text-3xl font-medium mb-2 mt-7 text-neutral-600"/>,
    h3: (props) => <h3 {...props} className="text-xl font-medium mb-1.5 mt-5 text-neutral-600"/>,
    p: (props) => <p {...props} className={`text-lg mb-5 text-neutral-700`}/>,
    a: (props) => <a {...props} className="text-orange-500 hover:underline"/>,
    ul: (props) => <ul {...props} className="list-disc pl-5 text-lg mb-5 text-neutral-700"/>,
};

export default components;