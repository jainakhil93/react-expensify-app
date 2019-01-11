export default (expenses) => {
    return expenses.reduce((count, expense) => count + expense.amount, 0)
}