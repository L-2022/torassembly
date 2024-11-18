import React from 'react';
import styles from './contactUs.module.css';

export const ContactUs = () => {
    return (
            <section className={styles.container} id="contact">
                    <div className={styles.header}>
                        <h2 className={styles.title}>Contact Us</h2>
                        {/*<h3 className={styles.subtitle}>Get free quote</h3>*/}
                    </div>
                    <form
                            className={styles.form}
                            id="contactForm"
                            name="sentMessage"
                            noValidate="novalidate"
                    >
                        <div className={styles.fields}>
                            <div className={styles.field_group}>
                                <input
                                        className={styles.input}
                                        id="name"
                                        type="text"
                                        placeholder="Your Name *"
                                        required
                                        data-validation-required-message="Please enter your name."
                                />
                                <p className={styles.error}></p>
                            </div>
                            <div className={styles.field_group}>
                                <input
                                        className={styles.input}
                                        id="email"
                                        type="email"
                                        placeholder="Your Email *"
                                        required
                                        data-validation-required-message="Please enter your email address."
                                />
                                <p className={styles.error}></p>
                            </div>
                            <div className={styles.field_group}>
                                <input
                                        className={styles.input}
                                        id="phone"
                                        type="tel"
                                        placeholder="Your Phone *"
                                        required
                                        data-validation-required-message="Please enter your phone number."
                                />
                                <p className={styles.error}></p>
                            </div>
                            <div className={styles.field_group}>
                            <textarea
                                    className={styles.textarea}
                                    id="message"
                                    placeholder="Your Message *"
                                    required
                                    data-validation-required-message="Please enter a message."
                            ></textarea>
                                <p className={styles.error}></p>
                            </div>
                        </div>
                        <div className={styles.actions}>
                            <div id="success"></div>
                            <button
                                    className={styles.button}
                                    id="sendMessageButton"
                                    type="submit"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
            </section>
    );
};
