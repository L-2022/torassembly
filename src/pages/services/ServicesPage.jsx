import React, { useState } from 'react';
import { services } from './data/servicesData';
import styles from './servicesPage.module.css';
import { ContactUs } from './components/contact us/ContactUs.jsx';

export const ServicesPage = () => {
    return (
            <div className={styles.servicesPage}>
                <div className={styles.servicesPage__header}>
                    <h1 className={styles.servicesPage__title}>Services</h1>
                </div>
                <div className={styles.container}
                >
                    <div className={styles.services_list}>
                        {services.map((service) => (
                                <div
                                        key={service.id}
                                        className={styles.servicesPage__card}
                                >
                                    <img src={service.imgSrc} alt={service.title} className={styles.servicesPage__image} />
                                    <p className={styles.servicesPage__name_service}>{service.title}</p>
                                    <div className={styles.servicesPage__details}>
                                        <p className={styles.servicesPage__price}>Price: ${service.price}</p>
                                        <p className={styles.servicesPage__units}>Units: {service.units}</p>
                                        <p className={styles.servicesPage__description}>{service.description}</p>
                                    </div>
                                </div>
                        ))}
                </div>
                    <div className={styles.contact_us}>
                        <ContactUs/>
                    </div>

            </div>
            </div>
    );
};
