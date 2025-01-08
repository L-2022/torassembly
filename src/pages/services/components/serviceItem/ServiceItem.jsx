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
        <div className={styles.services}>
            {services.map((service) => (
                    <div
                            key={service.id}
                            className={`${styles.services__card}`}
                            onClick={() => handleToggleService(service)}
                    >
                        <div className={styles.indicator}></div>
                        <img
                                src={service.imgSrc || 'No image'}
                                alt={service.title}
                                className={` ${
                                        isServiceSelected(service.id) ? styles.services__image_active : styles.services__image
                                }`}
                        />
                        <h1 className={styles.services__name_service}>{service.title}</h1>
                        {isServiceSelected(service.id) && (
                                <div className={styles.services__details}>
                                    <h2 className={styles.details__description}>{service.description}</h2>
                                </div>
                        )}
                    </div>
            ))}
        </div>
    );
};

export default ServiceItem;
