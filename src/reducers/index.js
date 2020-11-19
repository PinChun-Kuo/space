import { GET_DIGIT, CLEAN_DIGIT, CLEAN_ALL, UPDATE_SIGN } from './../constants'

export const initState = {
  digits: {
    current: '0',
    last: '0',
    screen: '0'
  }
}

export const reducer = (state, action) => {
  const { type, payload } = action;
  const { digits } = state;
  const { current } = digits;

  switch (type) {
    case GET_DIGIT: {
      const { digit } = payload;
      const hasPoint = current.indexOf('.') > 0;
      let num;

      if ((digit === '.') && hasPoint) {
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
        }
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
