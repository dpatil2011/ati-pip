import React, { Component } from 'react';

import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
// import * as act from './../../pre-login/store/pre-login-action';
import * as act from '../pre-login/store/pre-login-action';

import axios from 'axios';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
  } from 'react-native-responsive-screen';
 // import up from './../../../../assets/img/background/accountbg.png';
// import navigate from './../../../common/navigation/action';
import navigate from '../../common/navigation/action';
import * as action1 from '../pay-bills/store/paybills-action';
import * as action from '../../common/components/popup/store/popup-action';


// import * as action from './../../../common/components/popup/store/popup-action';
import { AtiText, AtiCardShowcase, AtiCard, AtiCardItem, AtiTextInput, AtiList, AtiListItem, Left, Right, AtiIcon, AtiSpinner } from 'ati-ui-elements';

class AccountList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savingsAccounts: [],
        };
    }
    componentDidMount() {
        const URL = 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/131/accounts';
        // axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/savingsaccounts/1179?associations=all', {
      //  console.log(this.props.userData.data);
        axios.get(URL, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Fineract-Platform-TenantId': '000000',
          },
          auth: {
            username: 'user84',
            password: 'coin',
          },
        }).then((response) => {
          console.log(`hi${  JSON.stringify(response.data.savingsAccounts[0].id)}`);
          this.setState({
            savingsAccounts: response.data.savingsAccounts,
            savingsId: response.data.savingsAccounts[0].id,

          });

          console.log(this.state.savingsAccounts);
         });
      }
  select = (e) => {
    this.props.setAccountDetail(e);
    this.props.setAccountNo(e.accountNo);
    this.props.navigate('telkomPayment');
  }


    render() {
      const currencyFormatter = require('currency-formatter');

        return (
          <View style={{ backgroundColor: '#f8f6f0', height: hp('100%') }}>
          {
          this.state.savingsAccounts.map((x) => (
            <View style={styles.container}>
              <TouchableOpacity onPress={this.select.bind(this, x)}>
                <AtiCard
                  style={{marginLeft:15,marginRight:15,width:380,borderRadius: 8,marginTop:20 }}
                  >
                  <AtiCardItem  bordered
                    style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 ,borderBottomLeftRadius:8,borderBottomRightRadius:8 }}
                    >
                        <Left  style={{marginTop:5}}>
                         
                              
                                    <AtiText style={{ fontSize: 14,color:'black'}}>{x.accountNo}{"\n"}
                                    
                                    <AtiText  style={{fontSize: 14, fontWeight:'bold'}}>
                           Rp{" "}
              {currencyFormatter.format(x.accountBalance, {
                code: 'IDR',
                symbol: '',
                decimal: '.',
                thousand: ',',
                precision: 2,
              })}
            </AtiText>
            </AtiText>
                                    
         
                        </Left>
                        <Right>
                    
                        <AtiText  style={{ fontSize: 14,marginTop:2}}>
                                    {x.shortProductName}
                                    {/* <AtiText style={{ fontSize: 14, fontWeight:'bold',marginTop:4,marginLeft:1}}>{ this.props.userData.data.username}</AtiText> */}
                                    </AtiText>                  
                                      </Right>
 
                                   
                            
                      
                    </AtiCardItem>
                </AtiCard>
            </TouchableOpacity>
           </View>
           ))
        }
          </View>
    );
  }
}
const mapStateToProps = (state) => {
    const { login } = state;
    const { PayBillsReducer } = state;
    return {
        ...login,
        ...PayBillsReducer,
    };
};
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...act,
    ...action1
  });
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(AccountList));

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
        fontWeight: 'bold',
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