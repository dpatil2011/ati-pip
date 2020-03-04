const initialState = {
  currentStep: 0,
  taxNumber: '',
  taxName: '',
  taxAddress: '',
  username: '',
  email: '',
  mobile: '',
  country: '',
  province: '',
  district: '',
  village: '',
  rtwt: '',
  postalcode: '',
  address: '',
  male: true,
  female: false,
  fullname: '',
  selfie: '',
  idCard: '',
  signature: '',
  errorEmail: false,
  errorEmail1: false,
  account: false,
  email1: false,
  errorTaxNumber: false,
  errorIsTaxNumber: false,
  errorTaxName: false,
  errorTaxAddress: false,
  errorHandPhone: false,
  errorPhone: false,
  errorUserName: false,
  range: false,
  rangeDL: false,
  rangePa: false,
  rangeSc: false,
  rangeKi: false,
  errorIdentity: false,
  errorIdentityType: false,
  errorFullName: false,
  errorDate: false,
  errorReligion: false,
  errorMotherName: false,
  errorPostalCode: false,
  PostalCoderange: false,
  errorCountry: false,
  errorpro: false,
  errorDisc: false,
  errorAddress: false,
  errorVillage: false,
  errorVillageNumber: false,
  errorselfie: false,
  erroridCard: false,
  errorsignature: false,
  errorUserNameNumber: false,
  errorTaxNameNumber: false,
  errorAddressNumber: false,
  errorMotherNumber: false,
  errorFullnameNumber: false

}

