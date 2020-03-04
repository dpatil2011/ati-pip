
export default (state = null, action)=>{
   
   switch(action.type){
       case 'Set_Email':
          // console.log(action)
          return{ ...state, 

           email: action.payload
        }
        case 'Set_Mobile':
            return{
                ...state,
                mobile: action.payload
            }
            case 'Set_Username':
            return{
                ...state,
                username: action.payload
            }
        default:
            return state;
   }
}
