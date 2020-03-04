import React, { Component } from 'react';
import { AtiText,AtiCard,AtiRow,AtiGrid, AtiCol,AtiIcon,Ati} from 'ati-ui-elements';
import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';
import * as topupAction from './../../modules/topup/store/mobile-topup-action';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import wifi from './../../../assets/img/icon/wifi.png';
import topup from './../../../assets/img/icon/mobile_topup.png';
import token_listrik from './../../../assets/img/icon/token_listrik.png';
class MainScreen extends Component {
  navi = (e) => {
    this.props.navigate(e);
}
  render() {
    
    return (
      <View style={styles.picture}>
        <AtiRow style={{height:"24%"}}>
          
            <AtiCol style={{borderRightWidth:1,borderBottomWidth:1, borderColor:'#f0f0f0', alignItems:'center', paddingTop:heightPercentageToDP('4%')}}>
            <TouchableOpacity style={{alignItems:'center',}} onPress={this.navi.bind(this,'MobileTopupNumber')}>
                <Image source={topup} style={{height:heightPercentageToDP('4.5%'),width:widthPercentageToDP("8.6%")}}/>
                <AtiText style={{paddingTop:heightPercentageToDP('3%')}}>Mobile Topup</AtiText>
                </TouchableOpacity>
                </AtiCol>
          
        
            <AtiCol style={{borderBottomWidth:1, borderColor:'#f0f0f0',  paddingTop:heightPercentageToDP('4%')}}>
            <TouchableOpacity style={{alignItems:'center',}}  onPress={this.navi.bind(this,'Datapackage')}>
                <Image source={wifi} style={{height:heightPercentageToDP('4.5%'),width:widthPercentageToDP("9.6%")}}/>
                <AtiText style={{paddingTop:heightPercentageToDP('3%')}}>Data Package</AtiText>
            </TouchableOpacity>
            </AtiCol>
            
        </AtiRow>
        
        <AtiRow style={{height:"24%"}}>

            <AtiCol style={{borderRightWidth:1, borderColor:'#f0f0f0', alignItems:'center', paddingTop:heightPercentageToDP('4%')}}>
            <TouchableOpacity style={{alignItems:'center',}}  onPress={this.navi.bind(this,'ElectricityToken')}>
                <Image source={token_listrik} style={{height:heightPercentageToDP('4.5%'),width:widthPercentageToDP("7.8%")}}/>
                <AtiText style={{paddingTop:heightPercentageToDP('3%')}}>Electric Token</AtiText>
           </TouchableOpacity> 
           </AtiCol>
          
            <AtiCol style={{ borderColor:'#f0f0f0', alignItems:'center', paddingTop:heightPercentageToDP('4%')}}>
            <AtiText></AtiText>
            </AtiCol>
        </AtiRow>
      </View>
    );
  }
}
const mapStateToProps = state => ({ ...state });
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...topupAction,
    // ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(MainScreen));

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    padding:'8%',
    width: null,
    height: null,
    resizeMode: 'cover',
    backgroundColor:"#f8f8f1"
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: '25%',
    marginTop: '80%',
  },
});