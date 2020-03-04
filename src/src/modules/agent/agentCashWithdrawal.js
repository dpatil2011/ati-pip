import React, { Component } from 'react';
import { AtiText, AtiRow, AtiCol, AtiCardItem, AtiTextInput, AtiList, AtiListItem, Left, Right, AtiIcon, AtiSpinner } from 'ati-ui-elements';
import { View, TouchableOpacity,StyleSheet, Text, ImageBackground, Image, ScrollView } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import img from '../../../assets/img/icon/cashwithdraw.png';
import Icon from 'react-native-vector-icons/AntDesign';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';
class agentCashWithdrawal extends Component {
    state = {  }
    render() {
        return (
        <ScrollView style={{backgroundColor:"#f8f6f0",flex:1}}>
              <AtiList
                style={{ backgroundColor: '#f8f6f0' ,marginTop:25}}
                    dataArray={[
                                    {name: 'Cash Withdrawal',amount:'20.000.000'},
                                    {name: 'Cash Withdrawal',amount:'500.000'},
                                    {name: 'Cash Withdrawal',amount:'10.000.000'},
                                    {name: 'Cash Withdrawal',amount:'4.000.000'}
                               ]}
                                renderRow={
                                    item =>
                                                (<AtiListItem style={{ backgroundColor: '#f8f6f0', borderBottomWidth: 1, borderBottomColor: '#cccccc',marginRight:10,paddingRight: 1,}} >
                                                    <Left>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                            {/* <View style={{ marginRight: 8,backgroundColor:'white',borderRadius:20 ,width:35,height:35,marginTop:2}} > */}
                                                               <Image  style={{height:42,width:40,marginTop:2,resizeMode: 'stretch'}} source={img} />
                                                            {/* </View> */}
                                                            <View>
                                                                <AtiText style={{
                                                                    color: '#000000', fontSize: 15, fontWeight: 'bold',forntFamily:'AvenirNextLTPro-Demi',textAlign:'left'
                                                                }}
                                                                > {item.name}{"\n"}
                                                                <AtiText style={{
                                                                    color: 'grey', fontSize: 13,  marginTop: 2,fontWeight: 'normal',forntFamily:'AvenirNextLTPro-Demi',textAlign:'left'
                                                                 }}>{" 23 feb 2018"}</AtiText>
                                                                </AtiText>
                                                                
                                                            </View>



                                                        </View>
                                                    </Left>
                                                    <View style={{flexDirection:'row'}}>
                                                        <AtiText style={{
                                                            fontSize: 15, fontWeight: 'bold',textAlign:'right'
                                                        }}
                                                        > 0011 1022 900{"\n"}
                                                        <AtiText style={{color:"red",textAlign:'left', fontWeight: 'normal',fontSize: 13}}>
                                                        -{item.amount}
                                                        </AtiText>
                                                        </AtiText>
                                                        {/* <AtiIcon name='mail' style={{marginLeft:8}}></AtiIcon> */}
                                                        <Icon
                                                            name="right"
                                                            style={{
                                                                resizeMode: 'stretch',
                                                                paddingLeft:hp('1%'),
                                                                // alignItems: 'flex-end',
                                                                marginTop: 12,
                                                                fontSize:15,
                                                                
                                                                color: '#000000',
                                                            }}
                                                        />
                                                    </View>

                                                </AtiListItem>)
                                        }
                                    />
    </ScrollView>
        );
    }
}

export default agentCashWithdrawal;