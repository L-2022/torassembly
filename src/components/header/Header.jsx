import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeSwitcher } from '../themeSwitcher/ThemeSwitcher.jsx';
import styles from './Header.module.css';
import headerLogo from '../../assets/tools_4851774.png';
import { routes } from '../../router/routes';


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleResize = () => {
        if (window.innerWidth > 850) {
            setIsMenuOpen(false);
        }
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
                                        end
                                        className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                        to={routes.services}
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
