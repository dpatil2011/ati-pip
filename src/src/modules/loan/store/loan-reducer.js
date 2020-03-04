const initialState = {
    LoanData: ''
}
export default LoanReducer = (state=initialState,action) => {
    switch(action.type){
        case 'setLoan':
            return {
                ...state,
                LoanData:action.payload
            };
            case 'setLoanDetails':
                console.log("A="+JSON.stringify(action.payload))
                return {
                    ...state,
                    LoanDetails:action.payload
                };
                case 'setEstimateInstallment':
                        return {
                            ...state,
                            EstimateInstallment:action.payload
                        };
                        case 'setAccountDetails':
                            console.log("D="+JSON.stringify(action.payload));
                        return {
                            ...state,
                            AccountDetails:action.payload
                        };
                        case 'setMonth':
                                console.log("D="+JSON.stringify(action.payload));
                            return {
                                ...state,
                                month:action.payload
                            };
                            case 'setLoanAmount':
                                    console.log("D="+JSON.stringify(action.payload));
                                return {
                                    ...state,
                                    loanAmount:action.payload
                                };
        default:
            return state;
    }
   
}