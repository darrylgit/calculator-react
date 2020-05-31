import { DIVIDE, MULTIPLY, SUBTRACT, ADD } from '../constants';

const isOperator = val => [DIVIDE, MULTIPLY, SUBTRACT, ADD].includes(val);

export default isOperator;
