import React, { useState, useEffect } from 'react';
import { SunIcon } from '../icons/SunIcon.jsx';
import { MoonIcon } from '../icons/MoonIcon.jsx';
import styles from './themeSwitcher.module.css';

export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light');

    // Функція для встановлення світлої теми
    const setLightTheme = () => {
        setTheme('light');
        document.documentElement.classList.remove('dark-theme');
        document.documentElement.classList.add('light-theme');
        localStorage.setItem('theme', 'light'); // Збереження вибору в локальному сховищі
    };

    // Функція для встановлення темної теми
    const setDarkTheme = () => {
        setTheme('dark');
        document.documentElement.classList.remove('light-theme');
        document.documentElement.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark'); // Збереження вибору в локальному сховищі
    };

    // Виконання логіки для автоматичної зміни теми залежно від часу
    const setAutomaticTheme = () => {
        const currentHour = new Date().getHours();
        if (currentHour >= 7 && currentHour < 19) {
            setLightTheme(); // Встановлюємо світлу тему з 7 до 19 години
        } else {
            setDarkTheme(); // Встановлюємо темну тему з 19 до 7 години
        }
    };

    // Використовуємо useEffect для автоматичного налаштування теми при завантаженні
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme'); // Перевірка, чи є збережена тема
        if (savedTheme) {
            setTheme(savedTheme);
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark-theme');
            } else {
                document.documentElement.classList.add('light-theme');
            }
        } else {
            setAutomaticTheme(); // Якщо теми не збережено, визначаємо її залежно від часу
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
