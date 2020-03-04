import React, { Component } from 'react';
import { AtiText, AtiCard, AtiRow, AtiGrid, AtiCol, AtiIcon, Ati } from 'ati-ui-elements';
import navigate from './../../common/navigation/action';

import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

// import wifi from './../../../../../assets/img/icon/wifi.png';
// import topup from './../../../../../assets/img/icon/mobile_topup.png';
// import token_listrik from './../../../../../assets/img/icon/token_listrik.png';

import img from './../../../assets/img/icon/KartuHalo.png';

class PostPaidBill extends Component {
  
  navi = (e) => {
    alert(e)
    this.props.navigate(e);
}

  render() {

    return (
      <View style={styles.picture}>
        <AtiRow style={{ height: '24%' }}>

            <AtiCol style={{ 
borderRightWidth: 3, borderBottomWidth: 3, borderColor: '#f0f0f0', alignItems: 'center', paddingTop: heightPercentageToDP('4%') 
}}>
            <TouchableOpacity style={{ alignItems: 'center'  }} onPress={this.navi.bind(this, 'telkomPayment')}>
                <Image source={img} style={{ height: heightPercentageToDP('4.9%'), width: widthPercentageToDP('18.4%') }} />
                <AtiText style={{
                    paddingTop: heightPercentageToDP('2.2%'),
                    fontFamily: 'AvenirNextLTPro',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 20,
                    letterSpacing: 0.28,
                    textAlign: 'center',
                    color: '#000000',
                    }}
                >Telkomsel Halo
                </AtiText>
            </TouchableOpacity>
            </AtiCol>


            <AtiCol style={{ borderBottomWidth: 3, borderColor: '#f0f0f0', paddingTop: heightPercentageToDP('4%') }}>
            <TouchableOpacity style={{ alignItems: 'center'  }}>
                {/* <Image source={img} style={{height:heightPercentageToDP('4.9%'),width:widthPercentageToDP("18.4%")}}/>
                <AtiText style={{paddingTop:heightPercentageToDP('3%')}}>Telkomsel Halo</AtiText> */}
            </TouchableOpacity>
            </AtiCol>

        </AtiRow>

        {/* <AtiRow style={{height:"24%"}}>

            <AtiCol style={{borderRightWidth:1, borderColor:'#f0f0f0', alignItems:'center', paddingTop:heightPercentageToDP('4%')}}>
            <TouchableOpacity style={{alignItems:'center',}}  onPress={this.navi.bind(this,'ElectricityToken')}>
                <Image source={img} style={{height:heightPercentageToDP('4.9%'),width:widthPercentageToDP("18.4%")}}/>
                <AtiText style={{paddingTop:heightPercentageToDP('3%')}}>Telkomsel Halo</AtiText>
           </TouchableOpacity>
           </AtiCol>

            <AtiCol style={{ borderColor:'#f0f0f0', alignItems:'center', paddingTop:heightPercentageToDP('4%')}}>
            <AtiText></AtiText>
            </AtiCol>
        </AtiRow> */}
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

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(PostPaidBill));

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    padding: '8%',
    width: null,
    height: null,
    resizeMode: 'cover',
    backgroundColor: '#f8f8f1',
  },
//   text: {
//     color: 'white',
//     fontWeight: 'bold',
//     marginLeft: '25%',
//     marginTop: '80%',
//   },
});