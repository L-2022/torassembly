import React from 'react';
import { Outlet } from 'react-router-dom';
import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';
import styles from './layout.module.css';

export const Layout = () => {
    return (
            <div className={styles.layout} >
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
    );
};
