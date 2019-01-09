// set_text_filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// sort_by_amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

//sort by date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})


// set_start_date
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});
// set_end_date
export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});