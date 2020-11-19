import { GET_DIGIT, CLEAN_DIGIT, CLEAN_ALL, UPDATE_SIGN } from "./../constants";

export const getDigit = digit => ({
  type: GET_DIGIT,
  payload: { digit }
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
