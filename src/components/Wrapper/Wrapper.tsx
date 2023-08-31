import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}
const WrapperAnimationHoverButton = ({ children, className }: Props) => {
  return (
    <button
      className={`inline-block duration-300 ease-in hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};
const CardWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={`inline-block rounded-xl border p-6 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105 dark:bg-gray-800 dark:text-white dark:shadow-gray-900 ${className}`}
    >
      <div className="grid items-center justify-center gap-4">{children}</div>
    </div>
  );
};

export { WrapperAnimationHoverButton, CardWrapper };
