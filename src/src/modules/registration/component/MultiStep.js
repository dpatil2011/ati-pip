import React, { Component } from 'react';
import { AtiText, AtiButton, AtiMultiStep, AtiFooter, AtiSpinner } from 'ati-ui-elements';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import axios from 'axios';


import { NEXT } from '../../registration/store/registration-action';
import Login from '../../pre-login/component/pre-login-layout';
import Address from './Address';
import Personal from './Personal';
import FileUpload from './FileUpload';
import NPWP from './NPWP';
import Header
  from './Header';
import AccountData from './Account';
import Account from './Account';
import * as actionNav from './../../../common/components/popup/store/popup-action';
import navigate from './../../../common/navigation/action';
import * as action from '../store/registration-action';
import bgSrc from './../../../../assets/img/background/bg.png';

class MultiStep extends Component {
  constructor(props) {
    super(props);

    this.state = {

      currentStep: 0,
      btn: false,
      image: null,
      id: null,
      signature: null,
      navigate: false,
      spin: false
    };
  }


  insertData = () => {

    var gender = "";
    if (this.props.male == true) {
      gender = "M"
    } else {
      gender = "F"
    }
    const datey = new Date().getFullYear();
    const datem = new Date().getMonth() + 1;
    const dateD = new Date().getDate();
    var month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = `${dateD} ${month_names[datem]} ${datey}`;

    const user = {
      email: this.props.email,
      mobileNo: this.props.mobile,
      mobileUser: this.props.username,
      typeOfIdentityId: this.props.identityType,
      identityNumber: this.props.identity,
      fullname: this.props.fullname,
      genderCodeValue: gender,
      religion: this.props.religion,
      motherName: this.props.mother,
      taxNumber: this.props.taxNumber,
      taxName: this.props.taxName,
      taxAddress: this.props.taxAddress,
      countryCodeValue: this.props.country,
      provinceId: this.props.province,
      identitySubDistrict: this.props.district,
      identityVillage: this.props.village,
      identityRt: this.props.rtwt,
      identityRw: this.props.rtwt,
      postalCode: this.props.postalcode,
      address: this.props.address,
      submittedOnDate: date,
      dateOfBirth: this.props.dateOfBirth,
      identitySubDistrict: this.props.district,
     // identityVillage: this.props.village,
      identityCountryCodeValue: this.props.country,
      identityProvinceId: this.props.province,
      identityPostalCode: "12345",
      savingsProductId: "",
      addressBasedOnIdentity: this.props.taxAddress,
      legalFormId: "1",
      officeId: "1",
      sectorId: "1000",
      placeOfBirth: "placeOfBirth",
      cityId: "23",
      active: "true",
      flagTaxCodeValue: "Y",
      locale: "en",
      identityCityId: "0197",
      dateFormat: "DD MMMM YYYY",
      activationDate: "10 October 2019",
      referralCode: "selfregis01",


    };
    var photo = {
      uri: this.props.selfie.uri,
      type: this.props.selfie.type,
      name: this.props.selfie.filename,
    };
    var idCard = {
      uri: this.props.idCard.uri,
      type: this.props.idCard.type,
      name: this.props.idCard.filename,
    };
    var signature = {
      uri: this.props.signature.uri,
      type: this.props.signature.type,
      name: this.props.signature.filename,
    };
    const formData = new FormData();
    formData.append('data', JSON.stringify(user))
    formData.append('photo', photo)
    formData.append('idCard', idCard)
    formData.append('signature', signature)

    const url = 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/mobile/user';

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Fineract-Platform-TenantId': '000000',
      }
    };

    axios.post(url, formData, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        alert('Registered Succesfully')

        this.props.navigate('PreLoginScreen');
      })
      .catch((err) => {
        console.log(JSON.stringify(err))
        const { navigation } = this.props
        navigation.setParams({
          show: true,
        })
        var error = "";
        err.response.data.errors.forEach(function (item) {
          error = error + item.defaultUserMessage + "\n";
        })
        alert(error);

        this.setState({
          spin: false
        })
      })
    console.log(formData);
  }

  stepComp = [
    {

      label: 'Account',
      component: <Account />,
    },
    {
      label: 'Personal',
      component:
        <Personal />,
    },
    {
      label: 'NPWP',
      component:
        <NPWP />,
    },
    {
      label: 'Address',
      component: <Address />,
    },

    {
      label: 'FileUpload',
      component: <FileUpload ref={(file) => { this.file = file; }}{...this.props} />,
    },
  ]
  step = () => {
    if (this.state.currentStep == 0) {

      if (this.props.email == '') {
        this.props.checkEmail();
      }
      if (this.props.mobile == '') {
        this.props.checkMobile();
      }
      if (this.props.username == '') {
        this.props.checkUsername();
      }
      if (this.props.email == '' || this.props.mobile == '' || this.props.username == '') {
        this.props.checkAccount();
      }
      else if (this.props.mobile != null && this.props.email != null) {
        this.setState({
          currentStep: this.state.currentStep + 1,
        });
      }
    }
    if (this.state.currentStep == 1) {
      if (this.props.identityType == '' || this.props.identityType == null) {
        this.props.checkidentityType();
      }
      if (this.props.identity == '' || this.props.identity == null) {
        this.props.checkidentity();
      }
      if (this.props.dateOfBirth == '' || this.props.dateOfBirth == null) {
        this.props.checkdateofbirth();
      }
      if (this.props.religion == '' || this.props.religion == null) {
        this.props.checkreligion();
      }
      if (this.props.mother == '') {
        this.props.checkmother();
      }
      if (this.props.fullname == '') {
        this.props.checkfullname();
      }
      if (this.props.identityType == '' || this.props.identityType == null || this.props.identity == '' || this.props.dateOfBirth == '' || this.props.dateOfBirth == null || this.props.religion == '' || this.props.religion == null || this.props.mother == '' || this.props.mother == null || this.props.fullname == '' || this.props.fullname == null) {
        this.props.checkPersonal();
      } else if (this.props.identity != null && this.props.mother != null && this.props.fullname != null) {
        this.setState({
          currentStep: this.state.currentStep + 1,
        });
      }
    }
    if (this.state.currentStep == 2) {
      if (this.props.taxNumber == '') {
        this.props.checktaxnumber();
      }
      if (this.props.taxName == '') {
        this.props.checktaxname();
      }
      if (this.props.taxAddress == '') {
        this.props.checktaxaddress();
      }
      if (this.props.taxNumber == '' || this.props.taxName == '' || this.props.taxAddress == '') {
        this.props.checkNPWP();
      }
      else if (this.props.taxNumber != null && this.props.taxName != null && this.props.taxAddress != null) {
        this.setState({
          currentStep: this.state.currentStep + 1,
        });
      }
    }
    if (this.state.currentStep == 3) {
      if (this.props.country == '' || this.props.country == null) {
        this.props.checkcountry()
      }
      if (this.props.province == '' || this.props.province == null) {
        this.props.checkprovince();
      }
      if (this.props.village == '') {
        this.props.checkvillage();
      }
      if (this.props.district == '' || this.props.district == null) {
        this.props.checkdistrict();
      }
      if (this.props.postalcode == '') {
        this.props.checkpostalcode();
      }
      if (this.props.address == '') {
        this.props.checkaddress();
      }
      if (this.props.country == '' || this.props.province == '' || this.props.district == '' || this.props.postalcode == '' || this.props.address == '') {
        this.props.checkAddress();
      }
      else if (this.props.postalcode != null && this.props.village != null && this.props.address != null) {
        this.setState({
          currentStep: this.state.currentStep + 1,
        });
      }
    }
    if (this.state.currentStep == 4) {
      if (this.props.selfie == '' || this.props.selfie == null) {
        this.props.checkselfie();
      }
      if (this.props.idCard == '' || this.props.idCard == null) {
        this.props.checkidCard();
      }
      if (this.props.signature == '' || this.props.signature == null) {
        this.props.checksignature();
      }
      if (this.props.selfie == '' || this.props.idCard == '' || this.props.signature == '') {
        this.props.checkfileupload();
      } else {
        const { navigation } = this.props
        navigation.setParams({
          show: false,
        })
        this.insertData();

        this.setState({
          spin: true
        })
      }
    }
  }
  componentDidMount() {
    const { navigation } = this.props
    navigation.setParams({
      show: true,
    })
  }

  static navigationOptions = ({ navigation }) => {
    if (navigation.getParam('show')) {
      return {
        header: <Header />,

      }
    } else {
      return {
        header: null,

      }
    }

  }

  render() {

    if (this.state.currentStep == this.stepComp.length - 1) {
      this.state.btn = true;
    }
    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff', height: hp('100%') }}>
        {this.state.spin &&
          <ImageBackground style={styles.picture} source={bgSrc}>
            <AtiSpinner color="#a92930" />
            <AtiText style={styles.spinner}>Processing...</AtiText>
          </ImageBackground>
        }

        {!this.state.spin &&
          <AtiMultiStep
            events={{ onStepPress: this.onStepPress }}
            currentPosition={this.state.currentStep}
            dataView={this.stepComp}
            stepIndicatorSize={25}
            currentStepIndicatorSize={30}
            separatorStrokeWidth={2}
            currentStepStrokeWidth={3}
            stepStrokeCurrentColor="#a92930"
            stepStrokeWidth={2}
            stepStrokeFinishedColor="#a92930"
            stepStrokeUnFinishedColor="#bebebe"
            separatorUnFinishedColor="#bebebe"
            separatorFinishedColor="#a92930"
            stepIndicatorFinishedColor="#ffffff"
            stepIndicatorUnFinishedColor="#e6e6e6"
            stepIndicatorCurrentColor="#a92930"
            stepIndicatorLabelFontSize={15}
            currentStepIndicatorLabelFontSize={16}
            stepIndicatorLabelCurrentColor="#ffffff"
            stepIndicatorLabelFinishedColor="#a92930"
            stepIndicatorLabelUnFinishedColor="#999999"
            labelColor="#9DA29B"
            labelSize={13}
            currentStepLabelColor="#fe7013"
            showLabel={false}
          />
        }
        {!this.state.spin &&

          <View style={{ position: 'absolute' }}>
            {this.state.btn && <AtiButton
              onPress={this.step.bind()}
              buttonStyle={{
                height: hp('7.8%'), width: wp('100%'), backgroundColor: '#a92930', paddingLeft: wp('41%'), marginTop: hp("82.5%")
              }}
              textStyle={{ alignSelf: 'center', marginTop: wp('0.5%') }}
            >
              Submit
                     </AtiButton>}
            {!this.state.btn && <AtiButton
              onPress={this.step.bind()}
              // style={styles.login} textStyle={styles.loginText}

              // style={{}}

              buttonStyle={{
                height: hp('7.8%'), width: wp('100%'), backgroundColor: '#a92930', paddingLeft: wp('41%'), marginTop: hp("82.5%")
              }}
              textStyle={{ alignSelf: 'center' }}
            >
              Next
                    </AtiButton>}
          </View>
        }
      </View>

    );
  }
}


const mapStateToProps = (state) => {
  const { reducer } = state;
  return {
    ...reducer,
  };
};

const mapActionToProps = () => ({
  navigate,
  ...actionNav,
  ...action,
  // ...authentication,
});


export default connect(mapStateToProps, mapActionToProps())(MultiStep);

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    paddingTop: '60%',
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  login: {
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: '12.4%',
    height: '17.9%',
    width: '80.1%',

  },
  spinner: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 0.03,
    fontFamily: 'AvenirNextLTPro-Regular',

    textAlign: 'center'
  },
  loginText: {
    fontSize: 15,
    color: '#a92930',
    fontWeight: 'bold',
    letterSpacing: 0.03,
    fontFamily: 'AvenirNextLTPro-Regular',
    marginLeft: '37%',
  },

});