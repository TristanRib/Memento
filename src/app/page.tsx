"use client"

import styles from './page.module.css';

export default function Page() {
    return (
        <main>
            <div className={styles.gsap_nameIn}>
                <h1 id="nameIn_target" className={'zeroOpacity'}>Tristan.Riboulet</h1>
            </div>

            <section className={styles.hero}>
            </section>
        </main>
    );
}
