import React from 'react';
import getVisibleExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'
import { connect } from 'react-redux'
import numeral from 'numeral'

const ExpenseSummary = ({expenseCount, expenseTotal}) => (
    <div>
        {
            expenseCount.length < 2 ? (
                <h1>{`Viewing ${expenseCount.length} expense totalling ${numeral(expenseTotal/ 100).format('$0,0.00')}`}</h1>
            ) : (
                <h1>{`Viewing ${expenseCount.length} expenses totalling ${numeral(expenseTotal/ 100).format('$0,0.00')}`}</h1>
            )
        }
    </div>
)

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses,
        expenseTotal: getExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);