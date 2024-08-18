import React from "react";

export default function H3({ children, className }) {
    return (
        <h3 className={`text-lg mb-3 text-neutral-400 font-light ${className}`}>
            {children}
        </h3>
    );
}