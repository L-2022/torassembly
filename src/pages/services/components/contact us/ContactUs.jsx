import React, { useState } from 'react';
import styles from './contactUs.module.css';

export const ContactUs = ({ selectedService }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: selectedService || '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const smsNumber = '+1';

        const smsMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;

        const smsUrl = `sms:${smsNumber}?body=${encodeURIComponent(smsMessage)}`;

        window.location.href = smsUrl;
    };

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
                        onSubmit={handleSubmit} // Виклик handleSubmit при натисканні "Send Message"
                >
                    <div className={styles.fields}>
                        <div className={styles.field_group}>
                            <input
                                    className={styles.input}
                                    id="name"
                                    type="text"
                                    placeholder="Your Name *"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
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
                                    value={formData.email}
                                    onChange={handleInputChange}
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
                                    value={formData.phone}
                                    onChange={handleInputChange}
                            />
                            <p className={styles.error}></p>
                        </div>
                        <div className={styles.field_group}>
                        <textarea
                                className={styles.textarea}
                                id="message"
                                placeholder="Your Message *"
                                required
                                value={formData.message}
                                onChange={handleInputChange}
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
