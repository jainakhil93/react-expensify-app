import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[1], expenses[2]])
})

test('should add an expense', () => {
    const expense = {
        id:'4',
        description: 'water',
        note: '',
        amount: 95,
        createdAt: 10
    }

    const state = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense});
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'water'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('water')
})

test('should not edit an expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'water'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('gum')
})