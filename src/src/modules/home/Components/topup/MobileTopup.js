import React, { Component } from 'react';
import { Content } from 'native-base';
import {
    AtiRow,
    AtiCol,
    AtiText,
    AtiTextInput,
} from 'ati-ui-elements';
import { AtiForm} from 'ati-redux-form';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import I18n, { Loc } from 'ati-react-native-redux-i18n';
class MobileTopup extends Component {
   
    render() {
       
        return (
                 <View style={{backgroundColor:"#f8f6f0"}}>
                     <Content style={styles.rowStyle1}>
        <AtiForm
            formId={formID}
            destroyOnUnmount={false}
            forceUnregisterOnUnmount
            keepDirtyOnReinitialize
            // onSubmit is a Function that will be called when submit form.
            onSubmit={values => onNext(values)}
            // Rendered component that as trigered to do submit.
            submitComponent={returnOnSubmit => this.renderSubmit(returnOnSubmit)}
        >
            <View>
            <View style={{height:hp("40.5%"),width:wp("100%"),backgroundColor: "white" }}>
           
                            <Loc style={{marginLeft:wp("34%"),color:'black',marginTop:hp("1%")}} locKey="label.Nominal Transfer" />

                        <AtiTextInput
                            textStyle={styles.input1} >Rp</AtiTextInput>
                      
                            <Loc style={styles.label} locKey="label.Account From"/>
                            <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#d6d6d6',
                    borderRadius: 10,
                    paddingLeft: wp('4.8%'),
                    marginTop: hp('1.6%'),
                    marginLeft: wp('6.9%'),
                    marginRight: wp('6.9%'),
                    height: hp('7.5%'),
                    width: wp('86.1%'),
                }}>
                  <TouchableOpacity onPress={this.myAccount.bind()}>
                            <Icon
                        name="right"
                        style={{
                            height: 24,
                            width: 24,
                            resizeMode: 'stretch',
                            alignItems: 'center',
                            marginLeft: '90%',
                           
                            color: "#78849e",
                          
                            
                        }}
                    >
                    </Icon>
                    </TouchableOpacity>
                        <AtiTextInput style={{ marginBottom: hp('16%')}} containerStyle={{ flex: 1 }}
                           
                              />
                              </View>
                              <AtiText style={{color:'#008211',marginLeft:wp("8%"),marginTop:hp("2%")}}>Available balance is IDR 9,760,000</AtiText>
                              </View>
                              <View style={{ marginTop: hp('1.6%'),height:hp("47%"),width:wp("100%"), backgroundColor: "white" }}>
           
                
                            <Loc style={styles.label} locKey="label.Transfer To" />
                            <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#d6d6d6',
                    borderRadius: 10,
                    paddingLeft: wp('4.8%'),
                    marginTop: hp('1.6%'),
                    marginLeft: wp('6.9%'),
                    marginRight: wp('6.9%'),
                    height: hp('7.5%'),
                    width: wp('86.1%'),
                }}>
                  <TouchableOpacity onPress={this.transaction.bind()}>

                            <Icon
                        name="right"
                        style={{
                            height: 24,
                            width: 24,
                            resizeMode: 'stretch',
                            alignItems: 'center',
                            marginLeft: '90%',
                            borderRadius: 20,
                            color: "#78849e",
                            marginTop:12,
                            
                        }}
                    >
                    </Icon>
                    </TouchableOpacity>
                        <AtiTextInput containerStyle={{ flex: 1 }}
                            textStyle={styles.input}
                            placeholder="Destination Account"
                              />
                              </View>
                           <Loc style={styles.label} locKey="label.Message" />
                                 <AtiTextInput
                            textStyle={styles.input}
                            placeholder="Optional"
                              />
                            
                       
                              <AtiButton
             
              style={{backgroundColor:'#a92930',height:hp("8%"),width:wp("80%"),borderRadius:(20),marginLeft:wp("10.1%"),marginTop:hp("4%"),marginBottom:hp("4%")}}
              textStyle={{ alignSelf: 'center', marginTop: wp('0.5%'),marginLeft:wp("30%") }}
            >
              Send
                     </AtiButton>
                              
                          
          </View>  
                              </View>
                              </AtiForm>
                              </Content>
                    <View style={{ flexDirection: 'row' }}>
                        <Loc style={styles.label} locKey="label.Mobile" />
                    </View>
                       <AtiTextInput
                                    textStyle={styles.input}
                                    placeholder=""
                                    type="text"
                                    id="Identity"
                                    keyboardType="numeric"

                                    events={{

                                        onChangeText: (e) => {
                                            x2 = e;
                                            //   { this.props.setIdentity(this.state.cardNumber); }

                                            this.setState({
                                                cardNumber: e,
                                            });

                                        },
                                        onBlur: () => {
                                            this.validateInputs()
                                        },
                                    }}
                                />
                    </View>
               
        );
    }
}

export default MobileTopup;
const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        marginTop: hp('4.1%'),
        marginBottom: hp('0.1%'),
        marginLeft: wp('26.9%'),
        //  lineHeight: hp('2.1%'),
    },
    rowStyle:{
        color:'red'
    },
    label: {
        marginTop: hp('4.6%'),
        // lineHeight: hp('2.1%'),
        marginLeft: wp('7.2%'),
        color: "black"
    },
    input: {
        borderWidth: 1,
        borderColor: '#d6d6d6',
        borderRadius: 10,
        paddingLeft: wp('4.8%'),
        marginTop: hp('1.6%'),
        marginLeft: wp('6.9%'),
        marginRight: wp('6.9%'),
        height: hp('7.5%'),
        width: wp('86.1%'),
    },
    error: {
        borderWidth: 3,
        borderColor: 'red',
    },
    err: {
        marginTop: hp('0.8%'),
        color: 'red',
        fontSize: 14,
        marginLeft: wp('8.0%'),
    },
});