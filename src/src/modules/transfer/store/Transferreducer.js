const initialState = {
  accountNo: '',

  bank:[],
  accountNumber:'',
  number:'',
  period:"",
};

  // This is a reducer which listens to actions and modifies the state
  export default transferreducer = (state = initialState, action) => {
    switch (action.type) {
       
        case 'Account_Detail':
            return {
              ...state,
              accountDetail: action.payload,
            };
            case 'Bank_Detail':
              return {
                ...state,
                bank: action.payload,
              };
              case 'AccountNumber_Data':
                  console.log("bank"+ action.payload)

                  return {
                    ...state,
                    accountNumber: action.payload,
                  };
                  case 'NewBank_Detail':
                    console.log("bank"+ action.payload)

                    return {
                      ...state,
                      newBankDetail: action.payload,
                    };
                    case 'Month_Detail':
                        console.log("bank"+ action.payload)
    
                        return {
                          ...state,
                          period: action.payload,
                        };
                        case 'BPJSKS_Detail':
                         // alert("On")
                            console.log("bank"+ action.payload)
        
                            return {
                              ...state,
                              number: action.payload,
                            };
                            case 'Account_No':
                                return {
                                  ...state,
                          
                                  accountNo: action.payload,
                                };
      default:
        return state;
    }
  };