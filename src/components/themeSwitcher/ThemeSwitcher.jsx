import React, { useState } from 'react';
import { SunIcon } from '../icons/SunIcon.jsx';
import { MoonIcon } from '../icons/MoonIcon.jsx';
import styles from './themeSwitcher.module.css';

export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light');

    const setLightTheme = () => {
        setTheme('light');
        document.documentElement.classList.remove('dark-theme');
        document.documentElement.classList.add('light-theme');
    };

    const setDarkTheme = () => {
        setTheme('dark');
        document.documentElement.classList.remove('light-theme');
        document.documentElement.classList.add('dark-theme');
    };

    return (
            <div className={styles.switcher}>
                <button
                        onClick={setLightTheme}
                        className={`${styles.switcher__button} ${theme === 'light' ? styles.active : ''}`}
                >
                    <SunIcon stroke={theme === 'light' ? '#000' : '#ccc'} /> {}
                </button>
                <div className={styles.theme_switcher__separator}></div>
                <button
                        onClick={setDarkTheme}
                        className={`${styles.switcher__button} ${theme === 'dark' ? styles.active : ''}`}
                >
                    <MoonIcon stroke={theme === 'dark' ? '#fff' : '#ccc'} /> {}
                </button>
            </div>
    );
};
