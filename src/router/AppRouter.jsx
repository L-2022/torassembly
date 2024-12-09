import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/about';
import ServicesPage from '../pages/services';
import NotFoundPage from '../pages/notFound';
import Layout from '../components/layout';
import { routes } from './routes';

const AppRouter = () => {
    return (
            <Router
                    // Activating the flag to enable the new behavior in React Router v7 (state updates wrapped in React.startTransition)
                    future={{ v7_startTransition: true }}
            >
                <Routes>
                    <Route element={<Layout />}>
                        <Route path={routes.services} element={<ServicesPage />} />
                        <Route path={routes.about} element={<AboutPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Router>
    );
};

export default AppRouter;
