import React, { useState } from 'react';
import { services } from './data/servicesData';
import styles from './servicesPage.module.css';
import { ContactUs } from './components/contact us/ContactUs.jsx';
import { AboutPage } from '../about/AboutPage.jsx';

export const ServicesPage = () => {
    const [activeServiceId, setActiveServiceId] = useState(null);

    const handleToggle = (id) => {
        setActiveServiceId((prevId) => (prevId === id ? null : id));
    };

    return (
            <div>
                <section id="about">
                    <AboutPage />
                </section>

                <section id="services" className={styles.servicesPage}>
                    <div className={styles.servicesPage__header}>
                        <h1 className={styles.servicesPage__title}>Services</h1>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.services_list}>
                            {services.map((service) => (
                                    <div
                                            key={service.id}
                                            className={`${styles.servicesPage__card} ${
                                                    activeServiceId === service.id ? styles.active : ''
                                            }`}
                                            onClick={() => handleToggle(service.id)}
                                    >
                                        <img
                                                src={service.imgSrc}
                                                alt={service.title}
                                                className={styles.servicesPage__image}
                                        />
                                        <p className={styles.servicesPage__name_service}>
                                            {service.title}
                                        </p>
                                        {activeServiceId === service.id && (
                                                <div className={styles.servicesPage__details}>
                                                    <p className={styles.servicesPage__description}>
                                                        {service.description}
                                                    </p>
                                                    <p className={styles.servicesPage__price}>
                                                        Price: ${service.price}
                                                    </p>
                                                    <p className={styles.servicesPage__units}>
                                                        Units: {service.units}
                                                    </p>
                                                </div>
                                        )}
                                    </div>
                            ))}
                        </div>
                        <section id="contact" className={styles.contact_us}>
                            <ContactUs />
                        </section>
                    </div>
                </section>
            </div>
    );
};
