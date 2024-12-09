import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer/';
import styles from './layout.module.css';

const Layout = () => {
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

export default Layout;
