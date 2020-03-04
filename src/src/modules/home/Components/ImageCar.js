import React, { Component } from 'react';
import { AtiText, AtiCarousel, AtiH1 } from 'ati-ui-elements';
import URL from '../../../common/urls/URLS';
import {
  ImageBackground,
  Image,
  StyleSheet,
  View,
  WebView,
  Text
} from 'react-native';
import axios from 'axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import * as action from './../store/carsoule-action';
import * as actionNav from './../../../common/components/popup/store/popup-action';
import navigate from './../../../common/navigation/action';
import Share from './../../../../assets/img/icon/share.png';
class ImageCar extends Component {
  state = {
    data: [],
    id: this.props.id,

  }
  componentDidMount() {
    //  const URL = 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/template/mobile';
    axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/promotions/mobile/' + this.state.id, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Fineract-Platform-TenantId': '000000',
      },
      auth: {
        username: this.props.userData.data.username,
        password: this.props.pass,
      },
    }).then((response) => {

      console.log("abc" + response);
      this.setState({
        data: response.data,
        bodyText: response.data.bodyText,
      });
      console.log(this.state.data);
    });
  }


  render() {
    var htmlContent = this.state.bodyText

    return (


      <View style={{ backgroundColor: '#f8f6f0', height: hp("100%") }}>
        <Image source={{ uri: 'https://prdc-support.anabatic.com:7443/' + this.state.data.makeUpLocation }} style={{ height: hp("24%"), width: wp("100%"), resizeMode: 'stretch' }}>
          {/* style={{height:hp("24%"),width:wp("100%"), resizeMode:'stretch'}}> */}
        </Image>
        <View style={{ position: 'absolute', marginLeft: wp("79.5%"), marginTop: hp("21.3%") }}>
          <Image style={{ height: hp("7.8%"), width: wp("13.9%") }} source={Share} />
        </View>
        <AtiText style={{ alignSelf: "center", marginTop: hp("6.4%"), fontStyle: 'AvenirNextLTPro-Medium', fontSize: 20, fontWeight: 'bold' }}>{this.state.data.name}</AtiText>

        <WebView style={{ marginLeft: wp("5.3%"), marginRight: wp("5.3%"), backgroundColor: '#f8f6f0', fontStyle: 'AvenirNextLTPro-Regular', fontSize: 14 }} source={{ html: htmlContent }} />
      </View>

    );
  }
}


const mapStateToProps = (state) => {
  const { carouselreducer } = state;
  const { login } = state;
  return {
    ...carouselreducer,
    ...login,
  };
};
export default connect(mapStateToProps, null)(ImageCar);

const styles = StyleSheet.create({
  picture: {
    flex: 1,

    width: null,
    height: null,
    resizeMode: 'cover',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: '25%',
    marginTop: '80%',
  },
});