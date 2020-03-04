import React, { Component } from 'react';

import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import * as act from './../../common/components/popup/store/popup-action';
//import * as act from './../pre-login/store/pre-login-action';
import { Body } from "native-base";
import axios from 'axios';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
  } from 'react-native-responsive-screen';
 // import up from './../../../../assets/img/background/accountbg.png';
import navigate from './../../common/navigation/action';
//import navigate from './../../common/navigation/action';
import * as action from './../../common/components/popup/store/popup-action';
import * as ac from './store/Transfer-action';

// import * as action from './../../../common/components/popup/store/popup-action';
import { AtiText, AtiCardShowcase, AtiCard, AtiCardItem, AtiTextInput, AtiList, AtiListItem, Left, Right, AtiIcon, AtiSpinner } from 'ati-ui-elements';

class MyAccounttransfer extends Component {
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
  this.props.navigate('Transfer');
}

  



    render() {
      const currencyFormatter = require('currency-formatter');

        return (
          <View style={{ backgroundColor: "#f8f6f0", width: wp('100%'), height: hp('100%') }}>
          {
          this.state.savingsAccounts.map((x) => (
            <View style={styles.container}>
              <TouchableOpacity onPress={this.select.bind(this, x)}>
                <AtiCard
                   style={{ marginLeft: wp('5.1%'), marginRight: wp('5.1%'), width: wp('89.9%'), height: hp('12.6%'), borderRadius: 8, marginTop: hp('3.7%') }}
                  >
                  <AtiCardItem  bordered
                    style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
                    >
                        <Left >
                         
                        <Body>
                                                <AtiText style={{ fontSize: 14, marginTop: hp('1.5%'), color: 'black', fontFamily: "AvenirNextLTPro" }}>{x.accountNo}{"\n"}
                                                </AtiText>
                                                <AtiText style={{ fontSize: 14, fontWeight: 'bold', marginTop: "2.5%", fontFamily: "AvenirNextLTPro" }}>
                                                    Rp{" "}
                                                    {currencyFormatter.format(x.accountBalance, {
                                                        code: 'IDR',
                                                        symbol: '',
                                                        decimal: '.',
                                                        thousand: ',',
                                                        precision: 2,
                                                    })}
                                                </AtiText>

                                            </Body>
                                    
         
                        </Left>
                        <Right>
                    
                        <AtiText   style={{ fontSize: 14, marginTop: hp('-3%'), fontFamily: "AvenirNextLTPro" }}>
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
    const { transferreducer } = state;
    return {
        ...transferreducer,
    };
};
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...act,
    ...ac,

  });
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(MyAccounttransfer));

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