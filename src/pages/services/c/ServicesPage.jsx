import React, { useState } from 'react';
import { services } from './data/servicesData';
import styles from './servicesPage.module.css';

export const ServicesPage = () => {
    const [activeServiceId, setActiveServiceId] = useState(null);

    const handleMouseEnter = (id) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        setActiveServiceId(null);
    };

    const handleClick = (id) => {
        setActiveServiceId(id === activeServiceId ? null : id);
    };

    return (
            <div className={styles.servicesPage}>
                <div className={styles.servicesPage__header}>
                    <h1 className={styles.servicesPage__title}>Services</h1>
                </div>
                <div className={styles.servicesPage__grid}
                >
                    {services.map((service) => (
                            <div
                                    key={service.id}
                                    className={`${styles.servicesPage__card} ${activeServiceId === service.id ? styles.servicesPage__card_active : ''}`}
                                    onMouseEnter={() => handleMouseEnter(service.id)}
                                    // onMouseLeave={handleMouseLeave}
                                    onClick={() => handleClick(service.id)}
                            >
                                <img src={service.imgSrc} alt={service.title} className={styles.servicesPage__image} />
                                <p className={styles.servicesPage__name_service}>{service.title}</p>
                                {activeServiceId === service.id && (
                                        <div className={styles.servicesPage__details}>
                                            <p className={styles.servicesPage__price}>Price: ${service.price}</p>
                                            <p className={styles.servicesPage__units}>Units: {service.units}</p>
                                            <p className={styles.servicesPage__description}>{service.description}</p>
                                        </div>
                                )}
                            </div>
                    ))}
                </div>
            </div>
    );
};
