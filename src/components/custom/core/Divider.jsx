import React from "react";

export default function Divider({ className }) {
    return (
        <div className={`w-full h-[0.5px] bg-neutral-400 rounded ${className}`}/>
    );
}