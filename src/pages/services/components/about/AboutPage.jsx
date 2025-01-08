import React from 'react';
import styles from './aboutPage.module.css';
import Title from "../../../../components/title/index.js";

const wrapperPage = () => {
    return (
            <section className={styles.wrapper}>
                <Title text={ 'About TORassembly'} />
                <p className={styles.wrapper__text}>
                    Welcome to TORassembly! We specialize in professional furniture assembly, installation, and design of furniture of any complexity in Toronto.
                    Our mission is to provide fast, reliable, and high-quality services tailored to your needs.
                </p>
            </section>
    );
};

export default wrapperPage;


