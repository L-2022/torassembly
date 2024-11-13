// src/pages/ServicesPage/ServicesPage.jsx
import React from 'react';
import styles from './servicesPage.module.css';
import f from './images/f.jpg';
import d from './images/design.jpg';
import u from './images/lighting installation.jpg';
import c from './images/changing lightbulb.jpg';
import h from './images/halloween.jpg';

// Дані для послуг
const services = [
    { id: 1, title: 'Assembly of furniture', imgSrc: f },
    { id: 2, title: 'Furniture installation', imgSrc: f },
    { id: 3, title: 'Furniture design', imgSrc: d },
    { id: 4, title: 'Installing lighting', imgSrc: u },
    { id: 5, title: 'Changing lamps', imgSrc: c },
    { id: 5, title: 'preparation for Halloween', imgSrc: h }
];

export const ServicesPage = () => {
    return (
            <div className={styles.servicesPage}>
                <div className={styles.servicesPage__header}>
                    <h1 className={styles.servicesPage__title}>Services</h1>
                </div>
                <div className={styles.servicesPage__grid}>
                    {services.map((service) => (
                            <div key={service.id} className={styles.servicesPage__card}>
                                <img src={service.imgSrc} alt={service.title} className={styles.servicesPage__image} />
                                <p className={styles.servicesPage__text}>{service.title}</p>
                            </div>
                    ))}
                </div>
            </div>
    );
};
