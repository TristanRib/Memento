import gsap from "gsap";
import SplitType from "split-type";

export const gsapNameIn = () => {
    const text = new SplitType('#nameIn_target', {
        lineClass: 'nameIn-line',
        wordClass: 'nameIn-work',
        charClass: 'nameIn-char',
    });

    const timeline = gsap.timeline();

    timeline.set('.nameIn-char', {y: 115}).to('.nameIn-char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.5,
    });
}