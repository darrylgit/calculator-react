import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import InputKey from '../InputKey/input-key.component';

import { KeypadContainer } from './keypad.styles';

const inputKeys = [
  { label: 'C' },
  { label: <FontAwesomeIcon icon={faArrowLeft} /> },
  { label: '( )' },
  { label: String.fromCharCode(247) },
  { label: '7' },
  { label: '8' },
  { label: '9' },
  { label: String.fromCharCode(215) },
  { label: '4' },
  { label: '5' },
  { label: '6' },
  { label: String.fromCharCode(8722) },
  { label: '1' },
  { label: '2' },
  { label: '3' },
  { label: String.fromCharCode(43) },
  {
    label: (
      <div>
        <strong>{String.fromCharCode(43)}</strong>
        {'/'}
        <strong>{String.fromCharCode(8722)}</strong>
      </div>
    )
  },
  { label: '0' },
  { label: '.' },
  { label: '=' }
];

const KeyPad = () => {
  const renderKeys = () => {
    return inputKeys.map(key => <InputKey label={key.label} />);
  };
  return <KeypadContainer>{renderKeys()}</KeypadContainer>;
};

export default KeyPad;
