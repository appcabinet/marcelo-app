import {
    Charis_SIL,
    Cormorant_Garamond,
    DM_Serif_Text,
    Jacquarda_Bastarda_9_Charted,
    Palanquin
} from "next/font/google";
import { EB_Garamond } from "next/font/google";
import { Button } from "@/components/ui/button";
import React from "react";

const dmSerif = DM_Serif_Text({ subsets: ["latin"], weight: ["400"] });
const font = Charis_SIL({ subsets: ["latin"], weight: ["400"] });

const components = {
    h1: (props) => <h1 {...props} className="text-4xl font-bold my-4 text-neutral-600 tracking-tight"/>,
    h2: (props) => <h2 {...props} className="text-3xl font-medium mb-2 mt-7 text-neutral-600 tracking-tight"/>,
    h3: (props) => <h3 {...props} className="text-xl font-medium mb-1.5 mt-5 text-neutral-600 tracking-tight"/>,
    p: (props) => <p {...props} className={`text-lg mb-5 text-neutral-700 ${font.className}`}/>,
    a: (props) => <a {...props} className="text-orange-500 hover:underline"/>,
    ul: (props) => <ul {...props} className="list-disc pl-5 text-lg mb-5 text-neutral-700"/>,
    hr: (props) => <div className={`w-full h-[0.5px] mb-5 bg-neutral-400 rounded`}/>,
    ol: (props) => <ol {...props} className="list-decimal pl-5 text-lg mb-5 text-neutral-700"/>,
};

export default components;