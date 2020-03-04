const initialState = {
  userData:null,
  pass:null,
  username:null,
  tenantId:'000000'
}

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setUser':
      return {
        ...state,

        userData: action.payload
      }
      case 'setUsername':
      return {
        ...state,

        username: action.payload
      }
    case 'setPass':
      return {
        ...state,

        pass: action.payload
      }
      case 'setTenantId':
      return {
        ...state,

        tenantId: action.payload
      }
      case 'setSavings':
          return {
            ...state,
    
            savings: action.payload
          }
          case 'setAccountData':
            return {
              ...state,
      
              accountData: action.payload
            }
    default:
      return state
  }
}