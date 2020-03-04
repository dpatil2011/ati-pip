import React, { Component } from 'react';
import { AtiText,AtiCard,AtiRow,AtiGrid, AtiCol,AtiIcon,Ati} from 'ati-ui-elements';
import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import axios from 'axios'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import telkom from './../../../assets/img/icon/telkom.png';
import speedy from './../../../assets/img/icon/speedy.png';
import transvision from './../../../assets/img/icon/transvision.png';
import pln from './../../../assets/img/icon/pln.png';
class Utility extends Component {
  constructor(props){
    super(props);
    this.state={
      postPaid:[]
    }
  }
  navi = (e) => {
    this.props.navigate(e);
}
componentDidMount() {
  const URL = "https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/ppob/product/listproduct/?category=UTILITAS";
  // axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/savingsaccounts/1179?associations=all', {
  axios.get(URL, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Fineract-Platform-TenantId': 'default',
    },
    auth: {
      username: 'coin',
      password: 'coin',
    },
  }).then((response) => {
    this.setState({
      postPaid:response.data.data[0]
   
    });
 
  });
}
  render() {
    
    return (
      <View style={styles.picture}>
        <AtiRow style={{height:"24%"}}>
          
            <AtiCol style={{borderRightWidth:1,borderBottomWidth:1, borderColor:'#f0f0f0', alignItems:'center', paddingTop:heightPercentageToDP('4%')}}>
            <TouchableOpacity style={{alignItems:'center',}} onPress={this.navi.bind(this,'PlnNumber')}>
                <Image source={pln} style={{height:heightPercentageToDP('5%'),width:widthPercentageToDP("8.6%")}}/>
                <AtiText style={{paddingTop:heightPercentageToDP('3%')}}>PLN Bill</AtiText>
                </TouchableOpacity>
                </AtiCol>
            <AtiCol style={{borderBottomWidth:1, borderColor:'#f0f0f0',  paddingTop:heightPercentageToDP('4%')}}>
            <TouchableOpacity style={{alignItems:'center',}}  onPress={this.navi.bind(this,'Datapackage')}>
                <Image source={telkom} style={{height:heightPercentageToDP('4.5%'),width:widthPercentageToDP("8%")}}/>
                <AtiText style={{paddingTop:heightPercentageToDP('3%')}}>Telkom</AtiText>
            </TouchableOpacity>
            </AtiCol>
        </AtiRow>
        <AtiRow style={{height:"24%"}}>
            <AtiCol style={{borderRightWidth:1, borderColor:'#f0f0f0', alignItems:'center', paddingTop:heightPercentageToDP('4%')}}>
            <TouchableOpacity style={{alignItems:'center',}}  onPress={this.navi.bind(this,'ElectricityToken')}>
                <Image source={speedy} style={{height:heightPercentageToDP('4.5%'),width:widthPercentageToDP("22%")}}/>
                <AtiText style={{paddingTop:heightPercentageToDP('3%')}}>Speedy</AtiText>
           </TouchableOpacity> 
           </AtiCol>
          
           <AtiCol style={{borderColor:'#f0f0f0', alignItems:'center', paddingTop:heightPercentageToDP('4%')}}>
            <TouchableOpacity style={{alignItems:'center',}}  onPress={this.navi.bind(this,'Transvision')}>
                <Image source={transvision} style={{height:heightPercentageToDP('4.5%'),width:widthPercentageToDP("7.8%")}}/>
                <AtiText style={{paddingTop:heightPercentageToDP('3%')}}>Transvision</AtiText>
           </TouchableOpacity> 
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
    // ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(Utility));

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    padding:'8%',
    width: null,
    height: null,
    resizeMode: 'cover',
    backgroundColor:"#f8f6f0"
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: '25%',
    marginTop: '80%',
  },
});