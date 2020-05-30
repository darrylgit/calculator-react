import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { DIVIDE, MULTIPLY, SUBTRACT, ADD } from '../constants';

// Prepare array of input key data for iteration within component
const negativeLabel = (
  <div>
    <strong>{String.fromCharCode(43)}</strong>
    {'/'}
    <strong>{String.fromCharCode(8722)}</strong>
  </div>
);

function InputKeyFactory(value, label, type) {
  this.value = value;
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
  new InputKeyFactory(DIVIDE, DIVIDE, 'operator'),
  new InputKeyFactory(7, '7', 'num'),
  new InputKeyFactory(8, '8', 'num'),
  new InputKeyFactory(9, '9', 'num'),
  new InputKeyFactory(MULTIPLY, MULTIPLY, 'operator'),
  new InputKeyFactory(4, '4', 'num'),
  new InputKeyFactory(5, '5', 'num'),
  new InputKeyFactory(6, '6', 'num'),
  new InputKeyFactory(SUBTRACT, SUBTRACT, 'operator'),
  new InputKeyFactory(1, '1', 'num'),
  new InputKeyFactory(2, '2', 'num'),
  new InputKeyFactory(3, '3', 'num'),
  new InputKeyFactory(ADD, ADD, 'operator'),
  new InputKeyFactory('negative', negativeLabel, 'util'),
  new InputKeyFactory(0, '0', 'num'),
  new InputKeyFactory('decimal', '.', 'util'),
  new InputKeyFactory('equals', '=', 'equals')
];

export default React.createContext(inputKeys);
