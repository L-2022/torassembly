import React from 'react';
import styles from './footer.module.css';
import { FaInstagram, FaWhatsapp, FaViber, FaTelegram } from 'react-icons/fa';

export const Footer = () => {
    const socialLinks = [
        {
            id: 'instagram',
            icon: <FaInstagram />,
            url: 'https://www.instagram.com',
        },
        {
            id: 'whatsapp',
            icon: <FaWhatsapp />,
            url: 'https://www.whatsapp.com',
        },
        {
            id: 'viber',
            icon: <FaViber />,
            url: 'https://www.viber.com',
        },
        {
            id: 'telegram',
            icon: <FaTelegram />,
            url: 'https://telegram.org',
        },
    ];

    return (
            <footer className={styles.footer}>
                <div className={styles.container}>

                    <ul className={styles.socialList}>
                        <p className={styles.text}>Follow us:</p>
                        {socialLinks.map((link) => (
                                <li key={link.id} className={styles.socialItem}>
                                    <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.socialLink}
                                    >
                                        {link.icon}
                                    </a>
                                </li>
                        ))}
                    </ul>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </footer>
    );
};
