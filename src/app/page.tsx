"use client"

import styles from './page.module.scss';
import {useEffect} from "react";
import {gsapNameIn} from "@/lib/animation";

export default function Page() {
    useEffect(() => {
        gsapNameIn();
    }, [])

    return (
        <main>
            {/*<div className={styles.gsap_nameIn}>*/}
            {/*    <h1 id="nameIn-target">Tristan.Riboulet</h1>*/}
            {/*</div>*/}

            <section className={styles.hero}>
                <div className={"frame"}>
                    <div className={"frame_mask"}>
                        <div className={"frame_outer"}>

                        </div>
                        <div className={"frame_content"}>
                            <img src={"/thumb-1920-1359851.jpeg"} alt={""}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
