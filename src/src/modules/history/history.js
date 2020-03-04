import React, { Component } from 'react';
import { AtiText, AtiCardShowcase, AtiCard, AtiCardItem, AtiTextInput, AtiList, AtiListItem, Left, Right, AtiIcon, AtiSpinner } from 'ati-ui-elements';
import { View, TouchableOpacity,StyleSheet, Text, ImageBackground, Image, ScrollView } from 'react-native';
import navigation from 'react-navigation';
import {
widthPercentageToDP as wp,
heightPercentageToDP as hp,
listenOrientationChange as loc,
removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import URLS from '../../common/urls/URLS';
import Axios from 'axios';
import moment from 'moment';
class History extends Component {
constructor(props) {
  super(props);
  this.state={
    history:[]
  }
}
componentDidMount(){
  var postData={
    "accountNumber": "00112015562",
    "isSuccess": true,
    "categoryModeCode": "BUY"
   }
  Axios({
    method: 'post',
    url: URLS.ppobHistory,
    data: postData,
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
        history:response.data
      })
  })
  .catch((response) => {
    alert("Something went wrong...");
  })

}
render() {
  var currencyFormatter = require('currency-formatter');
  return (
    <View style={{backgroundColor: '#f8f6f0',flex:1}}>
      <View style={{borderBottomWidth:1,borderBottomColor:'#cccccc'}}>
  <AtiText style={{marginBottom:heightPercentageToDP('4%'),marginTop:heightPercentageToDP('4%'),marginLeft:heightPercentageToDP('3%'),fontWeight:'bold',fontSize:16}}>Transaction History</AtiText>
                  </View>
                  <ScrollView >
                  {this.state.history.map(function(y){
                    var jsonResponse = JSON.parse(y.responseAsJson)
                    return(
                      
                <AtiList 
      style={{backgroundColor: '#f8f6f0'}}
      dataArray={[
                  {name: y.productName, ref: y.savingsAccountNumber,date:y.submittedOn,amount:jsonResponse.amount,icon: y.imageAsBase64Text},
                  ]} renderRow={
      (item) =>
          <AtiListItem style={{borderBottomWidth: 1, borderBottomColor: '#cccccc',marginLeft:wp('0%'),paddingTop:wp('3%'),paddingBottom:hp('2%')}}>
                  <Left style={{paddingLeft:hp('2%')}} >
                  <View style={{width:wp('10%'),backgroundColor:'#d8d8d8', paddingLeft:wp('3%'), borderRadius:wp('9%'), height:hp('6%')}}>
                  <Image  style={{marginLeft:hp('0.18%'),marginTop:wp('3%'),height:hp('2.5%'),width:wp('3.5%'),resizeMode: 'stretch'}} source={{uri:item.icon}} />
                  </View>
                  <AtiText style={styles.name} >{item.icon}{item.name}{"\n"}
                <AtiText style={styles.date}>{moment(item.date).format('DD MMM YYYY')}</AtiText></AtiText>
                  </Left>
                  <View style={{flexDirection:'row',paddingRight:hp('0.1%')}}>
                <AtiText style={styles.ref}>{item.ref}{"\n"}
                <AtiText style={styles.amount}>-{currencyFormatter.format(item.amount, {
                                code: 'IDR',
                                symbol: '',
                                thousand: '.',
                                precision: 0,
                            })}</AtiText></AtiText>
               
                  <Icon
                      name="right"
                      style={{
                          resizeMode: 'stretch',
                          paddingLeft:hp('1%'),
                          alignItems: 'center',
                          marginTop: 12,
                          color: '#000000',
                      }}
                  />
                  
                  </View>
                  
          </AtiListItem>
  }>
  </AtiList>
                  )})}</ScrollView>
          </View>


  );
}
}
const styles = StyleSheet.create({
  name: {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "left",
    color: "#000000",
    paddingLeft:hp('2%')
  },
  ref: {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "right",
    color: "#000000"
  },
  date: {
    fontFamily: "AvenirNextLTPro",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    textAlign: "left",
    color: "#7e7e7e",
    paddingLeft:hp('2%')
  },
  amount: {
  fontFamily: "AvenirNextLTPro",
  fontSize: 12,
  fontWeight: "500",
  fontStyle: "normal",
  textAlign: "right",
  color: "#dd4a39"
},
});
const mapStateToProps = (state) => {
const { login } = state;
return {
  ...login,
};
};

export default connect(mapStateToProps, null)(History);