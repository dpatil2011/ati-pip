const initialState = {
    status: true,
}
export default SubmissionReducer = (state=initialState,action) => {
    switch(action.type){
        case 'setLoan':
            return {
                ...state,
                value:action.payload
            };
            case 'setStatus':
                console.log("Status:"+action.payload)
                return {
                    ...state,
                    status:action.payload
                };
        default:
            return state;
    }
   
}