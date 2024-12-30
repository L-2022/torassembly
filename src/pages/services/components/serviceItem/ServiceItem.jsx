import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addService, removeService } from '../../../../store/services/servicesSlice.js';
import { services } from '../../data/servicesData';

import styles from './serviceItem.module.css';

const ServiceItem = () => {
    const dispatch = useDispatch();
    const selectedServices = useSelector((state) => state.selectedServices.selectedServices);

    const handleToggleService = (service) => {
        if (selectedServices.find((s) => s.id === service.id)) {
            dispatch(removeService(service));
        } else {
            dispatch(addService(service));
        }
    };

    const isServiceSelected = (id) => selectedServices.some((service) => service.id === id);

    return (
    <div className={styles.container}>
        <div className={styles.services}>
            {services.map((service) => (
                    <div
                            key={service.id}
                            className={`${styles.services__card} ${
                                    isServiceSelected(service.id) ? styles.services__card_active : ''
                            }`}
                            onClick={() => handleToggleService(service)}
                    >
                        <div className={styles.indicator}></div>
                        <img
                                src={service.imgSrc || 'No image'}
                                alt={service.title}
                                className={`${styles.services__image} ${
                                        isServiceSelected(service.id) ? styles.services__image_active : ''
                                }`}
                        />
                        <h1 className={styles.services__name_service}>{service.title}</h1>
                        {isServiceSelected(service.id) && (
                                <div className={styles.services__details}>
                                    <h2 className={styles.details__description}>{service.description}</h2>
                                    <div className={styles.details__wrapper}>
                                        {/*<p className={styles.details__price}>Price: ${service.price}</p>*/}
                                        {/*<p className={styles.details__units}>Units: {service.units}</p>*/}
                                    </div>
                                </div>
                        )}
                    </div>
            ))}
        </div>
    </div>
    );
};

export default ServiceItem;
