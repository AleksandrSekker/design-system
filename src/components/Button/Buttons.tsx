import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ButtonGeneral, ButtonProps} from "./types/types";
import {
    getClassesByColorPrimary,
    getClassesByColorSecondary,
    getClassesByColorTertiary,
    getClassesBySize
} from "./utils/utils";

const Button = ({ children, disabled, onClick, classes, icon, size }: ButtonGeneral) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`rounded-lg text-sm font-medium font-2 p-4 min-w-100px transition-colors duration-200 ${
                classes.join(' ')
            } ${getClassesBySize(size ? size : 'md')}`}
        >
            {icon && <span className="mr-2">{<FontAwesomeIcon icon={icon}/>}</span>}
            {children}
        </button>
    )
};

const PrimaryButton= ({ children, disabled, onClick, icon, color, size}: ButtonProps) => {

    return (<Button
        onClick={onClick}
        disabled={disabled}
        classes={
            disabled
                ? [...getClassesByColorPrimary(color ? color : 'blue').disabled]
                : [...getClassesByColorPrimary(color ? color : 'blue').regular]
        }
        icon={icon}
        size={size}
    >
        {children}
    </Button>)
};

const SecondaryButton= ({ children, disabled, onClick, icon, color, size }: ButtonProps) => (
  <Button
    onClick={onClick}
    disabled={disabled}
    classes={
      disabled
        ? [...getClassesByColorSecondary(color ? color : 'blue').disabled]
        : [...getClassesByColorSecondary(color ? color : 'blue').regular]
    }
    icon={icon}
    size={size}
  >
    {children}
  </Button>
);

const TertiaryButton = ({ children, disabled, onClick, icon, size, color }: ButtonProps) => (
  <Button
    onClick={onClick}
    disabled={disabled}
    classes={
      disabled
        ? [...getClassesByColorTertiary(color ? color : 'blue').disabled]
        : [...getClassesByColorTertiary(color ? color : 'blue').regular]
    }
    icon={icon}
    size={size}
  >
    {children}
  </Button>
);

export { PrimaryButton, SecondaryButton, TertiaryButton, Button };
