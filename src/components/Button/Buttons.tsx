import React, { FC, ReactNode } from 'react';

interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    children: ReactNode;
}

const PrimaryButton: FC<ButtonProps> = ({ children, disabled, onClick }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`rounded-lg text-sm font-medium  ${
            disabled
                ? 'bg-neutral-400 text-neutral-300 cursor-not-allowed'
                : 'hover:bg-blue-500 hover:dark:bg-gray-900 hover:text-neutral-100  bg-blue-400 dark:bg-gray-700 text-white'
        } focus:outline-blue-200 focus:outline-offset-2 active:bg-blue-100 active:border-solid border-2 border-blue-100 active:text-neutral-100
                font-2 p-4 rounded-md min-w-100px font-'Roboto-Mono' transition-colors duration-200`}
    >
        {children}
    </button>
);

const SecondaryButton: FC<ButtonProps> = ({ children, disabled, onClick }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`border-solid border-2 rounded-lg text-sm font-medium outline-none focus:outline-none ${
            disabled
                ? 'text-neutral-400 border-solid border-2 border-neutral-400 cursor-not-allowed'
                : 'hover:text-neutral-100 hover:bg-blue-400 bg-white dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800  border-blue-300 text-blue-300 dark:bg-gray-700'
        } font-2 p-4 rounded-md min-w-100px font-'Roboto-Mono' transition-colors duration-200`}
    >
        {children}
    </button>
);

const TertiaryButton: FC<ButtonProps> = ({ children, disabled, onClick }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`bg-transparent border-none text-blue-300 ${
            disabled
                ? 'text-neutral-400 cursor-not-allowed'
                : 'hover:bg-blue-200 hover:text-neutral-100'
        } font-2 p-4 rounded-md min-w-100px font-'Roboto-Mono' transition-colors duration-200`}
    >
        {children}
    </button>
);

export { PrimaryButton, SecondaryButton, TertiaryButton };