// This is a reducer which listens to actions and modifies the state
export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Set_Email':
      console.log(state)
      console.log(action)
      return {
        ...state,

        email: action.payload
      }
    case 'Set_Mobile':
      return {
        ...state,
        mobile: action.payload
      }
    case 'Set_Username':
      return {
        ...state,
        username: action.payload
      }
    case 'NEXT':
      return {
        currentStep: state.currentStep + 1
      }
    case 'Set_TaxNumber':
      console.log(action)
      return {
        ...state,

        taxNumber: action.payload
      }
    case 'Set_TaxName':
      console.log(action)
      return {
        ...state,

        taxName: action.payload
      }
    case 'Set_TaxAddress':
      console.log(action)
      return {
        ...state,

        taxAddress: action.payload
      }
    case 'Set_Country':
      console.log(action)
      return {
        ...state,
        country: action.payload
      }
    case 'Set_Province':
      console.log(action)
      return {
        ...state,
        province: action.payload
      }
    case 'Set_District':
      console.log(action)
      return {
        ...state,
        district: action.payload
      }
    case 'Set_Village':
      console.log(action)
      return {
        ...state,
        village: action.payload
      }
    case 'Set_RTWT':
      console.log(action)
      return {
        ...state,
        rtwt: action.payload
      }
    case 'Set_Postalcode':
      console.log(action)
      return {
        ...state,
        postalcode: action.payload
      }
    case 'Set_Address':
      console.log(action)
      return {
        ...state,
        address: action.payload
      }
    case 'Set_IdentityType':
      // console.log(action)

      return {
        ...state,
        identityType: action.payload,
      };

    case 'Set_Identity':
      // console.log(action)
      return {
        ...state,
        identity: action.payload,
      };

    case 'Set_DateOfBirth':
      // console.log(action)
      return {
        ...state,
        dateOfBirth: action.payload,
      };

    case 'Set_Religion':
      // console.log(action)
      return {
        ...state,
        religion: action.payload,
      };

    case 'Set_Mother':
      // console.log(action)
      return {
        ...state,
        mother: action.payload,
      };

    case 'Set_Gender':
      console.log(state);

      console.log(action)
      return {
        ...state,
        male: action.payload.male,
        female: action.payload.female,
      };
    case 'Set_FullName':
      return {
        ...state,
        fullname: action.payload,
      };
    case 'SET_Selfie':
      return {
        ...state,
        selfie: action.payload,
      }
    case 'SET_IdCard':
      return {
        ...state,
        idCard: action.payload
      }
    case 'SET_Signature':
      return {
        ...state,
        signature: action.payload
      }
    case 'SET_ERROR_Email':
      return {
        ...state,
        errorEmail: true,
        errorEmail1: false,
        errorEmail2: true,
      }
    case 'SET_ERROR_Email1':
      return {
        ...state,
        errorEmail: false,
        errorEmail1: true,
        errorEmail2: false
      }
    case 'SET_ERROR_Email2':
      return {
        ...state,
        errorEmail: false,
        errorEmail1: false,
        errorEmail2: false
      }

    case 'SET_Error_TaxNumber':
      return {
        ...state,
        errorTaxNumber: true,
        errorIsTaxNumber: false,
        errorTaxNumber1: true,
      }
    case 'SET_Error_IsTaxNumber':
      return {
        ...state,
        errorIsTaxNumber: true,
        errorTaxNumber: false,
        errorTaxNumber: false

      }
    case 'SET_Error_NpwpNumber':
      return {
        ...state,
        errorIsTaxNumber: false,
        errorTaxNumber: false,
        errorTaxNumber1: false
      }
    case 'SET_Error_TaxName':
      return {
        ...state,

        errorTaxName: true,
        errorTaxName1: true,
        errorTaxNameNumber: false
      }
    case 'SET_Error_NpwpName':
      return {
        ...state,
        errorTaxName: false,
        errorTaxName1: false,
        errorTaxNameNumber: false
      }
    case 'SET_Error_TaxAddress':
      return {
        ...state,

        errorTaxAddress: true,
        errorTaxAddress1: true,
        errorTaxAddressNumber: false
      }
    case 'SET_Error_NpwpAddress':
      return {
        ...state,
        errorTaxAddress: false,
        errorTaxAddress1: false,
        errorTaxAddressNumber: false
      }
    case 'CHECK_Account':
      return {
        ...state,
        email1: state.errorEmail,
        email2: state.errorEmail1,
        name: state.errorUserName,
        handPhone: state.errorHandPhone,
        phone: state.errorPhone,
        number: state.errorUserNameNumber
      }
    case 'CHECK_Email':
      return {
        ...state,
        errorEmail: true,
      }
    case 'CHECK_Mobile':
      return {
        ...state,
        errorHandPhone: true,
      }
    case 'CHECK_Username':
      return {
        ...state,
        errorUserName: true,
      }
    case 'CHECK_NPWP':
      return {
        ...state,
        taxNumber1: state.errorTaxNumber,
        isTaxNumber: state.errorIsTaxNumber,
        taxname1: state.errorTaxName,
        taxAddress1: state.errorTaxAddress,
        TaxnameNumber: state.errorTaxNameNumber,
        TaxAddress: state.errorTaxAddressNumber

      }
    case 'CHECK_taxnumber':
      return {
        ...state,
        errorTaxNumber: true,

      }
    case 'CHECK_taxname':
      return {
        ...state,
        errorTaxName: true,

      }
    case 'CHECK_taxaddress':
      return {
        ...state,
        errorTaxAddress: true,

      }

    case 'SET_Error_ErrorHandPhone':
      return {
        ...state,
        errorHandPhone: true,
        errorPhone: false
      }
    case 'SET_Error_ErrorPhone':
      return {
        ...state,
        errorHandPhone: false,
        errorPhone: true,
      }
    case 'SET_Error_HandPhone':
      return {
        ...state,
        errorHandPhone: false,
        errorPhone: false,
      }
    case 'SET_Error_UserName':
      return {
        ...state,
        errorUserName: true,
        errorUserNameNumber: false
      }
    case 'SET_Error_ErrorName':
      return {
        ...state,
        errorUserName: false,
        errorUserNameNumber: false
      }
    case 'seterrorIdentity1':
      return {
        ...state,
        range: false,
        errorIdentity: true,
      };
    case 'seterrorIdentity2':
      return {
        ...state,
        range: true,
        errorIdentity: false,
      };
    case 'Error_seterrorIdentityDL':
      return {
        ...state,
        errorIdentity: false,
        rangeDL: true,
        range: false,
        rangePa: false,
        rangeSc: false,
        rangeKi: false,

      };
    case 'Error_seterrorIdentitySc':
      return {
        ...state,
        errorIdentity: false,
        rangeDL: false,
        range: false,
        rangePa: false,
        rangeSc: true,
        rangeKi: false,
      };
    case 'Error_seterrorIdentityPa':
      return {
        ...state,
        errorIdentity: false,
        rangeDL: false,
        range: false,
        rangePa: true,
        rangeSc: false,
        rangeKi: false,
      };
    case 'Error_seterrorIdentityKi':
      return {
        ...state,
        errorIdentity: false,
        rangeDL: false,
        range: false,
        rangePa: false,
        rangeSc: false,
        rangeKi: true,
      };
    case 'seterrorIdentity3':
      return {
        ...state,
        range: false,
        errorIdentity: false,
        rangeDL: false,

        rangePa: false,
        rangeSc: false,
        rangeKi: false,
      };
    case 'Error_setIdentityType':
      return {
        ...state,
        errorIdentityType: true,
      };
    case 'Error_setIdentityType1':
      return {
        ...state,
        errorIdentityType: false,
      };
    case 'Error_FullName':
      return {
        ...state,
        errorFullName: true,
      };
    case 'Error_FullName1':
      return {
        ...state,
        errorFullName: false,
      };
    case 'Error_DateOfBirth':
      return {
        ...state,
        errorDate: true,
      };
    case 'Error_DateOfBirth1':
      return {
        ...state,
        errorDate: false,
      };
    case 'Error_Religion':
      return {
        ...state,
        errorReligion: true,
      };
    case 'Error_Religion1':
      return {
        ...state,
        errorReligion: false,
      };
    case 'Error_Mother':
      return {
        ...state,
        errorMotherName: true,
        errorMotherNumber: false
      };
    case 'Error_Mother1':
      return {
        ...state,
        errorMotherName: false,
        errorMotherNumber: false
      };
    case 'CHECK_Personal':
      return {
        ...state,
        range1: state.range,
        identity1: state.errorIdentity,
        identityType1: state.errorIdentityType,
        fullname1: state.errorFullName,
        date1: state.errorDate,
        religion1: state.errorReligion,
        mother1: state.errorMotherName,
        motherNumber: state.errorMotherNumber,
        fullnameNumber: state.errorFullnameNumber,
      }
    case 'CHECK_identityType':
      return {
        ...state,
        errorIdentityType: true
      }
    case 'CHECK_identity':
      return {
        ...state,
        errorIdentity: true
      }
    case 'CHECK_dateofbirth':
      return {
        ...state,
        errorDate: true
      }
    case 'CHECK_religion':
      return {
        ...state,
        errorReligion: true
      }
    case 'CHECK_mother':
      return {
        ...state,
        errorMotherName: true,
        errorMotherNumber: false
      }
    case 'CHECK_fullname':
      return {
        ...state,
        errorFullName: true,
        errorFullnameNumber: false
      }

    case 'CHECK_Address':
      return {
        ...state,
        errorPostalCodeX: state.errorPostalCode,
        PostalCoderangeX: state.PostalCoderange,
        errorCountryX: state.errorCountry,
        errorproX: state.errorpro,
        errorDiscX: state.errorDisc,
        errorAddressX: state.errorAddress,
        errorVillageX: state.errorVillage,
        villageNumber: state.errorVillageNumber,
        addressNumber: state.errorAddressNumber

      }
    case 'CHECK_Country':
      return {
        ...state,
        errorCountry: true
      }
    case 'CHECK_province':
      return {
        ...state,
        errorpro: true
      }
    case 'CHECK_village':
      return {
        ...state,
        errorVillage: true
      }
    case 'CHECK_district':
      return {
        ...state,
        errorDisc: true
      }
    case 'CHECK_postalcode':
      return {
        ...state,
        errorPostalCode: true
      }
    case 'CHECK_address':
      return {
        ...state,
        errorAddress: true
      }
    case 'errorPostalCode':
      return {
        ...state,
        errorPostalCode: true,
        PostalCoderange: false,
      }
    case 'errorPostalCode1':
      return {
        ...state,
        errorPostalCode: false,
        PostalCoderange: true,
      }
    case 'errorPostalCode2':
      return {
        ...state,
        errorPostalCode: false,
        PostalCoderange: false,
      }
    case 'errorCountry':
      return {
        ...state,
        errorCountry: true,

      }
    case 'errorCountry1':
      return {
        ...state,
        errorCountry: false,
      }
    case 'SET_Error_ErrorAddress':
      return {
        ...state,
        errorAddress: true,
        errorAddressNumber: false
      }
    case 'SET_Error_ErrorAdd':
      return {
        ...state,
        errorAddress: false,
        errorAddressNumber: false
      }
    case 'SET_Error_ErrorVillage':
      return {
        ...state,
        errorVillage: true,
        errorVillageNumber: false
      }
    case 'SET_Error_ErrorVill':
      return {
        ...state,
        errorVillage: false,
        errorVillageNumber: false
      }
    case 'errorPro':
      return {
        ...state,
        errorpro: true,

      }
    case 'errorPro2':
      return {
        ...state,
        errorpro: false,
      }
    case 'errorDisc':
      return {
        ...state,
        errorDisc: true,

      }
    case 'errorDisc2':
      return {
        ...state,
        errorDisc: false,
      }
    case 'CHECK_selfie':
      return {
        ...state,
        errorselfie: true,
      }
    case 'CHECK_fileupload':
      return {
        ...state,
        errorselfie: true,
      }
    case 'Set_Error_Username_Number':
      return {
        ...state,
        errorUserNameNumber: true,
        errorUserName: false
      }
    case 'Set_Error_TaxName_Number':
      return {
        ...state,
        errorTaxNameNumber: true,
        errorTaxName: false,
        errorTaxName1: false
      }
    case 'Set_Error_TaxAddress_Number':
      return {
        ...state,
        errorTaxAddress: false,
        errorTaxAddress1: false,
        errorTaxAddressNumber: true

      }
    case 'Set_Error_Village_Number':
      return {
        ...state,
        errorVillage: false,
        errorVillageNumber: true
      }
    case 'Set_Error_Address_Number':
      return {
        ...state,
        errorAddress: false,
        errorAddressNumber: true
      }
    case 'Set_Error_Mother_Number':
      return {
        ...state,
        errorMotherName: false,
        errorMotherNumber: true
      }
    case 'Set_Error_Fullname_Number':
      return {
        ...state,
        errorFullName: false,
        errorFullnameNumber: false
      }
    default:
      return state
  }
}
