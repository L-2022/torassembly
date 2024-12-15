import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Імпорт з react-helmet-async
import { useDispatch, useSelector } from 'react-redux';
import { addService, removeService } from '../../../../store/services/servicesSlice.js';
import { services } from '../../data/servicesData';
import { servicesSchema } from '../../data/structuredData/StructuredData.js';

import SelectedService from '../selectedService/SelectedService.jsx';
import ContactUs from '../contact us/ContactUs.jsx';
import styles from './servicesList.module.css';

const ServicesList = () => {
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

    const schemaData = servicesSchema(services); // created JSON-LD for Schema.org

    return (
            <HelmetProvider>
                <section id="services" className={styles.services_wrapper}>
                    <Helmet>
                        <script type="application/ld+json">
                            {JSON.stringify(schemaData)}
                        </script>
                    </Helmet>
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
                                                    {/*<div className={styles.details__wrapper}>*/}
                                                    {/*    <p className={styles.details__price}>Price: ${service.price}</p>*/}
                                                    {/*    <p className={styles.details__units}>Units: {service.units}</p>*/}
                                                    {/*</div>*/}
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
            </HelmetProvider>
    );
};

export default ServicesList;
