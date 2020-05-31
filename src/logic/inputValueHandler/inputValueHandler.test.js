import inputValueHandler from './inputValueHandler';
import {
  DIVIDE,
  MULTIPLY,
  SUBTRACT,
  ADD,
  CLEAR,
  BACKSPACE,
  PARENTHESES,
  OPENPAR,
  CLOSEPAR,
  DECIMAL,
  NEGATIVE
} from '../../constants';

describe('number inputs', () => {
  it('concatenates new non-zero numbers into the current index', () => {
    expect(inputValueHandler([], 5)).toEqual([5]);
    expect(inputValueHandler([5], 6)).toEqual([56]);
  });

  it('disallows multiple initial zeroes', () => {
    expect(inputValueHandler([0], 0)).toEqual([0]);
  });

  it('can push a number after an opening parenthesis', () => {
    expect(inputValueHandler([OPENPAR], 5)).toEqual([OPENPAR, 5]);
  });

  it('coerces numbers to be negative after a negative sign', () => {
    expect(inputValueHandler([5, ADD, '-'], 2)).toEqual([5, ADD, -2]);
  });
});

describe('operator inputs', () => {
  it('handles pushing operators', () => {
    expect(inputValueHandler([23], ADD)).toEqual([23, ADD]);
  });

  it('disallows initial operators', () => {
    expect(inputValueHandler([], DIVIDE)).toEqual([]);
    expect(inputValueHandler([], MULTIPLY)).toEqual([]);
    expect(inputValueHandler([], SUBTRACT)).toEqual([]);
    expect(inputValueHandler([], ADD)).toEqual([]);
  });

  it('disallows multiple consecutive operators', () => {
    expect(inputValueHandler(['23', ADD], ADD)).toEqual(['23', ADD]);
    expect(inputValueHandler(['23', ADD], SUBTRACT)).toEqual(['23', SUBTRACT]);
  });
});

describe('CLEAR input', () => {
  it('clears values array when input is CLEAR', () => {
    expect(inputValueHandler([432, DIVIDE, 4], CLEAR)).toEqual([]);
  });
});

describe('BACKSPACE input', () => {
  it('deletes operators', () => {
    expect(inputValueHandler([1, ADD], BACKSPACE)).toEqual([1]);
  });

  it('deletes digits', () => {
    expect(inputValueHandler([12], BACKSPACE)).toEqual([1]);
    expect(inputValueHandler([13, ADD, 23], BACKSPACE)).toEqual([13, ADD, 2]);
  });

  it('deletes entire single-digit numbers', () => {
    expect(inputValueHandler([1], BACKSPACE)).toEqual([]);
    expect(inputValueHandler([13, ADD, 2], BACKSPACE)).toEqual([13, ADD]);
  });
});

