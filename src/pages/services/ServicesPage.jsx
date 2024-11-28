import React from 'react';
import styles from './servicesPage.module.css';
import { AboutPage } from '../about/AboutPage.jsx';
import { ServicesList } from './components/servicesList/ServicesList.jsx';

export const ServicesPage = () => {

    return (
            <div className={styles.wrapper}>
                <AboutPage />
                <ServicesList/>
            </div>
    );
};
