import React, { useState, useEffect } from 'react';
import { SunIcon } from '../icons/SunIcon.jsx';
import { MoonIcon } from '../icons/MoonIcon.jsx';
import styles from './themeSwitcher.module.css';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light');

    const setLightTheme = () => {
        setTheme('light');
        document.documentElement.classList.remove('dark-theme');
        document.documentElement.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    };

    // Функція для встановлення темної теми
    const setDarkTheme = () => {
        setTheme('dark');
        document.documentElement.classList.remove('light-theme');
        document.documentElement.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    };

    const setAutomaticTheme = () => {
        const currentHour = new Date().getHours();
        if (currentHour >= 7 && currentHour < 19) {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    };


    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark-theme');
            } else {
                document.documentElement.classList.add('light-theme');
            }
        } else {
            setAutomaticTheme();
        }
    }, []);

    return (
            <div className={styles.switcher}>
                <button
                        onClick={setLightTheme}
                        className={`${styles.switcher__button} ${theme === 'light' ? styles.active : ''}`}
                >
                    <SunIcon stroke={theme === 'light' ? '#fff' : '#ccc'} />
                </button>
                <div className={styles.theme_switcher__separator}></div>
                <button
                        onClick={setDarkTheme}
                        className={`${styles.switcher__button} ${theme === 'dark' ? styles.active : ''}`}
                >
                    <MoonIcon stroke={theme === 'dark' ? '#000' : '#545454'} />
                </button>
            </div>
    );
};

export default ThemeSwitcher;
