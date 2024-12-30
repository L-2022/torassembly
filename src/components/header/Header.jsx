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
            const root = document.documentElement;
            const headerHeight = parseInt(
                    getComputedStyle(root).getPropertyValue('--header-height'),
                    10
            );

            const offset = -headerHeight;
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = sectionPosition + offset;

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
                                        className={styles.linkButton}
                                        onClick={() => handleLinkClick('about')}
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                        className={styles.linkButton}
                                        onClick={() => handleLinkClick('services')}
                                >
                                    Services
                                </button>
                            </li>
                            <li>
                                <button
                                        className={styles.linkButton}
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
