import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from './sendMessage.js';
import { clearServices } from '../../../../store/services/servicesSlice.js';
import Modal from '../../../../components/modal';
import styles from './contactUs.module.css';
import Title from "../../../../components/title/index.js";
import SendButton from '../../../../components/sendButton';


const ContactUs = () => {
    const selectedService = useSelector((state) => state.selectedServices.selectedServices);
    const dispatch = useDispatch();

    const [isMobile, setIsMobile] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        message: '',
    });
    const [errorMessages, setErrorMessages] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        setIsMobile(/android|iphone|ipad|ipod|opera mini|blackberry|webos|windows phone/i.test(userAgent.toLowerCase()));
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        setErrorMessages('');
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{10,15}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const servicesString = selectedService.length
                ? selectedService.map((service) => service.title).join(', ')
                : 'None';

        if (!formData.message || (!formData.phone && !formData.email)) {
            setErrorMessages('Fill out the form and select a service :-)');
            return;
        }

        if (formData.email && !validateEmail(formData.email)) {
            setErrorMessages('Invalid email address :-(');
            return;
        }

        if (formData.phone && !validatePhone(formData.phone)) {
            setErrorMessages('Invalid phone number :-(');
            return;
        }

        if (isMobile) {
            const smsNumber = '000000001';
            const smsMessage = `Selected services: ${servicesString}
${formData.email || formData.phone ? "You can contact me via " : ""}${formData.email ? `Email: ${formData.email}` : ""}${formData.email && formData.phone ? " or " : ""}${formData.phone ? `Phone number: ${formData.phone}` : ""}`;
            window.location.href = `sms:${smsNumber}?body=${encodeURIComponent(smsMessage)}`;
        }

        const message = `
<b>Email:</b> ${formData.email || '-'} 
<b>Phone:</b> ${formData.phone || '-'} 
<b>Message:</b> ${formData.message} 
<b>Selected services:</b> ${servicesString}`;

        try {
            await sendMessage(message, import.meta.env.VITE_APP_TOKEN , import.meta.env.VITE_APP_ID);
            setModalMessage('Message sent successfully!');
            setIsModalOpen(true);

            dispatch(clearServices());
            setFormData({
                email: '',
                phone: '',
                message: '',
            });
        } catch (error) {
            setModalMessage('Failed to send message. Please try again.');
            setIsModalOpen(true);
        }
    };

    return (
            <>
                <Title text={'Contact us'} />
                <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        message={modalMessage}
                />
                <form className={styles.contact_us__form} id="contactForm" noValidate="novalidate">



                    <div className={styles.contact_us__fields}>
                        <input
                                className={`${styles.contact_us__input} ${errorMessages ? styles['contact_us__input--error'] : ''}`}
                                id="email"
                                type="email"
                                placeholder="Your Email *"
                                value={formData.email}
                                onChange={handleInputChange}
                        />
                        <input
                                className={`${styles.contact_us__input} ${errorMessages ? styles['contact_us__input--error'] : ''}`}
                                id="phone"
                                type="tel"
                                placeholder="Your Phone *"
                                value={formData.phone}
                                onChange={handleInputChange}
                                onInput={(e) => {
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                }}
                        />
                        <textarea
                                className={`${styles.contact_us__textarea} ${errorMessages ? styles['contact_us__input--error'] : ''}`}
                                id="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Your Message *"
                                required
                        ></textarea>
                        <div className={styles.contact_us__actions}>
                            {<p className={styles.contact_us__error_messages}>{errorMessages || ''}</p>}
                            <SendButton
                                text="Send Message"
                                onClick={handleSubmit}
                                isDisabled={!!errorMessages}
                        />
                    </div>
                    </div>

                </form>
            </>
    );
};

export default ContactUs;
