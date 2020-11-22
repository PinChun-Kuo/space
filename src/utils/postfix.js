import { OPERATOR_ADDITION, OPERATOR_SUBTRACTION, OPERATOR_MULTIPLICATION, OPERATOR_DIVISION } from './../constants/operators'
import Stack from './stack'

const operators = `${OPERATOR_ADDITION}${OPERATOR_SUBTRACTION}${OPERATOR_MULTIPLICATION}${OPERATOR_DIVISION}`;

const getOperatorPriority = operator => {
  switch (operator) {
    case OPERATOR_MULTIPLICATION:
    case OPERATOR_DIVISION:
      return 2;
    case OPERATOR_ADDITION:
    case OPERATOR_SUBTRACTION:
      return 1;
    default:
      return 0;
  }
}

export const infixToPostfix = infixArr => {
  const postfixArr = []
  const stack = new Stack();

  infixArr.forEach(item => {
    if (operators.indexOf(item) < 0) {
      postfixArr.push(item);
    } else {
      while (!stack.isEmpty() && getOperatorPriority(stack.peek() > getOperatorPriority(item))) {
        postfixArr.push(stack.pop());
      }

      stack.push(item);
    }
  })

  while (!stack.isEmpty()) {
    postfixArr.push(stack.pop());
  }

  return postfixArr;
}

export const calculatePostfix = postfixArr => {
  const stack = new Stack();

  postfixArr.forEach(item => {
    if (operators.indexOf(item) < 0) {
      stack.push(item);
    } else {
      const operand2 = stack.pop();
      const operand2DecimalLength = (operand2.split('.')[1] || '').length;

      const operand1 = stack.pop();
      const operand1DecimalLength = (operand1.split('.')[1] || '').length;

      const maxDecimalLength = Math.max(operand1DecimalLength, operand2DecimalLength);
      const baseNum = Math.pow(10, maxDecimalLength);

      const num2 = Number(operand2) * baseNum;
      const num1 = Number(operand1) * baseNum;

      switch (item) {
        case '+':
          stack.push(String((num1 + num2) / baseNum));
          break;
        case '-':
          stack.push(String((num1 - num2) / baseNum));
          break;
        case 'x':
          stack.push(String((num1 * num2) / baseNum));
          break;
        case '÷':
          stack.push(String((num1 / num2) / baseNum));
          break;
        default:
          break;
      }
    }
  })

  return stack.pop();
}
