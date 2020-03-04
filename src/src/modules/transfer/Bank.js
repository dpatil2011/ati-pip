import React, { Component } from 'react';


import { View, StyleSheet,Text, ImageBackground, Image, ScrollView,TouchableOpacity } from 'react-native';
import axios from 'axios';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
  import * as action from './../../common/components/popup/store/popup-action';

  import navigate from './../../common/navigation/action';
  import { withWebConsole } from 'ati-web-console-connector';
  import { connect } from 'react-redux';
import * as ac from './store/Transfer-action';
import { AtiText, AtiCardShowcase, AtiCard, AtiCardItem, AtiTextInput, AtiList, AtiListItem, Left, Right, AtiIcon, AtiSpinner } from 'ati-ui-elements';
class Bank extends Component {
    state = { 
      bank:[],
     }


    componentDidMount() {
        const URL = "https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/ppob/product/listproduct/?category=TRANSFER";
     
        axios.get(URL, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Fineract-Platform-TenantId': 'default',
          },
          auth: {
            username: "coin",
            password: "coin",
          },
        }).then((response) => {
          console.log(response)
         
          this.setState({
                bank:response.data.data,
               

          });
          // this.setState({
          //   bank:response.data.bank,
            
         
          // });
       
        console.log("Id:"+JSON.stringify(this.state.bank[0]))
         });
      }
      
      select = (e) => {
    alert("Hi")
        this.props.setBank(e);
        this.props.navigate('AddAccount');
      }
      
    render() {
      var currencyFormatter = require('currency-formatter');
//console.log(this.state.bank)
        return(
          <View style={{ backgroundColor: "#f8f6f0", width: wp('100%'), height: hp('100%') }}>
            {
              this.state.bank.map((x)=>(
              
                  <View style={styles.container}>
          <TouchableOpacity onPress={this.select.bind(this, x)}>
         <AtiCard
                   style={{ marginLeft: wp('5.1%'), marginRight: wp('5.1%'), width: wp('89.9%'), height: hp('8%'), borderRadius: 8, marginTop: hp('3.7%') }}
                  >
                  <AtiCardItem  bordered
                    style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
                    >
         <AtiText style={{ fontSize: 14, marginTop: hp('1.5%'), color: 'black',fontWeight:'bold', fontFamily: "AvenirNextLTPro" }}>{x.name}{"\n"}
</AtiText>
</AtiCardItem>  
         </AtiCard>
         </TouchableOpacity>
         </View>
                ))
              }
            
            
            
           </View>
           )
        }
        
  
  }

  const mapStateToProps = (state) => {
    const { transferreducer } = state;
    return {
        ...transferreducer,
    };
};
const mapActionToProps = () => ({
    navigate,
   ...action,
    ...ac
   
  });
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(Bank));

// export default AccountList;
const styles = StyleSheet.create({

  container: {
    // flex: 1,
    //  justifyContent: 'center',
    //  alignItems: 'center',
    //  backgroundColor: '#F5FCFF',
    //  flexDirection: 'column',
    
    backgroundColor: '#f8f6f0',
   
},
    
   
   
    

    NA: {
        color: '#ffffff',
        fontSize: 20,
        // height: hp('10%'),
        // width:wp('57.4%'),
        marginLeft: hp('3.5%'),
        marginBottom: hp('2%'),
        fontWeight: 'bold'
        // marginTop: hp('5.1%'),
    },
    logoUp: {
        height: 67,
        width: 80,
        // marginLeft: 20,
        // marginBottom: 7.3,
        // marginTop: 10.3,
        marginRight: 13,
        // margin: 10.3,
    },
    logoDown: {
        height: 65,
        width: 30,
        marginBottom: 15,
    },
});