import React, { Component } from 'react';
import { AtiText, } from 'ati-ui-elements';
import bgSrc from './../../../assets/img/background/bg.png';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';
import homeAction from './store/HomeAction';
import { withWebConsole } from 'ati-web-console-connector';
import navigate from '../../common/navigation/action'
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { heightPercentageToDP } from '../../../assets/js/percentage-size';
//  import Paybill from './Component/PayBill'
import Body1 from './Components/Body1';
import AtiCarsoule from './Components/Carousel'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import im1 from './../../../assets/img/icon/group_1371.png';
import im2 from './../../../assets/img/icon/group_1372.png';
import im3 from './../../../assets/img/icon/group_1373.png';
import PayBill from './../home/Components/payBill';
import Agent from './Components/Agent';


class HomeScreen extends Component {
  
  navi = (e) => {
    this.props.navigate(e);
  }
  agent = () => {
    if (this.props.agent == '1') {
      return <Agent />
    } else {
      return <PayBill />
    }
  }
  render() {
    return (
      <View > 
        <View style={{ backgroundColor: 'white'}}>

          <Body1 />
          <View style={{
            height: hp('10%'), position: 'absolute', marginTop: hp('16.9%'), width: wp('93%'), marginLeft: wp('3.3%'), backgroundColor: "white", borderRadius: 6, borderWidth: 1,
            borderColor: '#ddd',
            borderBottomWidth: 0,
            shadowColor: ' #f9fcf2',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 3
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: hp('1.8%'), paddingHorizontal: hp('7.5%') }}>
              <TouchableOpacity onPress={this.navi.bind(this, 'Transfer')}>
                <View style={{alignItems:'center'}}>
                  <Image style={styles.img} source={im1} />
                  <AtiText style={{ fontSize: 12, color: '#b6343b', fontFamily: 'AvenirNextLTPro-Demi', fontWeight: 'bold' }}>Transfer</AtiText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.navi.bind(this, 'PayQ')}>
              <View style={{alignItems:'center'}}>
                  <Image source={im2} style={styles.img} />
                  <AtiText style={{ fontSize: 12, color: '#b6343b', fontFamily: 'AvenirNextLTPro-Demi', fontWeight: 'bold' }}>PayQu</AtiText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.navi.bind(this, 'MainScreen')}>
              <View style={{alignItems:'center'}}>
                  <Image source={im3} style={styles.img} />
                  <AtiText style={{ fontSize: 12, color: '#b6343b', fontFamily: 'AvenirNextLTPro-Demi', fontWeight: 'bold' }}>TopUp</AtiText>
                </View>
              </TouchableOpacity>
            </View>
            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: hp('0.5%'), paddingLeft: wp('9.5%'), paddingRight: wp('12.5%') }}></View> */}
          </View>
          <View style={{ marginTop: hp('7%'), backgroundColor: "white" }}>
            {this.agent()}
          </View>
        </View>
        <ScrollView style={{ marginTop: hp('2.1%') }}>
          <AtiCarsoule />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  const { home } = state;
  return {
    ...home,
  };
};
const mapActionToProps = () => ({
  navigate,
  ...action,

  // ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(HomeScreen));

const styles = StyleSheet.create({
  picture: {
    width: null,
    height: heightPercentageToDP('30%'),
    resizeMode: 'cover',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: '25%',
    marginTop: '80%',
  },
  img: {
    height: hp('3.4%'),
    width: wp('6.5%'),
    marginBottom: hp('0.5%')
  }
});