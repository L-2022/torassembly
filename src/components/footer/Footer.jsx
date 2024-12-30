import React from 'react';
import styles from './footer.module.css';
import { FaInstagram, FaWhatsapp, FaEmber, FaTelegram } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        {
            id: 'instagram',
            icon: <FaInstagram />,
            url: 'https://www.instagram.com/torassembly?igsh=MTZtbnU2cms2ODFhNQ==',
        },
        {
            id: 'whatsapp',
            icon: <FaWhatsapp />,
            url: 'https://www.whatsapp.com',
        },
        {
            id: 'telegram',
            icon: <FaTelegram />,
            url: 'https://t.me/TORassembly',
        },
    ];

    return (
            <footer className={styles.container}>
                <ul className={styles.socialList}>
                    <p className={styles.text}>Follow us:</p>
                        {socialLinks.map((link) => (
                            <li key={link.id} className={styles.socialItem}>
                                <a href={link.url}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className={styles.socialLink}
                                >
                                        {link.icon}
                                </a>
                            </li>))}
                </ul>
                <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
            </footer>
    );
};

export default Footer;
