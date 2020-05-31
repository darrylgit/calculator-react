import newValueHandler from './newValueHandler';
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
  DECIMAL
} from '../../constants';

describe('number inputs', () => {
  it('concatenates new non-zero numbers into the current index', () => {
    expect(newValueHandler([], 5)).toEqual([5]);
    expect(newValueHandler([5], 6)).toEqual([56]);
  });

  it('disallows multiple initial zeroes', () => {
    expect(newValueHandler([0], 0)).toEqual([0]);
  });
});

describe('operator inputs', () => {
  it('handles pushing operators', () => {
    expect(newValueHandler([23], ADD)).toEqual([23, ADD]);
  });

  it('disallows initial operators', () => {
    expect(newValueHandler([], DIVIDE)).toEqual([]);
    expect(newValueHandler([], MULTIPLY)).toEqual([]);
    expect(newValueHandler([], SUBTRACT)).toEqual([]);
    expect(newValueHandler([], ADD)).toEqual([]);
  });

  it('disallows multiple consecutive operators', () => {
    expect(newValueHandler(['23', ADD], ADD)).toEqual(['23', ADD]);
    expect(newValueHandler(['23', ADD], SUBTRACT)).toEqual(['23', SUBTRACT]);
  });
});

describe('CLEAR input', () => {
  it('clears values array when input is CLEAR', () => {
    expect(newValueHandler([432, DIVIDE, 4], CLEAR)).toEqual([]);
  });
});

describe('BACKSPACE input', () => {
  it('deletes operators', () => {
    expect(newValueHandler([1, ADD], BACKSPACE)).toEqual([1]);
  });

  it('deletes digits', () => {
    expect(newValueHandler([12], BACKSPACE)).toEqual([1]);
    expect(newValueHandler([13, ADD, 23], BACKSPACE)).toEqual([13, ADD, 2]);
  });

  it('deletes entire single-digit numbers', () => {
    expect(newValueHandler([1], BACKSPACE)).toEqual([]);
    expect(newValueHandler([13, ADD, 2], BACKSPACE)).toEqual([13, ADD]);
  });
});

describe('PARENTHESES input', () => {
  it('it pushs an opening parenthesis when array is empty', () => {
    expect(newValueHandler([], PARENTHESES)).toEqual([OPENPAR]);
  });

  describe('when current last value is a number', () => {
    it('pushes a MULTIPLY and opening parenthesis if there are no unclosed parentheses', () => {
      expect(newValueHandler([54], PARENTHESES)).toEqual([
        54,
        MULTIPLY,
        OPENPAR
      ]);
      expect(newValueHandler([54, DIVIDE, 6], PARENTHESES)).toEqual([
        54,
        DIVIDE,
        6,
        MULTIPLY,
        OPENPAR
      ]);
      expect(
        newValueHandler([OPENPAR, 54, ADD, 3, CLOSEPAR, ADD, 3], PARENTHESES)
      ).toEqual([OPENPAR, 54, ADD, 3, CLOSEPAR, ADD, 3, MULTIPLY, OPENPAR]);
    });

    it('pushes a MULTIPLY and opening parenthesis if number has no preceding operator', () => {
      expect(newValueHandler([OPENPAR, 54], PARENTHESES)).toEqual([
        OPENPAR,
        54,
        MULTIPLY,
        OPENPAR
      ]);
    });

    it('pushes a closing parenthesis if number has a preceding operator', () => {
      expect(newValueHandler([OPENPAR, 54, ADD, 3], PARENTHESES)).toEqual([
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
      expect(newValueHandler([54, '.'], PARENTHESES)).toEqual([
        54,
        MULTIPLY,
        OPENPAR
      ]);
      expect(newValueHandler([OPENPAR, 4, ADD, 5, '.'], PARENTHESES)).toEqual([
        OPENPAR,
        4,
        ADD,
        5,
        CLOSEPAR
      ]);
    });
  });

  describe('when current last value is a hanging negative', () => {
    it('coerces the negative to -1, and then pushes a MULTIPLY and an opening parentheses', () => {
      expect(newValueHandler(['-'], PARENTHESES)).toEqual([
        -1,
        MULTIPLY,
        OPENPAR
      ]);
      expect(newValueHandler([OPENPAR, '-'], PARENTHESES)).toEqual([
        OPENPAR,
        -1,
        MULTIPLY,
        OPENPAR
      ]);
      expect(
        newValueHandler([OPENPAR, 5, SUBTRACT, '-'], PARENTHESES)
      ).toEqual([OPENPAR, 5, SUBTRACT, -1, MULTIPLY, OPENPAR]);
      expect(
        newValueHandler(
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
      expect(newValueHandler([OPENPAR], PARENTHESES)).toEqual([
        OPENPAR,
        OPENPAR
      ]);
      expect(newValueHandler([5, ADD, OPENPAR], PARENTHESES)).toEqual([
        5,
        ADD,
        OPENPAR,
        OPENPAR
      ]);
    });
  });

  describe('when the current last value is an operator', () => {
    it('pushes an opening parenthesis', () => {
      expect(newValueHandler([5, ADD], PARENTHESES)).toEqual([5, ADD, OPENPAR]);
      expect(newValueHandler([OPENPAR, 5, SUBTRACT], PARENTHESES)).toEqual([
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
        newValueHandler([OPENPAR, 5, DIVIDE, 2, CLOSEPAR], PARENTHESES)
      ).toEqual([OPENPAR, 5, DIVIDE, 2, CLOSEPAR, MULTIPLY, OPENPAR]);
    });

    it('pushes a closing parenthesis if there are unclosed parentheses', () => {
      expect(
        newValueHandler(
          [OPENPAR, 5, ADD, OPENPAR, 6, MULTIPLY, 2, CLOSEPAR],
          PARENTHESES
        )
      ).toEqual([OPENPAR, 5, ADD, OPENPAR, 6, MULTIPLY, 2, CLOSEPAR, CLOSEPAR]);
    });

    //EDGE CASE
    it('pushes MULTIPLY and opens new parentheses if a closing parenthesis would be redundant', () => {
      expect(
        newValueHandler([OPENPAR, OPENPAR, 5, ADD, 6, CLOSEPAR], PARENTHESES)
      ).toEqual([OPENPAR, OPENPAR, 5, ADD, 6, CLOSEPAR, MULTIPLY, OPENPAR]);
    });
  });
});
