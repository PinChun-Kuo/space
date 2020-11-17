import React from 'react';

import { OPERATOR_CLEAN_ALL, OPERATOR_UPDATE_SIGN, OPERATOR_PERCENTAGE, OPERATOR_ADDITION, OPERATOR_SUBTRACTION, OPERATOR_MULTIPLICATION, OPERATOR_DIVISION, OPERATOR_EQUAL } from './../constants/operators';

import Button from './button';

const functionArr = [OPERATOR_CLEAN_ALL, OPERATOR_UPDATE_SIGN, OPERATOR_PERCENTAGE]
const digitArr = ['0', '.', '1', '2', '3', '4' ,'5' ,'6' , '7', '8', '9'];
const operatorArr = [OPERATOR_DIVISION, OPERATOR_MULTIPLICATION, OPERATOR_SUBTRACTION, OPERATOR_ADDITION, OPERATOR_EQUAL];

const Computer = () => (
  <div className='computer-wrapper'>
    <div className='computer-background'></div>
    <div className='computer-content'>
      <div className='computer-screen'>
        Screen
      </div>
      <div className='computer-buttons'>
        <div className='computer-buttons__left-side'>
          <div className='computer-buttons__left-side__function-menu'>
            {
              functionArr.map(func => (
                <Button
                  key={`function-button-${func}`}
                  classes={'computer-button--circle function-button'}
                  content = {func}
                />
              ))
            }
          </div>
          <div className='computer-buttons__left-side__digits'>
          {
            digitArr.map(digit => (
              <Button
                key={`digit-button-${digit}`}
                classes={`digit-button ${(digit === '0') ? 'computer-button--oval' : 'computer-button--circle'}`}
                content = {digit}
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
              />
            ))
          }
        </div>
      </div>
    </div>
  </div>
)

export default Computer;
