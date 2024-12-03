import React, { useState, useEffect } from 'react';
import styles from './contactUs.module.css';

export const ContactUs = ({ selectedService }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        selectedServices: selectedService || '',
    });

    const [errorMessages, setErrorMessages] = useState(false); // Для помилок

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        setErrorMessages(true)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Якщо поле повідомлення порожнє, показуємо помилку
        if (!formData.message & !formData.selectedServices) {
            setErrorMessages(true);
            return;
        }

        setErrorMessages(false); // Якщо є повідомлення, помилка зникає

        const smsNumber = '000000001'; // Номер для надсилання SMS

        // Генерація повідомлення для SMS
        const smsMessage = `${formData.name ? `Hello, my name is ${formData.name}.` : "Hello,"} 
            I would like to order the service "${formData.message}". 
            ${formData.email || formData.phone ? "You can contact me via " : ""}
            ${formData.email ? `Email: ${formData.email}` : ""} ${formData.email && formData.phone ? " or " : ""}
            ${formData.phone ? `Phone number: ${formData.phone}.` : ""}
            ${formData.selectedServices ? `Selected services: ${formData.selectedServices}.` : ""}
            `;

        // URL для схеми `sms:`
        const smsUrl = `sms:${smsNumber}?body=${encodeURIComponent(smsMessage)}`;

        alert(smsMessage)
        window.location.href = smsUrl;
    };

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            selectedServices: selectedService || '',
        }));
    }, [selectedService]);

    return (
            <section className={styles.container} id="contact">
                <div className={styles.header}>
                    <h2 className={styles.title}>Contact Us</h2>
                </div>
                <form className={styles.form} id="contactForm" name="sentMessage" noValidate="novalidate">
                    <div className={styles.fields}>
                        <div className={styles.field_group}>
                            <input
                                    className={styles.input}
                                    id="name"
                                    type="text"
                                    placeholder="Your Name (optional)"
                                    value={formData.name}
                                    onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.field_group}>
                            <input
                                    className={styles.input}
                                    id="email"
                                    type="email"
                                    placeholder="Your Email (optional)"
                                    value={formData.email}
                                    onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.field_group}>
                            <input
                                    className={styles.input}
                                    id="phone"
                                    type="tel"
                                    placeholder="Your Phone (optional)"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, ''); // тільки цифри
                                    }}
                            />
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

                        </div>
                    </div>
                    <div className={styles.actions}>
                        {errorMessages && (
                                <p className={styles.error_messages}>Fill out the form and select a service :-)</p>
                        )}
                        <button
                                className={styles.button}
                                // className={errorMessages ? styles.button_no_active : styles.button}
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
