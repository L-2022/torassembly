import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addService, removeService } from '../../../../store/services/servicesSlice.js';
import { services } from '../../data/servicesData';
import { SelectedService } from '../selectedService/SelectedService.jsx';
import { ContactUs } from '../contact us/ContactUs.jsx';
import styles from './servicesList.module.css';

export const ServicesList = () => {
    const dispatch = useDispatch();
    const selectedServices = useSelector((state) => state.selectedServices.selectedServices);

    const handleToggleService = (service) => {
        dispatch(removeService(service))
        if (selectedServices.find((s) => s.id === service.id)) {
            dispatch(removeService(service));
        } else {
            dispatch(addService(service));
        }
    };

    const isServiceSelected = (id) => selectedServices.some((service) => service.id === id);

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
                                                isServiceSelected(service.id) ? styles.services__card_active : ''
                                        }`}
                                        onClick={() => handleToggleService(service)}  // handleToggleService для картки
                                >
                                    <div
                                            className={styles.indicator}
                                            onClick={(e) => {
                                                e.stopPropagation();  // Запобігає спрацюванню handleToggleService для картки
                                                handleToggleService(service);  // Обробка кліку по індикатору (додавання/видалення)
                                            }}
                                    ></div>
                                    <img
                                            src={service.imgSrc}
                                            alt={service.title}
                                            className={`${styles.services__image} ${
                                                    isServiceSelected(service.id) ? styles.services__image_active : ''
                                            }`}
                                    />
                                    <p className={styles.services__name_service}>{service.title}</p>
                                    {isServiceSelected(service.id) && (
                                            <div className={styles.services__details}>
                                                <p className={styles.details__description}>{service.description}</p>
                                                <div className={styles.details__wrapper}>
                                                    <p className={styles.details__price}>Price: ${service.price}</p>
                                                    <p className={styles.details__units}>Units: {service.units}</p>
                                                </div>
                                            </div>
                                    )}
                                </div>
                        ))}
                    </div>
                    <section id="contact" className={styles.contact_us}>
                        <ContactUs />
                    </section>
                    <section id="selected" className={styles.selected_services}>
                        <SelectedService />
                    </section>
                </div>
            </section>
    );
};
