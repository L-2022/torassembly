import React from 'react';
import styles from './aboutPage.module.css';

const AboutPage = () => {
    return (
            <section id="about" className={styles.about_page}>
                <h1 className={styles.about_page__title}>About TORassembly</h1>
                <p className={styles.about_page__intro}>
                    Welcome to TORassembly! We specialize in professional furniture assembly, installation, and design of furniture of any complexity in Toronto.
                    Our mission is to provide fast, reliable, and high-quality services tailored to your needs.
                </p>
            </section>
    );
};

export default AboutPage;


