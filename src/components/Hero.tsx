import {useEffect} from "react";
import GsapAnimationService from "@/lib/animations/GsapAnimationService";
import styles from "@/components/hero.module.scss";

export default function Hero() {
    useEffect(() => {
        GsapAnimationService.heroParallax({
            target: `.${styles.maskImage}`,
        });
        GsapAnimationService.nameIn({
            target: `.${styles.headingTitle}`,
            onComplete: () => {
                GsapAnimationService.maskOut({
                    target: `.${styles.frameMask}`,
                });
            }
        });

        return () => {
            GsapAnimationService.cleanup();
        };
    }, [])

    return (
        <section className={styles.heroSection}>
            <div className={styles.headingTitleWrapper}>
                <h1 className={styles.headingTitle}>Tristan.Riboulet</h1>
            </div>

            <div className={styles.frame}>
                <div className={styles.frameMask}>
                    <div className={styles.maskContent}>
                        <img src="/images/hero_background.jpg" alt="" className={styles.maskImage} />
                    </div>
                </div>
            </div>
        </section>
    );
}