import React, { FC, ReactNode } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";


interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    children: ReactNode;
    icon?: IconProp;
}
interface ButtonGeneral extends ButtonProps {classes: string[]}

const Button: FC<ButtonGeneral> = ({ children, disabled, onClick, classes, icon }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`rounded-lg text-sm font-medium font-2 p-4 min-w-100px transition-colors duration-200 ${
      classes.join(' ')
    }`}
  >
    {icon && <span className="mr-2">{<FontAwesomeIcon icon={icon} />}</span>}
    {children}
  </button>
);

const PrimaryButton: FC<ButtonProps> = ({ children, disabled, onClick, icon }) => (
  <Button
    onClick={onClick}
    disabled={disabled}
    classes={
      disabled
        ? ['bg-neutral-400 text-white']
        : [
          'hover:bg-blue-500 hover:dark:bg-gray-900 hover:text-neutral-100',
          'bg-blue-400 dark:bg-gray-700 text-white',
        ]
    }
    icon={icon}
  >
    {children}
  </Button>
);

const SecondaryButton: FC<ButtonProps> = ({ children, disabled, onClick, icon }) => (
  <Button
    onClick={onClick}
    disabled={disabled}
    classes={
      disabled
        ? ['border-solid border-2 text-neutral-400 border-neutral-400']
        : [
          'hover:text-neutral-100 hover:bg-blue-400',
          'bg-white dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800',
          'border-solid border-2 border-blue-300 text-blue-300',
        ]
    }
    icon={icon}
  >
    {children}
  </Button>
);

const TertiaryButton: FC<ButtonProps> = ({ children, disabled, onClick, icon }) => (
  <Button
    onClick={onClick}
    disabled={disabled}
    classes={
      disabled
        ? ['text-neutral-400']
        : ['hover:bg-blue-200 hover:text-neutral-100', 'text-blue-300']
    }
    icon={icon}
  >
    {children}
  </Button>
);

export { PrimaryButton, SecondaryButton, TertiaryButton };
