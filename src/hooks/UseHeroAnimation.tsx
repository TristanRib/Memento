"use client";

import {useEffect, useRef} from "react";
import GsapAnimationService from "@/lib/animations/GsapAnimationService";

export function useHeroAnimation() {
    const headingTitleRef = useRef<HTMLHeadingElement>(null);
    const frameMaskRef = useRef<HTMLDivElement>(null);
    const maskImageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!maskImageRef.current || !headingTitleRef.current || !frameMaskRef.current) return;

        GsapAnimationService.parallax({
            target: maskImageRef.current,
        });
        GsapAnimationService.textIn({
            target: headingTitleRef.current,
            onComplete: () => {
                GsapAnimationService.maskSizeUp({
                    target: frameMaskRef.current,
                });
            }
        });

        return () => {
            GsapAnimationService.cleanup();
        };
    }, []);

    return {headingTitleRef, frameMaskRef, maskImageRef};
}
