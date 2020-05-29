import React, { useContext } from 'react';

import KeypadContext from '../../contexts/keypadContext';

import InputKey from '../InputKey/input-key.component';

import { KeypadContainer } from './keypad.styles';

const KeyPad = () => {
  const inputKeys = useContext(KeypadContext);

  const renderInputKeys = () => {
    return inputKeys.map(data => <InputKey key={data.value} {...data} />);
  };

  return <KeypadContainer>{renderInputKeys()}</KeypadContainer>;
};

export default KeyPad;
