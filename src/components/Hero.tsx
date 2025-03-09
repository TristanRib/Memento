"use client";

import styles from "@/components/hero.module.scss";
import {useHeroAnimation} from "@/hooks/UseHeroAnimation";

export default function Hero() {
    const {headingTitleRef, frameMaskRef, maskImageRef} = useHeroAnimation();

    return (
        <section className={styles.heroSection}>
            <div className={styles.headingTitleWrapper}>
                <h1 ref={headingTitleRef} className={styles.headingTitle}>Tristan.Riboulet</h1>
            </div>

            <div ref={frameMaskRef} className={styles.mask}>
                <div className={styles.maskContent}>
                    <img ref={maskImageRef} src="/images/hero_background.jpg" alt="" className={styles.maskImage}/>
                </div>
            </div>
        </section>
    );
}