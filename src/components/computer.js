import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import { OPERATOR_CLEAN_DIGIT, OPERATOR_CLEAN_ALL, OPERATOR_UPDATE_SIGN, OPERATOR_PERCENTAGE, OPERATOR_ADDITION, OPERATOR_SUBTRACTION, OPERATOR_MULTIPLICATION, OPERATOR_DIVISION, OPERATOR_EQUALITY } from './../constants/operators';
import { initState, reducer } from './../reducers';
import { getDigit, getOperator, calculateResult, cleanDigit, cleanAll, updateSign } from './../actions';

import Button from './button';

const digitArr = ['0', '.', '1', '2', '3', '4' ,'5' ,'6' , '7', '8', '9'];
const operatorArr = [OPERATOR_DIVISION, OPERATOR_MULTIPLICATION, OPERATOR_SUBTRACTION, OPERATOR_ADDITION, OPERATOR_EQUALITY];

const Computer = ({ closeComputer }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { digits: { current, screen } } = state;

  const handleDigitClick = digit => () => dispatch(getDigit(digit));
  const handleOperatorClick = operator => () => dispatch(getOperator(operator));
  const handleCalculateResult = () => dispatch(calculateResult());
  const handleCleanDigit = () => dispatch(cleanDigit());
  const handleCleanAll = () => dispatch(cleanAll());
  const handleUpdateSign = () => dispatch(updateSign());

  return (
    <div className='computer-wrapper'>
      <div className='computer-background' onClick={closeComputer}></div>
      <div className='computer-content'>
        <div className='computer-screen'>
          {screen}
        </div>
        <div className='computer-buttons'>
          <div className='computer-buttons__left-side'>
            <div className='computer-buttons__left-side__function-menu'>
              <Button
                classes={'computer-button--circle function-button'}
                content = {(current === '0') ? OPERATOR_CLEAN_ALL : OPERATOR_CLEAN_DIGIT}
                handleClick = {(current === '0') ? handleCleanAll : handleCleanDigit}
              />
              <Button
                classes={'computer-button--circle function-button'}
                content = {OPERATOR_UPDATE_SIGN}
                handleClick = {handleUpdateSign}
              />
              <Button
                classes={'computer-button--circle function-button'}
                content = {OPERATOR_PERCENTAGE}
              />
            </div>
            <div className='computer-buttons__left-side__digits'>
            {
              digitArr.map(digit => (
                <Button
                  key={`digit-button-${digit}`}
                  classes={`digit-button ${(digit === '0') ? 'computer-button--oval' : 'computer-button--circle'}`}
                  content = {digit}
                  handleClick={handleDigitClick(digit)}
                />
              ))
            }
            </div>
          </div>
          <div className='computer-buttons__right-side'>
            {
              operatorArr.map(operator => (
                <Button
                  key={`operator-button-${operator}`}
                  classes={'computer-button--circle operator-button'}
                  content = {operator}
                  handleClick={(operator === OPERATOR_EQUALITY) ? handleCalculateResult : handleOperatorClick(operator)}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

Computer.propTypes = {
  closeComputer: PropTypes.func.isRequired
}

export default Computer;
