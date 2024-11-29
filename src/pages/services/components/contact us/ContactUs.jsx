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

        const smsNumber = '000000001';

        const smsMessage = `${formData.name ? `Hello, my name is ${formData.name}.` : "Hello, "} 
            I would like to order the service "${formData.message}". 
            ${formData.email || formData.phone ? "You can contact me via " : ""}
            ${formData.email ? `Email: ${formData.email}` : ""} ${formData.email && formData.phone ? " or " : ""}
            ${formData.phone ? `Phone number: ${formData.phone}.` : ""}`;


        // Create URL for `sms:` scheme
        const smsUrl = `sms:${smsNumber}?body=${encodeURIComponent(smsMessage)}`;
        if (!formData.message) {
            alert("Enter messages")
        } else {
            alert(smsMessage)
            window.location.href = smsUrl;
        }

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
                                    placeholder="Your Name"
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
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                    }}
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
