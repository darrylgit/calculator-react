import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import InputKey from '../InputKey/input-key.component';

import { KeypadContainer } from './keypad.styles';

const negativeLabel = (
  <div>
    <strong>{String.fromCharCode(43)}</strong>
    {'/'}
    <strong>{String.fromCharCode(8722)}</strong>
  </div>
);

function InputKeyFactory(id, label, type) {
  this.id = id;
  this.label = label;
  this.type = type;
}

const inputKeys = [
  new InputKeyFactory('clear', 'C', 'clear'),
  new InputKeyFactory(
    'backspace',
    <FontAwesomeIcon icon={faArrowLeft} />,
    'util'
  ),
  new InputKeyFactory('parentheses', '( )', 'util'),
  new InputKeyFactory('divide', String.fromCharCode(247), 'operator'),
  new InputKeyFactory('seven', '7', 'num'),
  new InputKeyFactory('eight', '8', 'num'),
  new InputKeyFactory('nine', '9', 'num'),
  new InputKeyFactory('multiply', String.fromCharCode(215), 'operator'),
  new InputKeyFactory('four', '4', 'num'),
  new InputKeyFactory('five', '5', 'num'),
  new InputKeyFactory('six', '6', 'num'),
  new InputKeyFactory('subtract', String.fromCharCode(8722), 'operator'),
  new InputKeyFactory('one', '1', 'num'),
  new InputKeyFactory('two', '2', 'num'),
  new InputKeyFactory('three', '3', 'num'),
  new InputKeyFactory('add', String.fromCharCode(43), 'operator'),
  new InputKeyFactory('negative', negativeLabel, 'util'),
  new InputKeyFactory('zero', 0, 'num'),
  new InputKeyFactory('decimal', '.', 'util'),
  new InputKeyFactory('equals', '=', 'equals')
];

const KeyPad = () => {
  const renderInputKeys = () => {
    return inputKeys.map(({ id, ...otherProps }) => (
      <InputKey key={id} {...otherProps} />
    ));
  };

  return <KeypadContainer>{renderInputKeys()}</KeypadContainer>;
};

export default KeyPad;
