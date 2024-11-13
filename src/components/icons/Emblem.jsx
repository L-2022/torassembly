import React from 'react';

export const ToolIcon = ({ stroke = '#000' }) => (
        <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Викрутка */}
            <path
                    d="M22.5 9.5L17 15.5L20.5 19L26 13L22.5 9.5Z"
                    fill="none"
                    stroke={stroke}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
            />
            <path
                    d="M15 24L19 20L16 17L14 19L15 24Z"
                    fill="none"
                    stroke={stroke}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
            />
            {/* Шуруповерт */}
            <rect
                    x="7"
                    y="7"
                    width="5"
                    height="15"
                    fill="none"
                    stroke={stroke}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
            />
            <rect
                    x="6"
                    y="8"
                    width="6"
                    height="1"
                    fill={stroke}
            />
            {/* Імпакт */}
            <circle
                    cx="16"
                    cy="16"
                    r="5"
                    fill="none"
                    stroke={stroke}
                    strokeWidth="2"
            />
        </svg>
);
