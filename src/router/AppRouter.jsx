import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutPage } from '../pages/about/AboutPage';
import { ServicesPage } from '../pages/services/ServicesPage';
import {NotFoundPage } from '../pages/notFound/NotFoundPage.jsx';
import { Layout } from '../components/layout/Layout';
import { routes } from './routes';

const AppRouter = () => {
    return (
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path={routes.services} element={<ServicesPage />} />
                        <Route path={routes.home} element={<AboutPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Router>
    );
};

export default AppRouter;
