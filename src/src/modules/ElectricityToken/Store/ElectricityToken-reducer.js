const initialState = {
  accountNo: '',
};

  // This is a reducer which listens to actions and modifies the state
  export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Account_No':
      return {
        ...state,

        accountNo: action.payload,
      };
      case 'Account_Balance':
        return {
          ...state,

          accountBalance: action.payload,
        };
        case 'ShortProduct_Name':
        return {
          ...state,

          shortProductName: action.payload,
        };
        case 'Account_Detail':
            return {
              ...state,
              accountDetail: action.payload,
            };
            case 'Customer_Id':
              return {
                ...state,
                customerId: action.payload,
              };
              case 'Nominal_Transfer':
                return {
                  ...state,
                  nominalTransfer: action.payload,
                };
      default:
        return state;
    }
  };
