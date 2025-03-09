import gsap from "gsap";
import SplitType from "split-type";
import styles from "@/components/hero.module.scss";

interface Params {
    target: HTMLElement | null;
    onComplete?: gsap.Callback;
}

export default class GsapAnimationService {
    private static gsapContext: gsap.Context = gsap.context(() => {
    });

    static textIn({
                      target, onComplete = () => {
        }
                  }: Params): void {
        if (!target) return;

        if (!target.querySelector(".nameIn-char")) {
            new SplitType(target, {
                types: "words,chars",
                wordClass: "nameIn-word",
                charClass: "nameIn-char",
            });
        }

        this.gsapContext.add(() => {
            const timeline = gsap.timeline({onComplete});

            timeline.set(".nameIn-char", {y: 128});
            timeline.set(target, {opacity: 1});
            timeline.to(".nameIn-char", {
                y: 0,
                stagger: 0.05,
                duration: 0.5,
                ease: "power2.out",
            });
        });
    }

    static maskSizeUp({
                          target, onComplete = () => {
        }
                      }: Params): void {
        if (!target) return;

        this.gsapContext.add(() => {
            const timeline = gsap.timeline({onComplete});

            timeline.to(target, {
                maskSize: "100% 100%",
                duration: 2,
                delay: 1,
                ease: "power2.out",
            });
        });
    }

    static parallax({target}: Params) {
        if (!target) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = target.getBoundingClientRect();
            const targetCenterX = rect.width / 2;
            const targetCenterY = rect.height / 2;

            const mouseToTargetCenterX = e.clientX - rect.left - targetCenterX;
            const mouseToTargetCenterY = e.clientY - rect.top - targetCenterY;

            const parallaxPower = 30;

            const movementX = 1 - (mouseToTargetCenterX / targetCenterX) * parallaxPower;
            const movementY = 1 - (mouseToTargetCenterY / targetCenterY) * parallaxPower;

            gsap.to(target, {
                x: movementX,
                y: movementY,
                duration: 0.5,
                ease: "power2.out",
            });
        };

        target.addEventListener("pointermove", handleMouseMove);

        return () => {
            target.removeEventListener("pointermove", handleMouseMove);
        };
    }

    static cleanup() {
        this.gsapContext.revert();
    }
}
