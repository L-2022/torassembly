import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './contactInfo.module.css';

const ContactInfo = () => {
    const locationUrl = "https://www.google.com/maps/place/Toronto,+ON, 231 Fort York Boulevard, Toronto";
    const email = "torassembly@gmail.com";
    const phone = "+14000000000";

    const openGmail = () => {
        window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, '_blank');
    };

    const makeCall = () => {
        window.location.href = `tel:${phone}`;
    };

    return (
            <div className={styles.wrapper}>
                <div className={styles.wrapper__item}>
                    <a href={locationUrl} target="_blank" rel="noopener noreferrer">
                        <FaMapMarkerAlt className={styles.item__icon} />
                    </a>
                    <div>
                        <h3 className={styles.title}>Location</h3>
                        <p className={styles.text}>
                            <a href={locationUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>Toronto, ON</a>
                        </p>
                    </div>
                </div>

                <div className={styles.wrapper__item}>
                    <FaEnvelope className={styles.item__icon} onClick={openGmail} />
                    <div>
                        <h3 className={styles.title}>Email Address</h3>
                        <p className={styles.text}>
                            <a href={`mailto:${email}`} className={styles.link_mail}>{email}</a>
                        </p>
                    </div>
                </div>

                <div className={styles.wrapper__item}>
                    <FaPhone className={styles.item__icon} onClick={makeCall} />
                    <div>
                        <h3 className={styles.title}>Call us</h3>
                        <p className={styles.text}>
                            <a href={`tel:${phone}`} className={styles.link} onClick={makeCall}>{phone}</a>
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default ContactInfo;
