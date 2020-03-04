import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AtiText, AtiButton, AtiMultiStep, AtiTextInput, AtiRow } from 'ati-ui-elements';
import { Field, reduxForm } from 'redux-form';
import { Container } from 'native-base';
import { AtiForm, AtiField } from 'ati-redux-form';
import { View, Text, Button, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import ImagePicker from 'react-native-image-picker'
import I18n, { Loc } from 'ati-react-native-redux-i18n';
import * as action from '../store/registration-action';
import { Content } from 'native-base';

const options = {
  title: 'Choose photo',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class FileUpload extends Component {
  handleChooseSelfie = () => {
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri, type: response.type, filename: response.fileName };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.props.setSelfie(source)

      }
    });
  }

  handleChooseId = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri, type: response.type, filename: response.fileName };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.props.setIdCard(source)

      }
    });
  }

  handleChooseSignature = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri, type: response.type, filename: response.fileName };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.props.setSignature(source)

      }
    });
  }
  renderselfieUri() {
    if (this.props.selfie) {
      return <ImageBackground
        source={{ uri: this.props.selfie.uri }}
        style={{
          width: 183,
          height: 175, borderRadius: 10
        }}
      >
        <Image
          source={require('./../../../../assets/img/icon/camera.png')}
          style={{
            width: 78,
            height: 78,
            alignSelf: "center",
            marginTop: 50
          }}
        />
      </ImageBackground>
    } else {
      return <Image
        source={require('./../../../../assets/img/icon/selfie.png')}
        style={{
          width: 183,
          height: 175
        }}
      />
    }
  }
  renderidCardUri() {
    if (this.props.idCard) {
      return <ImageBackground
        source={{ uri: this.props.idCard.uri }}
        style={{
          width: 323,
          height: 175, borderRadius: 10
        }}
      >
        <Image
          source={require('./../../../../assets/img/icon/camera.png')}
          style={{
            width: 78,
            height: 78,
            alignSelf: "center",
            marginTop: 50
          }}
        />
      </ImageBackground>

    } else {
      return <Image
        source={require('./../../../../assets/img/icon/id.png')}
        style={{
          width: 323,
          height: 175
        }}
      >

      </Image>


    }
  }
  rendersignatureUri() {
    if (this.props.signature) {
      return <ImageBackground
        source={{ uri: this.props.signature.uri }}
        style={{
          width: 323,
          height: 175, borderRadius: 10
        }}
      >
        <Image
          source={require('./../../../../assets/img/icon/camera.png')}
          style={{
            width: 78,
            height: 78,
            alignSelf: "center",
            marginTop: 50
          }}
        />
      </ImageBackground>
    } else {
      return <Image
        source={require('./../../../../assets/img/icon/id.png')}
        style={{
          width: 323,
          height: 175
        }}
      />
    }
  }
  renderSubmit = () => {

  }
  render() {
    let x;
    const {
      nameValidation,
      dateOfBirthValidation,
      salutationValidation,
      formID,
      onNext,
    } = this.props;
    return (

      <ScrollView style={{
        height: 800,
        backgroundColor: "#fafafa",
        marginBottom: '20%'
      }}>
        <View style={{

          alignItems: "center",
        }}>

          <AtiText
            style={{
              width: 179,
              height: 14,
              fontFamily: "AvenirNextLTPro-Demi",
              fontSize: 14,
              fontWeight: "bold",
              fontStyle: "normal",
              lineHeight: 14,
              letterSpacing: 0,
              textAlign: "left",
              color: "#2e2e2e",
              marginTop: 20,
              marginBottom: 20
            }}
          >One more step :Upload File</AtiText>

          <AtiText
            style={{
              width: 102,
              height: 14,
              fontFamily: "AvenirNextLTPro",
              fontSize: 14,
              fontWeight: "normal",
              fontStyle: "normal",
              lineHeight: 14,
              letterSpacing: 0,
              textAlign: "center",
              color: "#000000",
              marginTop: 20,
              marginBottom: 20
            }}
          >Selfie
          </AtiText>

          <TouchableOpacity onPress={this.handleChooseSelfie}>
            {this.renderselfieUri()}
          </TouchableOpacity>

          <AtiText
            style={{
              width: 102,
              height: 14,
              fontFamily: "AvenirNextLTPro",
              fontSize: 14,
              fontWeight: "normal",
              fontStyle: "normal",
              lineHeight: 14,
              letterSpacing: 0,
              textAlign: "center",
              color: "#000000",
              marginTop: 20,
              marginBottom: 20
            }}
          >ID Card Photo
          </AtiText>

          <TouchableOpacity onPress={this.handleChooseId}>
            {this.renderidCardUri()}
          </TouchableOpacity>

          <AtiText
            style={{
              width: 102,
              height: 14,
              fontFamily: "AvenirNextLTPro",
              fontSize: 14,
              fontWeight: "normal",
              fontStyle: "normal",
              lineHeight: 14,
              letterSpacing: 0,
              textAlign: "center",
              color: "#000000",
              marginTop: 20,
              marginBottom: 20
            }}
          >Signature Photo
                   </AtiText>

          <TouchableOpacity onPress={this.handleChooseSignature}>
            {this.rendersignatureUri()}

          </TouchableOpacity>

          <AtiTextInput
            secureTextEntry

          />

        </View>
      </ScrollView>


    );
  }
}
const mapStateToProps = (state) => {
  const { reducer } = state;
  return {
    ...reducer
  };
};

export default connect(mapStateToProps, action)(FileUpload)

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    marginTop: hp('4.1%'),
    marginBottom: hp('0.1%'),
    marginLeft: wp('26.9%'),
    lineHeight: hp('2.1%')
  },
  label: {
    marginTop: hp('4.6%'),
    lineHeight: hp('2.1%'),
    marginLeft: wp('7.2%')
  },
  input: {
    borderWidth: 1,
    borderColor: '#d6d6d6',
    borderRadius: 10,
    paddingLeft: wp('4.8%'),
    marginTop: hp('1.6%'),
    marginLeft: wp('6.9%'),
    marginRight: wp('6.9%'),
    height: hp('7.5%'),
    width: wp('86.1%')
  },
  error: {
    borderWidth: 3,
    borderColor: 'red'
  },
  err: {
    marginTop: hp('0.8%'),
    color: 'red',
    fontSize: 14,
    marginLeft: wp('8.0%')
  },
});
