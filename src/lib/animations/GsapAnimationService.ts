"use client"

import gsap from "gsap";
import SplitType from "split-type";

interface params {
    target: string;
    onComplete?: gsap.Callback;
}

export default class GsapAnimationService {
    private static gsapContext: gsap.Context = gsap.context(() => {});

    static nameIn({target, onComplete = () => {}}: params): void {
        if (!document.querySelector(".nameIn-char")) {
            new SplitType(target, {
                types: "words,chars",
                wordClass: "nameIn-word",
                charClass: "nameIn-char",
            });
        }

        this.gsapContext.add(() => {
            const timeline = gsap.timeline({
                onComplete: onComplete
            });

            timeline.set('.nameIn-char', {y: 128});
            timeline.set(target, {opacity: 1});
            timeline.to('.nameIn-char', {
                y: 0,
                stagger: 0.05,
                duration: 0.5,
                ease: "power2.out",
            });
        });
    }

    static maskOut({target, onComplete = () => {}}: params): void {
        this.gsapContext.add(() => {
            const timeline = gsap.timeline({
                onComplete: onComplete
            });

            timeline.to(target, {
                maskSize: "100% 100%",
                duration: 2,
                delay: 1,
                ease: "power2.out",
            });
        });
    }

    static heroParallax({target, onComplete = () => {}}: params) {
        const parallaxTarget = document.querySelector(target);

        if (parallaxTarget) {
            console.log("innerWidth", window.innerWidth);
            console.log("innerWidth", window.innerHeight);

            const handleMouseMove = (e: MouseEvent) => {
                const mouseX = e.clientX / window.innerWidth;
                const mouseY = e.clientY / window.innerHeight;

                const movementX = 1 - (mouseX - 0.5) * 30;
                const movementY = 1 - (mouseY - 0.5) * 30;

                gsap.to(target, {
                    xPercent: -5,
                    x: movementX,
                    yPercent: -5,
                    y: movementY,
                    duration: 1,
                    ease: "power2.out"
                });
            };

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }

    static cleanup() {
        this.gsapContext.revert();
    }
}