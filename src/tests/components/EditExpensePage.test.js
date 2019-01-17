import React from 'react'
import { EditExpensePage } from '../../components/EditExpensePage'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'

let startEditExpense,startRemoveExpense, historySpy, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    historySpy = {push:jest.fn()}
    wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpense= {startRemoveExpense} history={historySpy} expense={expenses[2]}/>)
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
      id: expenses[2].id
    });
  });