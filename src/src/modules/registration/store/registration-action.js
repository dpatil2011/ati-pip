export const nextStep = () => ({
    type: NEXT,
    data: 'hrlloooo'
})
export const setEmail = (email) => ({
    type: 'Set_Email',
    payload: email
});
export const setMobile = (mobile) => ({
    type: 'Set_Mobile',
    payload: mobile
});
export const setUsername = (username) => ({
    type: 'Set_Username',
    payload: username
});
export const SET_VALUE = 'setValues';

export const setCountry = (country) => ({
    type: 'Set_Country',
    payload: country
});
export const setProvince = (province) => ({
    type: 'Set_Province',
    payload: province
});
export const setDistrict = (district) => ({
    type: 'Set_District',
    payload: district
});
export const setVillage = (village) => ({
    type: 'Set_Village',
    payload: village
});
export const setRTWT = (rtwt) => ({
    type: 'Set_RTWT',
    payload: rtwt
});
export const setPostalcode = (postalcode) => ({
    type: 'Set_Postalcode',
    payload: postalcode
});
export const setAddress = (address) => ({
    type: 'Set_Address',
    payload: address
});
export const setIdentityType = identityType => ({
    type: 'Set_IdentityType',
    payload: identityType,
});

export const setIdentity = identity => ({
    type: 'Set_Identity',
    payload: identity,
});

export const setDateOfBirth = dateOfBirth => ({
    type: 'Set_DateOfBirth',
    payload: dateOfBirth,
});

export const setReligion = religion => ({
    type: 'Set_Religion',
    payload: religion,
});

export const setMother = mother => ({
    type: 'Set_Mother',
    payload: mother,
});

export const setFullName = fullname => ({
    type: 'Set_FullName',
    payload: fullname,
});

export const setGender = (male, female) => ({
    type: 'Set_Gender',
    payload: {
        male,
        female,
    },
});
export const setTaxNumber = (taxNumber) => ({
    type: 'Set_TaxNumber',
    payload: taxNumber
});
export const setTaxName = (taxName) => ({
    type: 'Set_TaxName',
    payload: taxName
});
export const setTaxAddress = (taxAddress) => ({
    type: 'Set_TaxAddress',
    payload: taxAddress
});
export const setSelfie = (selfie) => ({
    type: 'SET_Selfie',
    payload: selfie
})
export const setIdCard = (idCard) => ({
    type: 'SET_IdCard',
    payload: idCard
})
export const setSignature = (signature) => ({
    type: 'SET_Signature',
    payload: signature
})
export const setErrorEmail = () => ({
    type: 'SET_ERROR_Email'
})
export const setErrorEmail1 = () => ({
    type: 'SET_ERROR_Email1'
})
export const setErrorEmail2 = () => ({
    type: 'SET_ERROR_Email2'
})
export const setEmailNext = () => ({
    type: 'SET_Email_Next'
})

export const setErrorTaxNumber = () => ({
    type: 'SET_Error_TaxNumber'
})
export const setIsErrorTaxNumber = () => ({
    type: 'SET_Error_IsTaxNumber'
})
export const setNpwpNumber = () => ({
    type: 'SET_Error_NpwpNumber'
})
export const setErrorTaxName = () => ({
    type: 'SET_Error_TaxName'
})
export const setNpwpName = () => ({
    type: 'SET_Error_NpwpName'
})
export const setErrorTaxAddress = () => ({
    type: 'SET_Error_TaxAddress'
})
export const setNpwpAddress = () => ({
    type: 'SET_Error_NpwpAddress'
})
export const checkAccount = () => ({
    type: 'CHECK_Account'
})
export const checkEmail = () => ({
    type: 'CHECK_Email'
})
export const checkMobile = () => ({
    type: 'CHECK_Mobile'
})
export const checkUsername = () => ({
    type: 'CHECK_Username'
})
export const checkNPWP = () => ({
    type: 'CHECK_NPWP'
})
export const checktaxnumber = () => ({
    type: 'CHECK_taxnumber'
})
export const checktaxname = () => ({
    type: 'CHECK_taxname'
})
export const checktaxaddress = () => ({
    type: 'CHECK_taxaddress'
})
export const setErrorHandPhone = () => ({
    type: 'SET_Error_ErrorHandPhone'

})
export const setErrorPhone = () => ({
    type: 'SET_Error_ErrorPhone'
})
export const setHandPhone = () => ({
    type: 'SET_Error_HandPhone'
})
export const setErrorUserName = () => ({
    type: 'SET_Error_UserName'
})
export const setName = () => ({
    type: 'SET_Error_ErrorName'
})
export const seterrorIdentity1 = () => ({
    type: 'seterrorIdentity1',
});
export const seterrorIdentity2 = () => ({
    type: 'seterrorIdentity2',
});

