import styles from './Footer.module.css';

export const Footer = function() {
    return (
            <footer className={styles.footer}>

                    <div className={styles.footer__inner}>
                        <p className={styles.footer__desc}>
                            Footer
                        </p>
                    </div>

            </footer>
    );
};

