import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeService } from '../../../../store/services/servicesSlice.js';
import styles from './selectedService.module.css';
import Title from "../../../../components/title";

const SelectedService = () => {
    const dispatch = useDispatch();
    const selectedServices = useSelector((state) => state.selectedServices.selectedServices);

    const handleToggleService = (service) => {
        dispatch(removeService(service));
    };

    if (selectedServices.length === 0) {
        return <></>;
    }

    return (
            <div className={styles.wrapper}>
                <Title text={'Selected services'} />
                {selectedServices.map((service) => (
                        <div key={service.id} className={styles.wrapper__service_item}>

                            <button
                                    className={styles.service_item__delete}
                                    onClick={() => handleToggleService(service)}
                                    aria-label="Remove service"
                            >

                            </button>
                            <div className={styles.service_item_title}>{service.title}</div>
                        </div>
                ))}
            </div>
    );
};

export default SelectedService;
