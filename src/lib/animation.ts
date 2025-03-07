"use client"

import gsap from "gsap";
import SplitType from "split-type";

export const gsapNameIn = (targetId: string = '#nameIn-target') => {
    const text = new SplitType(targetId, {
        types: 'words,chars',
        wordClass: 'nameIn-word',
        charClass: 'nameIn-char',
    });

    const timeline = gsap.timeline();

    timeline.set('.nameIn-char', {y: 128});
    timeline.set(targetId, {opacity: 1});
    timeline.to('.nameIn-char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.5,
    });
}