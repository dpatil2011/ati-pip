const initialState = {
  mobileNo: null,
  accountNo:'',
  confirmData:[],
  accountDetail:[],
  payData:[],
  receiptData:[]
  }

export default topup = (state = initialState, action) => {
  switch (action.type) {
  
    case 'setMobileNo':
      return {
        ...state,

        mobileNo: action.payload
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
      case 'setReceiptData':
      return {
        ...state,
        payData: action.payload
      }
    
    default:
      return state
  }
}
