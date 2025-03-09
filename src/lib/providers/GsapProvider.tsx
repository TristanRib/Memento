"use client";

import {useEffect} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

export function GsapProvider({children}: { children: React.ReactNode }) {
    useEffect(() => {
        gsap.registerPlugin(useGSAP);
    }, []);

    return <>{children}</>;
}