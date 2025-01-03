import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './contactinfo.module.css';

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
            <div className={styles.container}>
                <div className={styles.item}>
                    <a href={locationUrl} target="_blank" rel="noopener noreferrer">
                        <FaMapMarkerAlt className={styles.icon} />
                    </a>
                    <div>
                        <h3 className={styles.title}>Our Location</h3>
                        <p className={styles.text}>
                            <a href={locationUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>Toronto, ON</a>
                        </p>
                    </div>
                </div>

                <div className={styles.item}>
                    <FaEnvelope className={styles.icon} onClick={openGmail} />
                    <div>
                        <h3 className={styles.title}>Email Address</h3>
                        <p className={styles.text}>
                            <a href={`mailto:${email}`} className={styles.link_mail}>{email}</a>
                        </p>
                    </div>
                </div>

                <div className={styles.item}>
                    <FaPhone className={styles.icon} onClick={makeCall} />
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
