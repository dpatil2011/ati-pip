const initialState = {
    cellPhone: '',
    product: [],
    accountDetail: '',
    payment: ''
}

export default DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Account_Detail':
            return {
                ...state,
                accountDetail: action.payload
            }
        case 'Cell_Phone':
            return {
                ...state,
                cellPhone: action.payload
            }
        case 'Set_product':
            return {
                ...state,
                product: action.payload
            }
        case 'Set_Payment':
            return {
                ...state,
                payment: action.payload
            }
        default:
            return state;
    }

};