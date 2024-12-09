import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './notFoundPage.module.css';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/furniture-assembly');
    };

    return (
            <section className={styles.not_found}>
                <h2 className={styles.not_found__title}>404 - Page Not Found</h2>
                <p className={styles.not_found__text}>
                    Sorry, the page you are looking for does not exist.
                </p>
                <button className={styles.not_found__button} onClick={handleGoHome}>
                    Go to Home
                </button>
            </section>
    );
};

export default NotFoundPage;
