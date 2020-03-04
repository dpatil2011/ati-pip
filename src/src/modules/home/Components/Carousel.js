import React, { Component } from 'react';
import { AtiText, AtiCarousel } from 'ati-ui-elements';
import {
  ImageBackground,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
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


class Carousel extends Component {
  state = {
    data: [],
  }



  componentDidMount() {
    //  const URL = 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/template/mobile';
    axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/promotions/mobile', {
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

      console.log(response);
      this.setState({
        data: response.data,
      });
      console.log(this.state.data);
    });
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={{ backgroundColor: 'white' }} >
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >


          <TouchableOpacity onPress={navTo.bind(this, item.id)} >

            <Image source={{ uri: 'https://prdc-support.anabatic.com:7443/' + item.makeUpLocation }} style={{ height: hp("20%"), width: wp("100%"), borderRadius: wp('10%'), alignContent: "center", resizeMode: 'stretch' }}></Image>

          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  render() {
    navTo = (e) => {
      let a = e;
      this.props.setId(JSON.stringify(a));
      this.props.navigate('ImageCar')
    }
    return (

      <View style={{
        borderColor: '#ffffff', marginBottom: hp('2%'), width: wp('100%'), backgroundColor: 'white', paddingTop: hp('1.5%'), paddingBottom: hp('7%'),
      }}>

        <AtiCarousel
          // style={{borderRadius:wp('5%')}}
          ref={(c) => { this._carousel = c; }}
          data={this.state.data}
          renderItem={this.renderItem}
          sliderWidth={600}
          itemWidth={600}
          events={{
            onSnapToItem: (index) => { console.log(index) }
          }}
        />
      </View>

    );
  }
}
const mapActionToProps = () => ({
  navigate,
  ...actionNav,
  ...action,
  // ...authentication,
});
const mapStateToProps = (state) => {

  const { login } = state;
  return {

    ...login,
  };
};
export default connect(mapStateToProps, mapActionToProps())(Carousel);