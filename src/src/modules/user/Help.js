import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { View, StyleSheet,Text, ImageBackground, Image, ScrollView } from 'react-native';

import {AtiText,AtiCard,AtiCardItem,Right,Left, AtiIcon, AtiH1
    
} from 'ati-ui-elements';
import img from '../../../assets/img/logo/headerlogo1.png';
import { heightPercentageToDP, widthPercentageToDP } from '../../../assets/js/percentage-size';
class Help extends Component {
    state = {  }
    render() {
        return (
            <View style={{backgroundColor:'#f8f6f0',flex:1}}>
                <View style={{alignItems:'center',marginTop:heightPercentageToDP('3%'),marginBottom:heightPercentageToDP('3%')}}>
                    <Image  source={img} />
                    <AtiText style={{fontWeight:'bold',fontFamily:'AvenirNextLTPro-Bold',fontSize:35,marginTop:heightPercentageToDP('1%'),marginBottom:heightPercentageToDP('1%')}}>CoinCore</AtiText>
                    <AtiText style={{fontFamily:'AvenirNextLTPro-Regular',fontSize:15,letterSpacing:2}}>E-KOPERASI</AtiText>
                </View>
                <View>
                 <AtiCard
                  style={{marginLeft:heightPercentageToDP('3.3%'),marginRight:heightPercentageToDP('4.5%'),width:widthPercentageToDP('89.3%'),height:heightPercentageToDP('7.9%'),borderRadius: 8,marginTop:heightPercentageToDP('1.4') }}
                  >
                  <AtiCardItem  
                    style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 ,borderBottomLeftRadius:5,borderBottomRightRadius:5,marginTop:heightPercentageToDP('0.5%') }}
                    >
                        <Left>
                           <AtiText>02180636060</AtiText>
                        </Left>
                        <Right >
                        {/* <Icon name='rowing' /> */}
                        <AtiIcon name='headset'></AtiIcon>
                        </Right>
                    </AtiCardItem>
                </AtiCard>
                <AtiCard
                  style={{marginLeft:heightPercentageToDP('3.3%'),marginRight:heightPercentageToDP('4.5%'),width:widthPercentageToDP('89.3%'),height:heightPercentageToDP('7.9%'),borderRadius: 8,marginTop:heightPercentageToDP('1.4') }}
                  >
                  <AtiCardItem  
                    style={{ borderTopLeftRadius: 5,marginTop:heightPercentageToDP('0.5%'), borderTopRightRadius: 5 ,borderBottomLeftRadius:5,borderBottomRightRadius:5 }}
                    >
                        <Left>
                           <AtiText>081280636060</AtiText>
                        </Left>
                        <Right >
                        {/* <Icon name='rowing' /> */}
                        <AtiIcon name="phone-portrait"></AtiIcon>
                       
                        </Right>
                    </AtiCardItem>
                </AtiCard>
                <AtiCard
                  style={{marginLeft:heightPercentageToDP('3.3%'),marginTop:heightPercentageToDP('0.5%'),marginRight:heightPercentageToDP('4.5%'),width:widthPercentageToDP('89.3%'),height:heightPercentageToDP('7.9%'),borderRadius: 8,marginTop:heightPercentageToDP('1.4') }}
                  >
                  <AtiCardItem  
                    style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 ,borderBottomLeftRadius:5,borderBottomRightRadius:5 }}
                    >
                        <Left>
                           <AtiText>support@janusa.co.id</AtiText>
                        </Left>
                        <Right >
                        {/* <Icon name='rowing' /> */}
                        <AtiIcon name="mail"></AtiIcon>
                        </Right>
                    </AtiCardItem>
                </AtiCard>
                <AtiCard
                  style={{marginLeft:heightPercentageToDP('3.3%'),marginRight:heightPercentageToDP('4.5%'),width:widthPercentageToDP('89.3%'),height:heightPercentageToDP('7.9%'),borderRadius: 8,marginTop:heightPercentageToDP('1.4') }}
                  >
                  <AtiCardItem  
                    style={{ borderTopLeftRadius: 5,marginTop:heightPercentageToDP('0.5%'), borderTopRightRadius: 5 ,borderBottomLeftRadius:5,borderBottomRightRadius:5 }}
                    >
                        <Left>
                           <AtiText >www.janusa.co.id</AtiText>
                        </Left>
                        <Right >
                        {/* <Icon name='rowing' /> */}
                        <AtiIcon name="desktop"></AtiIcon>
                        
                        </Right>
                    </AtiCardItem>
                </AtiCard>
                </View>
                <View style={{flexDirection:'row',marginTop:heightPercentageToDP('2%')}}>
                <AtiCard
                  style={{marginLeft:heightPercentageToDP('5.5%'),marginRight:heightPercentageToDP('4.3%'),width:widthPercentageToDP('14.7%'),height:heightPercentageToDP('7.9%'),borderRadius: 12,marginTop:heightPercentageToDP('1.4') }}
                  >
                  <AtiCardItem  
                    style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 ,borderBottomLeftRadius:12,borderBottomRightRadius:12 }}
                    >
                       <AtiIcon name='logo-facebook' style={styles.i}></AtiIcon>
                       {/* <Icon name='facebook-f' /> */}
                      
                    </AtiCardItem>
                </AtiCard>
                <AtiCard
                  style={{marginRight:heightPercentageToDP('4.3%'),width:widthPercentageToDP('14.7%'),height:heightPercentageToDP('7.9%'),borderRadius: 8,marginTop:heightPercentageToDP('1.4') }}
                  >
                  <AtiCardItem  
                    style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 ,borderBottomLeftRadius:5,borderBottomRightRadius:5 }}
                    >
                       <AtiIcon name='logo-twitter' style={styles.i}></AtiIcon>
                       {/* <Icon name='rowing' /> */}
                    </AtiCardItem>
                </AtiCard>
                <AtiCard
                  style={{marginRight:heightPercentageToDP('4.3%'),width:widthPercentageToDP('14.7%'),height:heightPercentageToDP('7.9%'),borderRadius: 8,marginTop:heightPercentageToDP('1.4') }}
                  >
                  <AtiCardItem  
                    style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 ,borderBottomLeftRadius:5,borderBottomRightRadius:5 }}
                    >
                      
                       <AtiIcon name='logo-linkedin' style={styles.i}></AtiIcon>
                       {/* <Icon name='rowing' /> */}
                    </AtiCardItem>
                </AtiCard>
                <AtiCard
                  style={{marginRight:heightPercentageToDP('4.3%'),width:widthPercentageToDP('14.7%'),height:heightPercentageToDP('7.9%'),borderRadius: 8,marginTop:heightPercentageToDP('1.4') }}
                  >
                  <AtiCardItem  
                    style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 ,borderBottomLeftRadius:5,borderBottomRightRadius:5 }}
                    >
                        
                       <AtiIcon name='logo-instagram' style={styles.i} ></AtiIcon>
                       {/* <Icon name='rowing' /> */}
                    </AtiCardItem>
                </AtiCard>
                </View>
                
            </View>
        );
    }
}

export default Help;
const styles = StyleSheet.create({


    logoUp: {
        height: 37,
        width: 37,
        // marginLeft: 20,
        // marginBottom: 7.3,
        // marginTop: 10.3,
        // marginRight: 10,
        // margin: 10.3,
    },
    i: {
        marginLeft:heightPercentageToDP('0.5%'),
        
    },
});