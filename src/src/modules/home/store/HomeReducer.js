const initialState = {
  agent: "0",
  account:null
}

export default home = (state = initialState, action) => {
  switch (action.type) {

    case 'setAgent':
      return {
        ...state,

        agent: action.payload
      }
      case 'setQinfo':
      return {
        ...state,

        Qinfo: action.payload
      }
      case 'setQamount':
        console.log(action.payload)
      return {
        ...state,
        Qamount: action.payload
      }
      case 'setCashieramount':
        console.log(action.payload)
      return {
        ...state,
        Cashieramount: action.payload
      }
      case 'setCashinAmount':
        console.log(action.payload)
      return {
        ...state,
        CashinAmount: action.payload
      }
      case 'setsavingsAccounts':
      return {
        ...state,

        account: action.payload
      }
    default:
      return state
  }
}
