import { GET_DIGIT, GET_OPERATOR, CALCULATE_RESULT, CLEAN_DIGIT, CLEAN_ALL, UPDATE_SIGN } from "./../constants";

export const getDigit = digit => ({
  type: GET_DIGIT,
  payload: { digit }
})

export const getOperator = operator => ({
  type: GET_OPERATOR,
  payload: { operator }
})

export const calculateResult = () => ({
  type: CALCULATE_RESULT,
  payload: {}
})

export const cleanDigit = () => ({
  type: CLEAN_DIGIT,
  payload: {}
})

export const cleanAll = () => ({
  type: CLEAN_ALL,
  payload: {}
})

export const updateSign = () => ({
  type: UPDATE_SIGN,
  payload: {}
})
