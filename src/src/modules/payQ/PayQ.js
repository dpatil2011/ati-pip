import React, { Component } from 'react';
import { AtiQRCodeScanner } from 'ati-qr-code';
import navigate from '../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import * as action from '../../common/components/popup/store/popup-action';
import { connect } from 'react-redux';
import { AtiText, AtiIcon, AtiRow } from 'ati-ui-elements';
import {  Container } from 'native-base';
import { RNCamera } from "react-native-camera"
// import {} from 'material-icons-react';
import {View,Text,StatusBar, TouchableOpacity} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import * as homeAction from '../home/store/HomeAction';
import Torch from 'react-native-torch';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import QRCodeScanner from 'react-native-qrcode-scanner';

class flash extends Component {

    constructor(props) {
      super(props);
      this.state = { 
        torch:'',
        icon:"flashlight"
       }
    }
   
    link1=()=>{
      
      if(this.state.torch){
        this.setState({
          torch:RNCamera.Constants.FlashMode.off,
          icon:"flashlight",
          con:false,
        }),
        Torch.switchState(false);
      }else{
      this.setState({
        torch:RNCamera.Constants.FlashMode.torch,
        icon:"flashlight-off",
        con:false,
      })
      Torch.switchState(true);
        }}
  
  link=(e)=>{
   // alert(e.data)
    let obj = JSON.parse(e.data);
    alert("Name:"+obj.name+", Account:"+obj.account)
    var c=
    this.props.setQinfo(obj);
    this.props.navigate('Pay');
  }
  render() {
    navi=(e)=>{
      this.props.navigate(e)
    }
    return (
      <AtiQRCodeScanner
        // onRead={this.link}
      //  showMarker={false}
       
        // cameraProps={{
        //   flashMode: this.state.torch,
        // }}
        
        events={{ onRead: (e) => { this.link(e); } }}
        showMarker={false}
        reactivate={false}
         props={{  flashMode: this.state.torch}}

        topViewStyle={{marginTop:"-20%"}}
        topContent={<View><StatusBar backgroundColor='rgba(0,0,0,0.44)' />
        <TouchableOpacity onPress={navi.bind(this,'HomeScreen')} style={{ width:heightPercentageToDP('7.3%'),height:heightPercentageToDP('7.3%'), borderRadius:widthPercentageToDP('50%'), backgroundColor:'rgba(0,0,0,0.5)', paddingLeft:heightPercentageToDP('1.9%'), paddingTop:heightPercentageToDP('1.6%')}}>
          <AtiIcon name="arrow-back" style={{color:"white"}}/>
          </TouchableOpacity><View style={{width:widthPercentageToDP('80%')}}></View></View>}
        bottomContent={<View style={{width:"100%"}}>
          <AtiRow style={{ width:heightPercentageToDP('10%'),height:heightPercentageToDP('10%'), borderRadius:widthPercentageToDP('50%'), backgroundColor:'rgba(0,0,0,0.5)', paddingTop:heightPercentageToDP('1.6%'), marginLeft:widthPercentageToDP('42%'), marginBottom:heightPercentageToDP('8%'), marginTop:heightPercentageToDP('2%'), justifyContent:'center'}}>
          <TouchableOpacity onPress={this.link1.bind()}><AtiText>
            <Icon name={this.state.icon} style={{color:"white", fontSize:50}}/></AtiText></TouchableOpacity>
          {/* <MaterialIcon icon="dashboard" size='large' /> */}
            </AtiRow>
            <View style={{backgroundColor:'#a92930',height:heightPercentageToDP('12.1%')}}>
              <Text style={{textAlign:'center', marginTop:'7%', color:'white'}}>Point the camera at the QR code area</Text>
            </View>
            </View>}
        containerStyle={{backgroundColor:'rgba(0,0,0,0.4)'}}
        cameraStyle={{margin:heightPercentageToDP("5.5%"), height:heightPercentageToDP("40%"), width:widthPercentageToDP('80%'), borderRadius:"40%"}}
      />
     
    )
  }
}

const mapActionToProps = () => ({
  navigate,
  ...action,
  ...homeAction
  // ...authentication,
});
export default connect(null, mapActionToProps())(withWebConsole(flash));
