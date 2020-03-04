import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiCardItem, AtiTextInput, AtiList, AtiListItem, Left, Right, AtiIcon, AtiSpinner } from 'ati-ui-elements';
import { View, TouchableOpacity,StyleSheet, Text, ImageBackground, Image, ScrollView } from 'react-native';


import profile from './../../../assets/img/background/profile.png';
import img from './../../../assets/img/logo/headerlogo1.png';

import Logout from './../../../assets/img/icon/logout.png';

import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import * as action from './../../common/components/popup/store/popup-action';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';


import { connect } from 'react-redux';
import Storage from '../pre-login/storage';
import axios from 'axios';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Row,Col } from 'native-base';

class User extends Component {
  constructor(props) {
    super(props);
    this.state={
    image:'',
    email:"",
      // placeOfBirth:"",
    }
  }

  componentDidMount() {
    const { navigation } = this.props
    navigation.setParams({
      username: this.props.userData.data.displayName
    })
    
    // alert("in")
    //  const URL = 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/template/mobile';
    axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/84/images?MaxWidth=10', {
      headers: {
        'Content-Type': 'application/json',
        // Accept: 'application/json',
        'Fineract-Platform-TenantId': '000000',
      },
      auth: {
        username: "user84",
        password: "coin",
      },
    }).then((response) => {

      console.log(response);
      this.setState({
        data: response.data,
      });
      // alert(this.state.data)
      console.log(this.state.data);
      //this.getEmail();
    
    })
    .catch(function (response) {
      alert(response);
      console.log(response);
  });
     
  const URL = "https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/" + this.props.userData.data.clientId;
    // axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/savingsaccounts/1179?associations=all', {
    
    axios.get(URL, {
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
        email:response.data.email,
      });
      console.log(this.state.email)
    });
  }


  static navigationOptions = ({ navigation }) => {

    return {
      tabBarLabel: navigation.getParam('username'),
      swipeEnabled: false,
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? require('../../../assets/img/icon/activeusericon.png') : require('../../../assets/img/icon/usericon.png')} style={{
            width: 25,
            height: 25
          }}
        />
      )
    }
  }

  render() {
navi=(e)=>{
  // alert(e)
  this.props.navigate(e)
}
    return (
      <ScrollView>
            <View style={{backgroundColor: '#f8f6f0'}}>
             
                  <View >
                  <ImageBackground style={styles.picture1} source={profile}>
                    <View style={{alignItems:'center',marginTop:heightPercentageToDP('2.2%')}}>
                      <Image   style={{borderWidth:2,borderColor:'white',borderRadius:50,width:wp("22%"),height:hp("13%")}} source={{uri: this.state.data}}/>
                      <AtiText style={{color:'white',fontWeight:'bold',fontFamily:'AvenirNextLTPro-Regular',fontSize:15,marginTop:heightPercentageToDP("0.5%")}}>{this.props.userData.data.displayName}</AtiText>
                       <AtiText style={{color:'white',fontFamily:'AvenirNextLTPro-Regular',fontSize:14,marginTop:heightPercentageToDP("0.5%")}}>{this.state.email}</AtiText>
                     
                        <TouchableOpacity onPress={navi.bind(this,"PreLoginScreen")}>
                        <View style={{backgroundColor:'white',width:widthPercentageToDP('30%'),marginTop:heightPercentageToDP('2%'),marginBottom:heightPercentageToDP('2%'),height:heightPercentageToDP('5.5%'),borderRadius:40}}>
                        
                        <View style={{marginTop:heightPercentageToDP('1%'),flexDirection:'row',marginLeft:widthPercentageToDP('4%')
                        //  borderTopLeftRadius: 5, borderTopRightRadius: 5 ,borderBottomLeftRadius:5,borderBottomRightRadius:5
                      }}>
                            <AtiText style={{color:'#4d4d4d'}}>Logout</AtiText>
                            <Image  style={{height:20,width:20,marginLeft:12,marginTop:1,resizeMode: 'stretch'}}source={Logout} />
                            {/* <ion-icon name="log-out"></ion-icon> */}
                            {/* <AtiIcon name='log-out' type='VectorIcon' style={{marginLeft:widthPercentageToDP('3.4%')}}></AtiIcon> */}
                        </View>
                        
                        
                      </View>
                        </TouchableOpacity>
                     
                    </View>
                    
                  </ImageBackground>
                  </View>
                  <View style={{borderBottomWidth:1,borderBottomColor:'#cccccc'}}>
                   <AtiText style={{marginTop:heightPercentageToDP('3.2%'),marginBottom:heightPercentageToDP('1.9%'),marginLeft:heightPercentageToDP('3%'),fontWeight:'bold',fontSize:16}}>Account</AtiText>
                   </View>
                  <AtiList 
                  style={{backgroundColor: '#f8f6f0'}}
       
        dataArray={[
                    {name: 'My Account', creditNumber: 'mail', image: require('../../../assets/img/icon/MyAccount.png'),link:'AccountList1'},
                    {name: 'Virtual Account', creditNumber: 'logo-linkedin', image: require('./../../../assets/img/icon/VirctualAccount.png'),link:'VirtualAccount'},
                    {name: 'Agent Member', creditNumber: 'logo-instagram', image: require('./../../../assets/img/icon/AgentMember.png'),link:'AgentMember'},
                  ]} renderRow={
        (item) =>{
         
            return(<AtiListItem 
                // onPress={this.onViewDetail}
                style={{borderBottomWidth: 1, borderBottomColor: '#cccccc',marginLeft:0}}
                >
                  <TouchableOpacity style={{flexDirection:'row'}} onPress={navi.bind(this,item.link)}
                  >
                    <Left style={{marginLeft:heightPercentageToDP('3%')}}>
                        <View>
                            
                            <AtiText style={{ fontSize: 15,fontFamily:'AvenirNextLTPro-Regular'}}>{item.name}</AtiText>
                        </View>
                    </Left>
                    <Right>
                        <Image  style={{height:25,width:25,marginLeft:12,marginTop:1,resizeMode: 'stretch'}} source={item.image} />
                        {/* <AtiIcon name={item.creditNumber} style={{color: '#494c4c', fontSize: 20 }} /> */}
                    </Right>
                    </TouchableOpacity>
            </AtiListItem>)}
    }>
    </AtiList>
    
    <View style={{marginTop:heightPercentageToDP('5%')}}>
       <View style={{borderBottomWidth:1,borderBottomColor:'#cccccc'}}>
           <AtiText style={{marginBottom:heightPercentageToDP('2.1%'),marginLeft:heightPercentageToDP('3%'),fontWeight:'bold',fontSize:16}}>Settings</AtiText>
                   </View>
                  <AtiList 
        style={{backgroundColor: '#f8f6f0'}}
        dataArray={[
                    {name: 'Change Password', creditNumber: 'mail',link:'ChangePass',image: require('../../../assets/img/icon/ChangePassword.png')},
                    {name: 'Change Transaction PIN', creditNumber: 'logo-linkedin',link:'ChangeTransactionPIN',image: require('../../../assets/img/icon/ChangeTnsPin.png')},
                    {name: 'Help', creditNumber: 'logo-instagram',link:'Help',image: require('../../../assets/img/icon/help.png')},
                    {name: 'FAQ', creditNumber: 'logo-facebook',link:'FAQ',image: require('../../../assets/img/icon/FAQ.png')},
                    
                    ]} renderRow={
        (item) =>
            <AtiListItem 
                // onPress={this.onViewDetail}
                
                style={{borderBottomWidth: 1, borderBottomColor: '#cccccc',marginLeft:0}}
                >
                  <TouchableOpacity style={{flexDirection:'row'}} onPress={navi.bind(this,item.link)}
                  >
                    {/* <View style={{flexDirection:'row'}}> */}
                    <Left style={{marginLeft:heightPercentageToDP('3%')}}>
                        <View>
                            
                            <AtiText style={{ fontSize: 15,fontFamily:'AvenirNextLTPro-Regular'}}>{item.name}</AtiText>
                        </View>
                    </Left>
                    <Right>
                    <Image  style={{height:27,width:25,marginLeft:12,marginTop:1,resizeMode: 'stretch'}}source={item.image} />
                        {/* <AtiIcon name={item.creditNumber} style={{color: '#494c4c', fontSize: 20 }} /> */}
                    </Right>
                    {/* </View> */}
                  </TouchableOpacity>
            </AtiListItem>
    }>
    </AtiList>
    </View>
                  
            </View>
            </ScrollView>




    );
  }
}const styles = StyleSheet.create({
  picture: {
          flexDirection:'row',
          borderBottomWidth:0.5,
          borderBottomColor:'grey',
          marginBottom:heightPercentageToDP('2%')
  },
  picture1: {
      
      width: widthPercentageToDP('100%'),
      height: heightPercentageToDP('32%'),
    
  },
});

//   User.navigationOptions= {

// }
const mapStateToProps = (state) => {
  const { login } = state;
  return {
    ...login,
    ...state,
  };
};
const mapActionToProps = () => ({
    navigate,
    ...action,
    // ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(User));