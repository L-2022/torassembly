import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeService } from '../../../../store/services/servicesSlice.js';
import styles from './selectedService.module.css';

export const SelectedService = () => {
    const dispatch = useDispatch();
    const selectedServices = useSelector((state) => state.selectedServices.selectedServices);

    const handleToggleService = (service) => {
        dispatch(removeService(service));
    };

    if (selectedServices.length === 0) {
        return <p className={styles.noService}></p>;
    }

    return (
            <div className={styles.container}>
                <h2 className={styles.title}>Selected Services:</h2>
                {selectedServices.map((service) => (
                        <div key={service.id} className={styles.service_details}>

                            <button
                                    className={styles.delete_service}
                                    onClick={() => handleToggleService(service)}
                            >
                                x
                            </button>
                            <div className={styles.service_name}>{service.title}</div>
                        </div>
                ))}
            </div>
    );
};
