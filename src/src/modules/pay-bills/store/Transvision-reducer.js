const initialState = {
  accountNo: '',
 
  bank:[],
  accountNumber:'',
  phonenumber:"",
  errorHandPhone: "",
                    errorPhone: "",
                    accountNo:''
};

  // This is a reducer which listens to actions and modifies the state
  export default transferreducer = (state = initialState, action) => {
    switch (action.type) {
       
        case 'Account_Detail':
            return {
              ...state,
              accountDetail: action.payload,
            };
            case 'PhoneNumber':
                console.log("phonenumber"+action.payload)
              return {
                ...state,
                phonenumber: action.payload,
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