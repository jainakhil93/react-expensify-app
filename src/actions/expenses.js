import uuid from 'uuid'
import database from '../firebase/firebase'

// component calls action generators
// action generators return object
// component dispatched object
// redux store changes

// add_expense action
export const addExpense = (expense) => ({
    type:'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData
        const expense = {description, note, amount, createdAt}
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

// edit expense action
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}

// remove expense action
export const removeExpense = ({
    id
} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//startRemoveExpenses
export const startRemoveExpense = ( { id } = {}) => {
    return(dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${id}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }))
        })
    }
} 

//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

//startSetExpenses
export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = []
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
    }
}