describe('PARENTHESES input', () => {
  it('it pushs an opening parenthesis when array is empty', () => {
    expect(inputValueHandler([], PARENTHESES)).toEqual([OPENPAR]);
  });

  describe('when current last value is a number', () => {
    it('pushes a MULTIPLY and opening parenthesis if there are no unclosed parentheses', () => {
      expect(inputValueHandler([54], PARENTHESES)).toEqual([
        54,
        MULTIPLY,
        OPENPAR
      ]);
      expect(inputValueHandler([54, DIVIDE, 6], PARENTHESES)).toEqual([
        54,
        DIVIDE,
        6,
        MULTIPLY,
        OPENPAR
      ]);
      expect(
        inputValueHandler([OPENPAR, 54, ADD, 3, CLOSEPAR, ADD, 3], PARENTHESES)
      ).toEqual([OPENPAR, 54, ADD, 3, CLOSEPAR, ADD, 3, MULTIPLY, OPENPAR]);
    });

    it('pushes a MULTIPLY and opening parenthesis if number has no preceding operator', () => {
      expect(inputValueHandler([OPENPAR, 54], PARENTHESES)).toEqual([
        OPENPAR,
        54,
        MULTIPLY,
        OPENPAR
      ]);
    });

    it('pushes a closing parenthesis if number has a preceding operator', () => {
      expect(inputValueHandler([OPENPAR, 54, ADD, 3], PARENTHESES)).toEqual([
        OPENPAR,
        54,
        ADD,
        3,
        CLOSEPAR
      ]);
    });
  });

  describe('when current last value is a hanging decimal', () => {
    it('deletes the decimal', () => {
      expect(inputValueHandler([54, '.'], PARENTHESES)).toEqual([
        54,
        MULTIPLY,
        OPENPAR
      ]);
      expect(
        inputValueHandler([OPENPAR, 4, ADD, 5, '.'], PARENTHESES)
      ).toEqual([OPENPAR, 4, ADD, 5, CLOSEPAR]);
    });
  });

  describe('when current last value is a hanging negative', () => {
    it('coerces the negative to -1, and then pushes a MULTIPLY and an opening parentheses', () => {
      expect(inputValueHandler(['-'], PARENTHESES)).toEqual([
        -1,
        MULTIPLY,
        OPENPAR
      ]);
      expect(inputValueHandler([OPENPAR, '-'], PARENTHESES)).toEqual([
        OPENPAR,
        -1,
        MULTIPLY,
        OPENPAR
      ]);
      expect(
        inputValueHandler([OPENPAR, 5, SUBTRACT, '-'], PARENTHESES)
      ).toEqual([OPENPAR, 5, SUBTRACT, -1, MULTIPLY, OPENPAR]);
      expect(
        inputValueHandler(
          [5, SUBTRACT, OPENPAR, 6, ADD, 3, CLOSEPAR, MULTIPLY, '-'],
          PARENTHESES
        )
      ).toEqual([
        5,
        SUBTRACT,
        OPENPAR,
        6,
        ADD,
        3,
        CLOSEPAR,
        MULTIPLY,
        -1,
        MULTIPLY,
        OPENPAR
      ]);
    });
  });

  describe('when the current last value is an opening parenthesis', () => {
    it('pushes another opening parenthesis', () => {
      expect(inputValueHandler([OPENPAR], PARENTHESES)).toEqual([
        OPENPAR,
        OPENPAR
      ]);
      expect(inputValueHandler([5, ADD, OPENPAR], PARENTHESES)).toEqual([
        5,
        ADD,
        OPENPAR,
        OPENPAR
      ]);
    });
  });

  describe('when the current last value is an operator', () => {
    it('pushes an opening parenthesis', () => {
      expect(inputValueHandler([5, ADD], PARENTHESES)).toEqual([
        5,
        ADD,
        OPENPAR
      ]);
      expect(inputValueHandler([OPENPAR, 5, SUBTRACT], PARENTHESES)).toEqual([
        OPENPAR,
        5,
        SUBTRACT,
        OPENPAR
      ]);
    });
  });

  describe('when the current last value is a closing par', () => {
    it('push MULTIPLY and opens new parentheses if there are no unclosed parentheses, ', () => {
      expect(
        inputValueHandler([OPENPAR, 5, DIVIDE, 2, CLOSEPAR], PARENTHESES)
      ).toEqual([OPENPAR, 5, DIVIDE, 2, CLOSEPAR, MULTIPLY, OPENPAR]);
    });

    it('pushes a closing parenthesis if there are unclosed parentheses', () => {
      expect(
        inputValueHandler(
          [OPENPAR, 5, ADD, OPENPAR, 6, MULTIPLY, 2, CLOSEPAR],
          PARENTHESES
        )
      ).toEqual([OPENPAR, 5, ADD, OPENPAR, 6, MULTIPLY, 2, CLOSEPAR, CLOSEPAR]);
    });

    //EDGE CASE
    it('pushes MULTIPLY and opens new parentheses if a closing parenthesis would be redundant', () => {
      expect(
        inputValueHandler([OPENPAR, OPENPAR, 5, ADD, 6, CLOSEPAR], PARENTHESES)
      ).toEqual([OPENPAR, OPENPAR, 5, ADD, 6, CLOSEPAR, MULTIPLY, OPENPAR]);
    });
  });
});

describe('NEGATIVE input', () => {
  it('pushes a negative sign to an empty array', () => {
    expect(inputValueHandler([], NEGATIVE)).toEqual(['-']);
  });

  it('coerces positive numbers to negative', () => {
    expect(inputValueHandler([5, ADD, 6], NEGATIVE)).toEqual([5, ADD, -6]);
  });

  it('coerces negative numbers to positive', () => {
    expect(inputValueHandler([5, MULTIPLY, -6], NEGATIVE)).toEqual([
      5,
      MULTIPLY,
      6
    ]);
  });

  it('handles dangling decimal points', () => {
    expect(inputValueHandler([6, DIVIDE, 33, '.'], NEGATIVE)).toEqual([
      6,
      DIVIDE,
      -33,
      '.'
    ]);
    expect(inputValueHandler([6, DIVIDE, -33, '.'], NEGATIVE)).toEqual([
      6,
      DIVIDE,
      33,
      '.'
    ]);
  });

  it('pushes MULTIPLY and a negative sign after a closing par', () => {
    expect(
      inputValueHandler([OPENPAR, 5, DIVIDE, 2, CLOSEPAR], NEGATIVE)
    ).toEqual([OPENPAR, 5, DIVIDE, 2, CLOSEPAR, MULTIPLY, '-']);
  });

  it('pushes a negative sign after an opening par or an operator', () => {
    expect(inputValueHandler([OPENPAR], NEGATIVE)).toEqual([OPENPAR, '-']);
    expect(inputValueHandler([5, ADD], NEGATIVE)).toEqual([5, ADD, '-']);
  });
});