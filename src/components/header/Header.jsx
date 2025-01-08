import React, { useState, useEffect } from 'react';
import ThemeSwitcher from '../themeSwitcher';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleResize = () => {
        if (window.innerWidth > 767) {
            setIsMenuOpen(false);
        }
    };

    const handleLinkClick = (id) => {
        setIsMenuOpen(false);

        const section = document.getElementById(id);
        if (section) {
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;

            const sectionPosition = section.getBoundingClientRect().top + window.scrollY - 10;
            const offsetPosition = sectionPosition - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };



    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
            <header>
                <div className={styles.container}>
                    <div className={styles.header__inner_left}>
                        <div className={styles.header__logo}>
                            <p className={styles.logo__tor}>TOR</p>
                            <div className={styles.logo__text_wrapper}>
                                <div className={styles.logo__assembly}>assembly</div>
                                <div className={styles.logo__oronto}>oronto</div>
                            </div>
                        </div>

                    </div>
                    <button className={styles.burger} onClick={toggleMenu}>
                        &#9776;
                    </button>
                    <nav
                            className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}
                    >
                        <ul className={styles.navList}>
                            <li onClick={() => handleLinkClick('')} >
                                <ThemeSwitcher />
                                </li>
                            <li>
                                <button
                                        onClick={() => handleLinkClick('about')}
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                        onClick={() => handleLinkClick('services')}
                                >
                                    Services
                                </button>
                            </li>
                            <li>
                                <button
                                        onClick={() => handleLinkClick('contact')}
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
    );
};

export default Header;
