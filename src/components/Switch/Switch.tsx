import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Switch as SwitchComponent } from '@headlessui/react';

interface SwitchProps {
  enabled: boolean;
  onChange: () => void;
  iconChecked: IconProp;
  iconUnchecked: IconProp;
}
const Switch = ({
  enabled,
  onChange,
  iconChecked,
  iconUnchecked,
}: SwitchProps) => (
  <SwitchComponent checked={enabled} onChange={onChange} as={Fragment}>
    {({ checked }) => (
      <button
        className={`${
          checked ? 'bg-blue-600' : 'bg-gray-500'
        } relative inline-flex h-6 w-12 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            checked ? 'translate-x-6' : 'translate-x-1'
          } inline-block flex h-5 w-5 transform items-center justify-center rounded-full bg-white transition `}
        >
          {checked ? (
            <FontAwesomeIcon icon={iconChecked} />
          ) : (
            <FontAwesomeIcon icon={iconUnchecked} />
          )}
        </span>
      </button>
    )}
  </SwitchComponent>
);

export default Switch;
