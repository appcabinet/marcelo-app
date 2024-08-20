import React from "react";
import { DM_Serif_Text } from "next/font/google";

const dmSerif = DM_Serif_Text({ subsets: ["latin"], weight: ["400"] });

export default function H1({ children, className }) {
    return (
        <h1 className={`text-[40px] md:text-5xl leading-10 mb-3 md:mb-5 font-medium text-neutral-600 ${dmSerif.className} ${className}`}>
            {children}
        </h1>
    );
}