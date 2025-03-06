"use client"

import {useEffect} from "react";
import {gsapNameIn} from "../lib/animation";

export default function Template({children}: { children: React.ReactNode }) {
    useEffect(() => {
        gsapNameIn();
    }, )

    return <div>{children}</div>
}