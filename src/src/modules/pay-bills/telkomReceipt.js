import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiTextInput, AtiButton, AtiTextInputCellPhone } from 'ati-ui-elements';
import { Content, Left, Right } from 'native-base';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    ScrollView,
    AsyncStorage,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import navigate from '../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import * as action from '../../common/components/popup/store/popup-action';
import Dash from 'react-native-dash'
import receipt1 from './../../../assets/img/icon/receipt1.png';
import receipt from './../../../assets/img/icon/receipt.png';

class TopupReceipt extends Component {
    navi(e){
        this.props.navigate(e);
    }
    render() {
        return (
          
            <View style={{
            
                width: wp('100%'),
                backgroundColor: "#ffffff",
            }}>
                <ScrollView style={{height:hp('70%')}}>
                <Image source={receipt} style={{ width: wp('15%'), height: ('9%'), alignSelf: "center", marginTop: hp('2.5%'),resizeMode:"stretch" }} />
                <AtiText style={{
 
                    letterSpacing: 0,
                    alignSelf: 'center',
                    color: "#000000",
                    fontFamily: "AvenirNextLTPro",
                    fontSize: 16,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    marginTop: hp('2.4%')

                }}>Transaction Successful</AtiText>
              <View>
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('5%')
                }}>
                    <Left>
                    <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.6%'),

                        }}
                    >Transaction Type</AtiText>
                    </Left>
                    <Right>
                    <AtiText
                        style={{
                            
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            // marginLeft: wp('37.3%'),

                            marginRight: wp('5.1%')
                        }}
                    >Telkom Payment</AtiText>
                </Right>
                </View>
                <Dash dashColor="#f0f0f0"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}><Left>
                    <AtiText
                        style={{
                            
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.6%'),

                        }}
                    >Date</AtiText>
                    </Left>
                    <Right>
                    <AtiText
                        style={{
                         
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            // marginLeft: wp('42.4%'),

                            marginRight: wp('5.1%')
                        }}
                    >28 feb 2018</AtiText>
                    </Right>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                    <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}><Left>
                    <AtiText
                        style={{
                          
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.6%'),

                        }}
                    >Reference Code</AtiText>
                    </Left>
                    <Right>
                    <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            // marginLeft: wp('42.4%'),

                            marginRight: wp('5.1%')
                        }}
                    >123123123123123</AtiText>
                    </Right>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                                        <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}><Left>
                    <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.6%'),

                        }}
                    >Customer  ID</AtiText>
                    </Left>
                    <Right>
                    <AtiText
                        style={{
                         
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            // marginLeft: wp('42.4%'),

                            marginRight: wp('5.1%')
                        }}
                    >TARAMAS-0011 1022 900</AtiText>
                    </Right>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <Left>
                    <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            // marginRight:wp('37.3%'),
                            marginLeft: wp('5.1%'),

                        }}
                    >Phone Number</AtiText>
                     </Left>
                     <Right>
                    <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            // marginLeft: wp('7.9.%'),

                            marginRight: wp('5.1%')
                            // marginLeft: wp('5.1%'),
                            
                        }}
                    >9876543210</AtiText>
                    </Right>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <Left>
                    <AtiText
                        style={{
                         
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),

                        }}
                    >Month Total</AtiText>
                    </Left>
                    <Right>
                    <AtiText
                        style={{
                            
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            // marginLeft: wp('70.9.%'),

                            marginRight: wp('5.1%')
                        }}
                    >1 Month</AtiText></Right>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <Left>
                    <AtiText
                        style={{
                        
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),

                        }}
                    >Period</AtiText>
                    </Left>
                    <Right>
                    <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            // marginLeft: wp('59.7%'),

                            marginRight: wp('5.1%')
                        }}
                    >November 2019</AtiText></Right>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <Left>
                    <AtiText
                        style={{
                        
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),

                        }}
                    >Bill Payment</AtiText>
                    </Left>
                    <Right>
                    <AtiText
                        style={{
                            
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            // marginLeft: wp('51.7%'),

                            marginRight: wp('5.1%')
                        }}
                    >Rp 5,200</AtiText>
                    </Right>
                </View>
                <Dash dashColor="#e6e6e6"
                    dashLength={6}
                    dashGap={4}
                    style={styles.dash} />
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('2.4%')
                }}>
                    <Left>
                    <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),

                        }}
                    >Fee</AtiText>
                    </Left>
                    <Right>
                    <AtiText
                        style={{
                           
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#000000",
                            // marginLeft: wp('75.5%'),

                            marginRight: wp('5.1%')
                        }}
                    >Rp 1,500</AtiText>
                    </Right>
                </View>
                <View style={{
                    marginTop: "7%",
                    flexDirection: "row", alignSelf: "center"
                }}>
                    <Dash

                        dashColor="#f0f0f0"
                        dashLength={10}
                        dashThickness={6}
                        dashGap={8}
                        style={{
                            // marginTop:hp('0.1%'),
                            width: '100%', height: 1
                        }} />
                    
                </View>
                <View style={{
                    flexDirection: "row",
                    marginTop: hp('3.4%'),
                    marginBottom: hp('10%')
                }}>
                    <Left>
                    <AtiText
                        style={{
                          
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            color: "#000000",
                            marginLeft: wp('5.1%'),
                            marginTop: hp('1.9%'),
                        }}
                    >Total</AtiText>
                    </Left>
                    <Right>
                    <AtiText
                        style={{
                         
                            fontFamily: "AvenirNextLTPro",
                            fontSize: 16,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: 0,
                            textAlign: "right",
                            color: "#a92930",
                            marginTop: hp('1.9%'),
                            marginRight: wp('5.1%'),
                            // marginLeft: wp('65%'),
                        }}
                    >Rp 302,000</AtiText>
                    </Right>
                </View>
                </View>
                </ScrollView>
                <View style={{height:hp('30%')}}>
                <Image source={receipt1} style={{ width: wp('100%'), height: hp('2.6%') }} />
                <View style={{
                    alignContent: "flex-end",
                    width: wp('100%'),
                     height: hp('100%'),
                    backgroundColor: "#f0f0f0"
                }}>
                    <AtiButton 
                    onPress={this.navi.bind(this,'PostpaidBill')}
                    buttonStyle={{
                        width: wp('80%'),
                        height: hp('6.7%'),
                        borderRadius: 62,
                        backgroundColor: "#a92930",
                        marginTop: hp('4%'),
                        marginLeft: wp('12.4%')
                    }}
                        textStyle={{

                            color: "#ffffff",
                            paddingLeft: wp('35%')
                        }}
                    >Done</AtiButton>
                </View>
                </View>
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    dash: {
        height: 1,
        marginTop: hp('1.9%'),
        marginLeft: wp('5.5%'),
        marginRight: wp('5.2%'),
        opacity: 90
    }

})
const mapStateToProps = state => ({ ...state });
const mapActionToProps = () => ({
    navigate,
    ...action,
    // ...authentication,
});
export default connect(mapStateToProps, mapActionToProps())(withWebConsole(TopupReceipt));
