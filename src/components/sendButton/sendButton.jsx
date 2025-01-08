import React from 'react';
import styles from './sendButton.module.css';

const SendButton = ({ text, onClick, isDisabled = false }) => {
    return (
            <button
                    className={styles.send_button}
                    type="button"
                    onClick={onClick}
                    disabled={isDisabled}
            >
                {text}
            </button>
    );
};

export default SendButton;