export const seterrorIdentity3 = () => ({
    type: 'seterrorIdentity3',
});

export const Error_setIdentityType = () => ({
    type: 'Error_setIdentityType',
});
export const Error_setIdentityType1 = () => ({
    type: 'Error_setIdentityType1',
});
export const Error_FullName = () => ({
    type: 'Error_FullName',
});
export const Error_FullName1 = () => ({
    type: 'Error_FullName1',
});
export const Error_DateOfBirth = () => ({
    type: 'Error_DateOfBirth',
});
export const Error_DateOfBirth1 = () => ({
    type: 'Error_DateOfBirth1',
});
export const Error_Religion = () => ({
    type: 'Error_Religion',
});
export const Error_Religion1 = () => ({
    type: 'Error_Religion1',
});
export const Error_Mother = () => ({
    type: 'Error_Mother',
});
export const Error_Mother1 = () => ({
    type: 'Error_Mother1',
});
export const checkPersonal = () => ({
    type: 'CHECK_Personal'
})
export const checkidentityType = () => ({
    type: 'CHECK_identityType'
})
export const checkidentity = () => ({
    type: 'CHECK_identity'
})
export const checkdateofbirth = () => ({
    type: 'CHECK_dateofbirth'
})
export const checkreligion = () => ({
    type: 'CHECK_religion'
})
export const checkmother = () => ({
    type: 'CHECK_mother'
})
export const checkfullname = () => ({
    type: 'CHECK_fullname'
})
export const errorPostalCode = () => ({
    type: 'errorPostalCode',

})
export const errorPostalCode1 = () => ({
    type: 'errorPostalCode1',

})
export const errorPostalCode2 = () => ({
    type: 'errorPostalCode2',

})
export const errorCountry = () => ({
    type: 'errorCountry',

})
export const errorCountry1 = () => ({
    type: 'errorCountry1',

})
export const setErrorAddress = () => ({
    type: 'SET_Error_ErrorAddress'
})
export const setErrorAdd = () => ({
    type: 'SET_Error_ErrorAdd'
})
export const setErrorVillage = () => ({
    type: 'SET_Error_ErrorVillage'
})
export const setvill = () => ({
    type: 'SET_Error_ErrorVill'
})
export const errorPro = () => ({
    type: 'errorPro',

})
export const errorPro2 = () => ({
    type: 'errorPro2',

})
export const errorDisc = () => ({
    type: 'errorDisc',

})
export const errorDisc2 = () => ({
    type: 'errorDisc2',

})
export const checkAddress = () => ({
    type: 'CHECK_Address',

})
export const checkcountry = () => ({
    type: 'CHECK_Country',

})
export const checkprovince = () => ({
    type: 'CHECK_province',

})
export const checkvillage = () => ({
    type: 'CHECK_village',

})
export const checkdistrict = () => ({
    type: 'CHECK_district',

})
export const checkpostalcode = () => ({
    type: 'CHECK_postalcode',

})
export const checkaddress = () => ({
    type: 'CHECK_address',

})
export const checkselfie = () => ({
    type: 'CHECK_selfie',

})
export const checkidCard = () => ({
    type: 'CHECK_idCard',

})
export const checksignature = () => ({
    type: 'CHECK_signature',

})
export const errorselfie = () => ({
    type: 'ERROR_selfie',

})
export const erroridCard = () => ({
    type: 'ERROR_idCard',

})
export const errorsignature = () => ({
    type: 'ERROR_signature',

})
export const checkfileupload = () => ({
    type: 'CHECK_fileupload',
})
export const setErrorUsernameNumber = () => ({
    type: 'Set_Error_Username_Number',
})
export const setErrorTaxNameNumber = () => ({
    type: 'Set_Error_TaxName_Number'
})
export const setErrorTaxAddressNumber = () => ({
    type: 'Set_Error_TaxAddress_Number'
})
export const setErrorVillageNumber = () => ({
    type: 'Set_Error_Village_Number'
})
export const setErrorAddressNumber = () => ({
    type: 'Set_Error_Address_Number'
})
export const setErrorMotherNumber = () => ({
    type: 'Set_Error_Mother_Number'
})
export const setErrorFullnameNumber = () => ({
    type: 'Set_Error_Fullname_Number'
})
export const seterrorIdentityDL = () => ({
    type: 'Error_seterrorIdentityDL',
})
export const seterrorIdentitySc = () => ({
    type: 'Error_seterrorIdentitySc',
})
export const seterrorIdentityPa = () => ({
    type: 'Error_seterrorIdentityPa',
})
export const seterrorIdentityKi = () => ({
    type: 'Error_seterrorIdentityKi',
})
