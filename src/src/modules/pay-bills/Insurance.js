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
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import telkom from './../../../assets/img/icon/telkom.png';
import speedy from './../../../assets/img/icon/speedy.png';
import transvision from './../../../assets/img/icon/transvision.png';
import pln from './../../../assets/img/icon/transvision.png';
class Insurance extends Component {
  navi = (e) => {
    this.props.navigate(e);
}
  render() {
    
    return (
      <View style={styles.picture}>
        <AtiRow style={{height:"24%"}}>
          
            <AtiCol style={{borderRightWidth:1,borderBottomWidth:1, borderColor:'#f0f0f0', alignItems:'center', paddingTop:heightPercentageToDP('4%')}}>
            <TouchableOpacity style={{alignItems:'center',}} onPress={this.navi.bind(this,'InsuranceBill')}>
                <Image source={pln} style={{height:heightPercentageToDP('4.5%'),width:widthPercentageToDP("8.6%")}}/>
                <AtiText style={{paddingTop:heightPercentageToDP('3%')}}>BP JSKS</AtiText>
                </TouchableOpacity>
                </AtiCol>
            <AtiCol style={{borderBottomWidth:1, borderColor:'#f0f0f0',  paddingTop:heightPercentageToDP('4%')}}>
                <AtiText style={{paddingTop:heightPercentageToDP('3%')}}></AtiText>
           
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
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(Insurance));

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