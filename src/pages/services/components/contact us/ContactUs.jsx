import React, { useState, useEffect } from 'react';
import styles from './contactUs.module.css';

export const ContactUs = ({ selectedService }) => {
    const [message, setMessage] = useState(selectedService);

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

        // Номер телефону для SMS
        const smsNumber = '000000001';

        // Формування повідомлення для SMS
        const smsMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;

        // Створення URL для схеми `sms:`
        const smsUrl = `sms:${smsNumber}?body=${encodeURIComponent(smsMessage)}`;

        // Відкриття SMS-додатка
        window.location.href = smsUrl;
    };


    useEffect(() => {
        setMessage(selectedService);
        setFormData((prevData) => ({
            ...prevData,
            message: selectedService || '',
        }));
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
                                    onChange={handleInputChange}
                            />
                            <p className={styles.error}></p>
                        </div>
                        <div className={styles.field_group}>
                        <textarea
                                className={styles.textarea}
                                id="message"
                                value={formData.message}
                                onChange={handleInputChange}
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
                                type="button"
                                onClick={handleSubmit}
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </section>
    );
};
