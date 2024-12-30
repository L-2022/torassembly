import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeService } from '../../../../store/services/servicesSlice.js';
import styles from './selectedService.module.css';

const SelectedService = () => {
    const dispatch = useDispatch();
    const selectedServices = useSelector((state) => state.selectedServices.selectedServices);

    const handleToggleService = (service) => {
        dispatch(removeService(service));
    };

    if (selectedServices.length === 0) {
        return <p className={styles.title}></p>;
    }

    return (
            <div className={styles.container}>
                <div className={styles.title}>Selected Services:</div>
                {selectedServices.map((service) => (
                        <div key={service.id} className={styles.service_details}>

                            <button
                                    className={styles.delete_service}
                                    onClick={() => handleToggleService(service)}
                                    aria-label="Remove service"
                            >

                            </button>
                            <div className={styles.service_name}>{service.title}</div>
                        </div>
                ))}
            </div>
    );
};

export default SelectedService;
