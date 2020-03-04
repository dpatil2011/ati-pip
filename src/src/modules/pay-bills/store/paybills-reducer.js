const initialState = {
    headerName: "Demo",
    headerLink:"NAI",
    plnNumber: null,
    accountNo:'',
    confirmData:[],
    accountDetail:[],
    payData:[]
  }
  
  export default paybills = (state = initialState, action) => {
    switch (action.type) {
  
      case 'setHeaderName':
        return {
          ...state,
  
          headerName: action.payload
        }
        case 'setHeaderLink':
        return {
          ...state,
          headerLink: action.payload
        }
        case 'setPlnNumber':
        return {
          ...state,
  
          plnNumber: action.payload
        }
      
      case 'setAccountNo':
        return {
          ...state,
  
          accountNo: action.payload
        }
        case 'setConfirmData':
          return {
            ...state,
    
            confirmData: action.payload
          }
        case 'setAccountDetail':
          return {
            ...state,
    
            accountDetail: action.payload
          }
      case 'setPayData':
        return {
          ...state,
          payData: action.payload
        }
      default:
        return state
    }
  }
  