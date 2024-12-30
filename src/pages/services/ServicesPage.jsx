import React from 'react';
import AboutPage from './components/about';
import ServicesList from './components/servicesList';
import ContactUs from "./components/contact us/index.js";
import Contactinfo from "./components/contactinfo";
import SelectedService from "./components/selectedService/index.js";
import styles from './servicesPage.module.css';

const ServicesPage = () => {

    return (
            <div className={styles.wrapper}>
                <AboutPage />
                <section id="services" className={styles.services_wrapper}>
                    <ServicesList/>
                </section>
                <section id="contact" className={styles.contact_us}>
                    <ContactUs />
                </section>
                <section id="contact" className={styles.contact_us}>
                    <Contactinfo />
                </section>
                <section id="selected" className={styles.selected_services}>
                    <SelectedService />
                </section>
            </div>
    );
};

export default ServicesPage;
