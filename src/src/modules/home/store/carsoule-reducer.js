
// This is the default state of the app i.e. when the app starts for the first time
const initialState = {
  id: "",
  //     imageId: "",
  //       name: "",
  //       fileName: "",
  //       size: "",
  //       type: "",
  //       description: "",
  //       orderNumber: "",
  //       title: "",
  //       bodyText: "",
  //       location: "",
  //       makeUpLocation: "",
  //       storageType: "",
  //       headerImageLocation: "",
  //       headerImageMakeUpLocation: "",
  //       headerImageStorageType: ""
  ImageResponse: null
}

// This is a reducer which listens to actions and modifies the state
export default carouselreducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Set_Id':
      console.log(state)
      console.log(action)
      return {
        ...state,

        id: action.payload
      }
    // case 'Set_ImageId':
    //   return {
    //     ...state,
    //     imageId: action.payload
    //   }

    // case 'Set_Name':
    //   console.log(action)
    //   return {
    //     ...state,

    //     name: action.payload
    //   }
    //   case 'Set_FileName':
    //   return {
    //     ...state,
    //     fileName: action.payload
    //   }

    // case 'Set_Size':
    //   console.log(action)
    //   return {
    //     ...state,

    //     size: action.payload
    //   }
    // case 'Set_Type':
    //   console.log(action)
    //   return {
    //     ...state,

    //     type: action.payload
    //   }
    // case 'Set_Description':
    //   console.log(action)
    //   return {
    //     ...state,
    //     description: action.payload
    //   }
    // case 'Set_OrderNumber':
    //   console.log(action)
    //   return {
    //     ...state,
    //     orderNumber: action.payload
    //   }
    // case 'Set_Title':
    //   console.log(action)
    //   return {
    //     ...state,
    //     title: action.payload
    //   }
    // case 'Set_BodyText':
    //   console.log(action)
    //   return {
    //     ...state,
    //     bodyText: action.payload
    //   }
    // case 'Set_Location':
    //   console.log(action)
    //   return {
    //     ...state,
    //     location: action.payload
    //   }
    // case 'Set_MakeUpLocation':
    //   console.log(action)
    //   return {
    //     ...state,
    //     makeUpLocation: action.payload
    //   }
    // case 'Set_StorageType':
    //   console.log(action)
    //   return {
    //     ...state,
    //     storageType: action.payload
    //   }
    // case 'Set_HeaderImageLocation':
    //   // console.log(action)

    //   return {
    //     ...state,
    //     headerImageLocation: action.payload,
    //   };

    // case 'Set_HeaderImageMakeUpLocation':
    //   // console.log(action)
    //   return {
    //     ...state,
    //     headerImageMakeUpLocation: action.payload,
    //   };

    // case 'Set_HeaderImageStorageType':
    //   // console.log(action)
    //   return {
    //     ...state,
    //     headerImageStorageType: action.payload,
    //   };
    case 'Set_Response':
      console.log(action.payload)
      return {
        ...state,
        ImageResponse: action.payload,
      };
    default:
      return state
  }
}
