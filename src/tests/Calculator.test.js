import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('Should be able to add 1 to 4 and get 5', () => {
    const button1 = container.getByTestId('number1');
    const operatorAdd = container.getByTestId('operator-add');
    const button4 = container.getByTestId('number4');
    fireEvent.click(button1);
    fireEvent.click(operatorAdd);
    fireEvent.click(button4);
    fireEvent.click(operatorAdd);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5')
  })

  it('Should be able to subtract 4 from 7 and get 3', () => {
    const button7 = container.getByTestId('number7');
    const operatorSubtract = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    fireEvent.click(button7);
    fireEvent.click(operatorSubtract);
    fireEvent.click(button4);
    fireEvent.click(operatorSubtract);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3')
  })

  it('Should be able to multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    const operatorMultiply = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    fireEvent.click(button3);
    fireEvent.click(operatorMultiply);
    fireEvent.click(button5);
    fireEvent.click(operatorMultiply);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15')
  })

  it('Should be able to divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const operatorDivide = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(operatorDivide);
    fireEvent.click(button7);
    fireEvent.click(operatorDivide);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3')
  })

  it('Should be able to concatenate multiple number button clicks', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('217')
  })

  it('Should be able to chain multiple operations together', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const button3 = container.getByTestId('number3');
    const button4 = container.getByTestId('number4');
    const operatorDivide = container.getByTestId('operator-divide');
    const operatorAdd = container.getByTestId('operator-add');
    const operatorMultiply = container.getByTestId('operator-multiply');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(operatorDivide);
    fireEvent.click(button7);
    fireEvent.click(operatorAdd);
    fireEvent.click(button4);
    fireEvent.click(operatorMultiply);
    fireEvent.click(button3);
    fireEvent.click(operatorAdd);
    
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('21')
  })
  it('Should be able to clear the running total without effecting the calculation', () => {
    const button2 = container.getByTestId('number2');
    const operatorAdd = container.getByTestId('operator-add');
    const clearRunningTotal = container.getByTestId('clear');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    fireEvent.click(button2);
    fireEvent.click(operatorAdd);
    fireEvent.click(button1);
    fireEvent.click(operatorAdd);
    fireEvent.click(clearRunningTotal)
    fireEvent.click(button7);
    fireEvent.click(operatorAdd);
    
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('10')
  })
})

