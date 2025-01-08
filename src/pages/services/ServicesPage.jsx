import React from 'react';
import AboutPage from './components/about';
import ServicesList from './components/servicesList';
import ContactUs from "./components/contactUs/index.js";
import ContactInfo from "./components/contactInfo";
import SelectedService from "./components/selectedService/index.js";
import styles from './servicesPage.module.css';

const ServicesPage = () => {

    return (
            <div className={styles.wrapper}>
                <section id="about" className={styles.about}>
                    <AboutPage />
                </section>
                <section id="services" className={styles.services}>
                    <ServicesList/>
                </section>
                <section id="contact" className={styles.contact_us}>
                    <ContactUs />
                </section>
                <section id="contact" className={styles.contact_info}>
                    <ContactInfo />
                </section>
                <section id="selected" className={styles.selected_services}>
                    <SelectedService />
                </section>
            </div>
    );
};

export default ServicesPage;
