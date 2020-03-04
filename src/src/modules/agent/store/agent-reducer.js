
const initialState = {
    agent:""
}

export default AgentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Set_Agent':
            return {
                ...state,
                agent: action.payload
            }
        default:
            return state;
    }
}