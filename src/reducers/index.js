import { GET_DIGIT, GET_OPERATOR, CALCULATE_RESULT, CLEAN_DIGIT, CLEAN_ALL, UPDATE_SIGN } from './../constants';
import { OPERATOR_ADDITION, OPERATOR_SUBTRACTION } from './../constants/operators';
import { infixToPostfix, calculatePostfix } from "./../utils/postfix";

export const initState = {
  digits: {
    current: '0',
    last: '0',
    screen: '0'
  },
  formula: [],
  operator: null,
  operated: false, // Have the digit been calculated or not
  canCalculate: true // Can calculate when click operator (+/-)
}

export const reducer = (state, action) => {
  const { type, payload } = action;
  const { digits, formula, operator, operated, canCalculate } = state;
  const { current, last } = digits;

  switch (type) {
    case GET_DIGIT: {
      const { digit } = payload;
      const hasPoint = current.indexOf('.') > 0;
      let num;

      if (operated) {
        num = digit;
      } else if ((digit === '.') && hasPoint) {
        num = current;
      } else if ((digit === '.') && !hasPoint) {
        num = current + digit;
      } else if ((digit === '0') && hasPoint) {
        num = current + digit;
      } else {
        num = String(BigInt(current + digit))
      }

      return {
        ...state,
        digits: {
          ...digits,
          current: num,
          screen: num
        },
        operated: false,
        canCalculate: true
      }
    }
    case GET_OPERATOR: {
      const symbol = payload.operator;

      if (canCalculate && ((symbol === OPERATOR_ADDITION) || (symbol === OPERATOR_SUBTRACTION))) {
        const newFormula = formula.slice();
        newFormula.push(operator, current);

        const postfixArr = infixToPostfix(newFormula);
        const result = calculatePostfix(postfixArr);

        return {
          ...state,
          digits: {
            ...digits,
            last: result,
            screen: result
          },
          formula: [result],
          operator: symbol,
          operated: true
        };
      } else {
        return {
          ...state,
          digits: {
            ...digits,
            current: last
          },
          operator: symbol,
          operated: true
        };
      }
    }
    case CALCULATE_RESULT: {
      if (!operator) {
        return {
          ...state,
          formula: [current],
        };
      } else {
        const newFormula = formula.slice();
        newFormula.push(operator, current);

        const postfixArr = infixToPostfix(newFormula);
        const result = calculatePostfix(postfixArr);

        return {
          ...state,
          digits: {
            ...digits,
            last: result,
            screen: result
          },
          formula: [result],
          operated: false,
          canCalculate: false
        };
      }
    }
    case UPDATE_SIGN: {
      const num = String(BigInt(current) * BigInt(-1));

      return {
        ...state,
        digits: {
          ...digits,
          current: num,
          screen: num
        }
      }
    }
    case CLEAN_DIGIT:
      return {
        ...state,
        digits: {
          ...digits,
          current: '0',
          screen: '0'
        }
      }
    case CLEAN_ALL:
    default:
      return initState;
  }
}
