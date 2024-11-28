import React, { useState } from 'react';
import { services } from '../../data/servicesData.js';
import styles from './servicesList.module.css';
import { ContactUs } from '../contact us/ContactUs.jsx';

export const ServicesList = () => {
    const [activeServiceId, setActiveServiceId] = useState(null);

    const handleToggle = (id) => {
        setActiveServiceId((prevId) => (prevId === id ? null : id));
    };

    const activeService =  services.find(service => service.id === activeServiceId);

    return (
            <section id="services" className={styles.services_wrapper}>
                <div className={styles.header}>
                    <h1 className={styles.header__title}>Services</h1>
                </div>
                <div className={styles.container}>
                    <div className={styles.services}>
                        {services.map((service) => (
                                <div
                                        key={service.id}
                                        className={`${styles.services__card} ${
                                                activeServiceId === service.id ? styles.services__card_active : ''
                                        }`}
                                        onClick={() => handleToggle(service.id)}
                                >
                                    <img
                                            src={service.imgSrc}
                                            alt={service.title}
                                            className={`${styles.services__image} ${
                                                    activeServiceId === service.id ? styles.services__image_active : ''
                                            }`}
                                    />
                                    <p className={styles.services__name_service}>
                                        {service.title}
                                    </p>
                                    {activeServiceId === service.id && (
                                            <div className={styles.services__details}>
                                                <p className={styles.details__description}>
                                                    {service.description}
                                                </p>
                                                <div className={styles.details__wrapper}>
                                                    <p className={styles.details__price}>
                                                    Price: ${service.price}
                                                    </p>
                                                    <p className={styles.details__units}>
                                                        Units: {service.units}
                                                    </p></div>

                                            </div>
                                    )}
                                </div>
                        ))}
                    </div>
                    <section id="contact" className={styles.contact_us}>
                        <ContactUs selectedService={activeService?.title || ''} />
                    </section>
                </div>
            </section>
            )
}
