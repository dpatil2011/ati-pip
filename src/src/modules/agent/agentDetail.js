import React, { Component } from 'react';

import map from './../../../assets/img/icon/map1.jpg';
import float from './../../../assets/img/icon/float.png';
import profile from './../../../assets/img/background/profile.png';
import dir from './../../../assets/img/logo/headerlogo1.png';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
    heightPercentageToDP,
    widthPercentageToDP,
  } from 'react-native-responsive-screen';
import { AtiText, AtiCardShowcase, AtiCard, AtiCardItem, AtiTextInput, AtiList, AtiListItem, Left, Right, AtiIcon, AtiSpinner } from 'ati-ui-elements';
import { View, TouchableOpacity,StyleSheet, Text, ImageBackground, Image, ScrollView } from 'react-native';
// import { Icon } from 'react-native-vector-icons';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';


class agentDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Agent: [],
        }
      }
    
    render() {
        return (
            <View style={{ backgroundColor: '#f8f6f0', height: hp("100%") }}>
            <Image source={map} style={{ height: hp("58%"), width: wp("100%"), resizeMode: 'stretch' }}>
            </Image>
            <View style={{ position: 'absolute', marginLeft: wp("65%"), marginTop: hp("48%"),backgroundColor:'white',height:55,width:130,borderRadius:5 }}>
              
              <View style={{flexDirection:'row',marginTop:12,marginLeft:8}}>
                  <AtiIcon  type="FontAwesome" name='map'style={{fontSize:20,marginTop:2}} ></AtiIcon>
                  <AtiText style={{fontSize:15,marginTop:2}}>{"  Directions"}</AtiText>
              </View>
            </View>
            <View style={{flexDirection:'row',marginTop:20}}>
                <Left>
                    <AtiText style={{ fontStyle: 'AvenirNextLTPro-Medium', fontSize: 16, fontWeight: 'bold',marginLeft:15 }}>{this.props.agent.fullname}</AtiText>
                    </Left>
                    <Right>
                    <View style={{flexDirection:'row'}}>
                        <AtiIcon  type="FontAwesome" name='map'  style={{fontSize:12,marginTop:3}}></AtiIcon>
                        <AtiText style={{ fontStyle: 'AvenirNextLTPro-Medium', fontSize: 12, marginRight:15 }}>{"  0.2 km"}</AtiText>
                    </View></Right>
            </View>
            <AtiText style={{marginLeft:8,marginRight:2,color:'black',marginTop:8,fontSize:13.8}}> Graha Anabatic Jl. Scientia Boulevard Kav U2{"\n"} Summarecon Serpong,Tangerang, Banten-Indonesia</AtiText>
            <View style={{flexDirection:'row',marginTop:heightPercentageToDP('2%')}}>
                <AtiCard
                  style={styles.c}
                  >
                  <AtiCardItem 
                  style={styles.ci} 
                    >
                        <View style={{marginLeft:8}}>
                       <AtiIcon  type="FontAwesome" name='envelope' style={{marginLeft:heightPercentageToDP('1.0%')}}></AtiIcon>
                       <AtiText style={{fontSize:10}}>{"   Email"}</AtiText>
                    
                       </View>
                      
                    </AtiCardItem>
                </AtiCard>
                <AtiCard
                 style={styles.c} 
                  >
                  <AtiCardItem 
                   style={styles.ci}  
                    >
                        <View>
                       <AtiIcon  type="FontAwesome" name='comment' style={styles.i}></AtiIcon>
                       <AtiText style={{fontSize:10}}>{"    Chat"}</AtiText>
                       </View>
                    </AtiCardItem>
                </AtiCard>
                <AtiCard
                 style={styles.c} 
                  >
                  <AtiCardItem  
                   style={styles.ci} 
                    >
                      <View >
                       <AtiIcon type="FontAwesome" name='mobile' style={styles.i}></AtiIcon>
                       <AtiText style={{fontSize:10}}>{"     Call"}</AtiText>
                       </View>
                    </AtiCardItem>
                </AtiCard>
                <AtiCard
                 style={styles.c} 
                  >
                  <AtiCardItem  
                   style={styles.ci} 
                    >
                        <View >
                       <AtiIcon  type="FontAwesome" name='whatsapp'  style={styles.i} ></AtiIcon>
                       <AtiText style={{fontSize:10}}>WhatsApp</AtiText>
                       </View>
                    </AtiCardItem>
                </AtiCard>
                </View>
          </View>
        );
    }
}
const mapStateToProps = (state) => {
    const { AgentReducer } = state
    return {
        ...AgentReducer
    }
}

export default connect(mapStateToProps,null)(agentDetail);
const styles = StyleSheet.create({

    i: {
        marginLeft:heightPercentageToDP('1.8%'),
    },
    c:{
        marginLeft:heightPercentageToDP('2%'),
        width:widthPercentageToDP('20%'),
        height:heightPercentageToDP('10%'),
        borderRadius: 20,
        marginTop:heightPercentageToDP('1.4') 
    },
    ci:{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20 ,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        alignContent:'center'
    }
});