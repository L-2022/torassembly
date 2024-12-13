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

    // const totalAmount = selectedServices.reduce(
    //         (total, service) => total + service.price * service.units,
    //         0
    // );

    if (selectedServices.length === 0) {
        return <p className={styles.noService}>No services selected</p>;
    }

    return (
            <div className={styles.container}>
                <h2 className={styles.title}>Selected Services:</h2>
                {selectedServices.map((service) => (
                        <div key={service.id} className={styles.service_details}>

                            <button
                                    className={styles.delete_service}
                                    onClick={() => handleToggleService(service)}
                                    aria-label="Remove service"
                            >

                            </button>
                            <div className={styles.service_name}>{service.title}</div>
                            {/*<div className={styles.service_price}>*/}
                            {/*    {service.price * service.units}*/}
                            {/*</div>*/}
                        </div>
                ))}

                {/*<div className={styles.total}>*/}
                {/*    Total: <span>{totalAmount}</span>*/}
                {/*</div>*/}
            </div>
    );
};

export default SelectedService;
