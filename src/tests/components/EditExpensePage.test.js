import React from 'react'
import { EditExpensePage } from '../../components/EditExpensePage'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'

let editExpense,removeExpense, historySpy, wrapper;

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    historySpy = {push:jest.fn()}
    wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense= {removeExpense} history={historySpy} expense={expenses[2]}/>)
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
      id: expenses[2].id
    });
  });