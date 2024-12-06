import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageToTelegram } from './sendMessageToTelegram.js';
import { clearServices } from '../../../../store/services/servicesSlice.js';
import { phone, length } from '../../helpers/messageHelpers.js';
import styles from './contactUs.module.css';

export const ContactUs = () => {
    const selectedService = useSelector((state) => state.selectedServices.selectedServices);
    const dispatch = useDispatch();

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        // Перевірка на мобільний пристрій
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        setIsMobile(/android|iphone|ipad|ipod|opera mini|blackberry|webos|windows phone/i.test(userAgent.toLowerCase()));
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errorMessages, setErrorMessages] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        setErrorMessages(true)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.message.trim()) {
            setErrorMessages(true);
            return;
        }

        setErrorMessages(false);

        if (isMobile) {
            const smsNumber = '000000001';

            const smsMessage = `${formData.name ? `Hello, my name is ${formData.name}.` : "Hello,"} 
I would like to order the service "${formData.message}". 
${formData.email || formData.phone ? "You can contact me via " : ""} 
${formData.email ? `Email: ${formData.email}` : ""} ${formData.email && formData.phone ? " or " : ""} 
${formData.phone ? `Phone number: ${formData.phone}.` : ""} 
${selectedService.length ? `Selected services: ${selectedService.map((s) => s.title).join(', ')}.` : ""}`;

            const smsUrl = `sms:${smsNumber}?body=${encodeURIComponent(smsMessage)}`;

            alert(smsMessage);
            window.location.href = smsUrl;
        }

        const servicesString = selectedService.length
                ? selectedService.map((service) => service.title).join(', ')
                : 'None';

        const message = `
<b>Name:</b> ${formData.name || '-'} 
<b>Email:</b> ${formData.email || '-'} 
<b>Phone:</b> ${formData.phone || '-'} 
<b>Message:</b> ${formData.message} 
<b>Selected services:</b> ${servicesString}`;

        try {
            await sendMessageToTelegram(message, phone, length);
            alert('Message sent successfully!');

            dispatch(clearServices());
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
        } catch (error) {
            alert('Failed to send message. Please try again.');
        }
    };


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
