import React, { useState } from 'react';
import styles from './contactUs.module.css';

export const ContactUs = ({ selectedService }) => {
    const [message, setMessage] = useState(selectedService);

    // Оновлювати текст в textarea, якщо зміниться активна послуга
    React.useEffect(() => {
        setMessage( selectedService);
    }, [selectedService]);

    return (
            <section className={styles.container} id="contact">
                <div className={styles.header}>
                    <h2 className={styles.title}>Contact Us</h2>
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
                            />
                            <p className={styles.error}></p>
                        </div>
                        <div className={styles.field_group}>
                        <textarea
                                className={styles.textarea}
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your Message *"
                                required
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
