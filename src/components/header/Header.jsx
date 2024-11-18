import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeSwitcher } from '../themeSwitcher/ThemeSwitcher.jsx';
import headerLogo from '../../assets/tools.png';
import { routes } from '../../router/routes';
import styles from './Header.module.css';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleResize = () => {
        if (window.innerWidth > 767) {
            setIsMenuOpen(false);
        }
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.header__inner_left}>
                        <img className={styles.logo} src={headerLogo} alt="logo" width={40} height={40} />
                        <ThemeSwitcher />
                    </div>
                    <button className={styles.burger} onClick={toggleMenu}>
                        &#9776;
                    </button>
                    <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                        <ul className={styles.navList}>
                            <li>
                                <NavLink
                                        to={routes.home}
                                        onClick={handleLinkClick}
                                        className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}

                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                        to={routes.services}
                                        end
                                        onClick={handleLinkClick}
                                        className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
                                >
                                    Services
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
    );
};
