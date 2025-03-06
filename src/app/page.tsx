"use client"

import styles from './page.module.css';
import {useEffect} from "react";
import {gsapNameIn} from "../lib/animation";

export default function Page() {
    useEffect(() => {
        gsapNameIn();
    }, [])

    return (
        <main>
            <div className={styles.gsap_nameIn}>
                <h1 id="nameIn_target">Tristan.Riboulet</h1>
            </div>

            <section className={styles.hero}>
            </section>
        </main>
    );
}
