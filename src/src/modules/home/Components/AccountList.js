import React, { Component } from 'react';
import { View, StyleSheet,ImageBackground, Text, Modal,TouchableHighlight, Image, ScrollView,TouchableOpacity,Alert } from 'react-native';
import * as act from './../../../modules/home/store/HomeAction'
import axios from 'axios';
// import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
  import { Badge } from 'native-base';
  import up from './../../../../assets/img/background/accountbg.png';
import dot from './../../../../assets/img/icon/threedots.png';
import navigate from './../../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../../common/components/popup/store/popup-action';
import { AtiText, AtiSwitchToggle, AtiCard, AtiCardItem, AtiTextInput, AtiList, AtiListItem, Left, Right, AtiIcon, AtiSpinner, AtiH1, AtiH2 } from 'ati-ui-elements';
class AccountList extends Component {
  constructor(props){
    super(props);
    this.state={
      savingsAccounts:[],
      modalVisible: false,
      switchToggleValue:true,
   
    }
  }

    componentDidMount() {
        const URL = "https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/131/accounts";
        // axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/savingsaccounts/1179?associations=all', {
        console.log(this.props.userData.data)
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
          console.log("hi" + JSON.stringify(response.data.savingsAccounts[0].id))
          this.setState({
            savingsAccounts:response.data.savingsAccounts,
            savingsId: response.data.savingsAccounts[0].id,
         
          });
       
          console.log(this.state.savingsAccounts)
          
         });
      }
      
  
  
    
      render() {
       
      detail = (e) => {
        // this.props.setSavings(e)
        this.props.setsavingsAccounts(e)
        this.props.navigate('AccountDetail');
      }
      setModalVisible=(visible)=> {
        this.setState({modalVisible: visible});
      }
          return(
      
      <View style={{backgroundColor:'#f8f6f0',flex:1}}>
       <Modal
          animationType="fade"
          transparent={true}
          // transparent={false}
          // presentationStyle="fromSheet"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{flexDirection:'column',height:heightPercentageToDP('100%'), backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
              <TouchableOpacity
              onPress={() => {
                
                setModalVisible(false);
              }}>
                    <View style={{height:hp('60%')}}>
              
              </View>
            </TouchableOpacity>

           <View style={{height:hp('38%'), backgroundColor:"white"}}>
              <View style={{flexDirection:'row',marginTop:heightPercentageToDP('3%'),borderBottomColor:'grey',borderBottomWidth:1,marginLeft:10,marginRight:10}}>
                <AtiText 
                // enum=('normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
                style={{marginRight:heightPercentageToDP('13%'),fontWeight:'bold',marginLeft:widthPercentageToDP('4%'),fontSize:15,forntFamily:'AvenirNextLTPro-Demi'}}>
                  Make Transaction Default?</AtiText>
                <AtiSwitchToggle
                  events={
                              {
                                  onValueChange: (e) => {
                                      this.setState({ switchToggleValue: e });
                                  },
                              }
                          }
                  value={this.state.switchToggleValue}
                  onTintColor="green"
                  thumbTintColor="white"
                  tintColor="grey"
                  // circleStyle={{
                  //   width: 20,
                  //   height: 20,
                  //   borderRadius: 19,
                  //   backgroundColor: 'white', // rgb(102,134,205)
                  // }}
                  style={{ transform: [{ scaleX: 1.6 }, { scaleY: 1.5 }],marginBottom:heightPercentageToDP('2%'),marginRight:widthPercentageToDP('4%') }}
                  labelStyle={{
                      marginLeft: -130,
                      fontSize: 15,
                      }}
                  viewStyle={{
                       marginRight: 20,
                  }}
                  label="English"
                  ></AtiSwitchToggle>
           </View>
           <View style={{marginTop:heightPercentageToDP('2%')}} >
           <View style={{flexDirection:'row',marginLeft:widthPercentageToDP('4%')}}>
                <View
                //  style={{backgroundColor:'white',borderRadius:8,borderWidth:2,borderColor:'black'}}
                 >
                <Badge style={{ height: 23, width: 23, backgroundColor:"white",borderColor:'black',borderWidth:2 }}>
                                                                    <Text style={{
                                                                       fontWeight: 'bold', fontSize: 13, color: '#000000', textAlign: 'center'
                                                                    }}>
                                                                    |
                                                                    </Text>
                                                                </Badge>
                 
                  {/* <AtiText style={{fontWeight:'bold',fontSize:20,color:'black',marginBottom:5,marginLeft:7}}>|</AtiText> */}
                </View>
                <AtiText style={{fontSize:15,forntFamily:'AvenirNextLTPro-Regular',fontWeight:'bold',marginLeft:5}}>Transaction Default</AtiText>
           </View>
           <AtiText style={{fontSize:13,marginLeft:widthPercentageToDP('4%'),marginRight:widthPercentageToDP('2%'),forntFamily:'AvenirNextLTPro-Regular',marginBottom:heightPercentageToDP('2%'),marginTop:heightPercentageToDP('2%'),color:'grey'}}>This account that is used as the default transaction will be automaticalty selected at the time of each transaction.{"\n"}But you can still replace with another account except on{"\n"} BayarQU transaction.
           </AtiText>
           {/* <TouchableOpacity
              onPress={() => {
               
                setModalVisible(false);
              }}>
              <Text>Hide Modal</Text>
            </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </Modal>
          {
          this.state.savingsAccounts.map(function(x){
          return(
            <View>
              <TouchableOpacity onPress={detail.bind(this,""+x.id+"")}>
                <AtiCard
                  style={{marginLeft:15,marginRight:15,width:380,borderRadius: 8,marginTop:10 }}
                  >
                  <AtiCardItem  bordered
                    style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 ,borderBottomLeftRadius:8,borderBottomRightRadius:8 }}
                    >
                        <Left>
                           <View style={{flexDirection:'row'}} >
                             <View>
                             <ImageBackground style={styles.logoUp} source={up}>
                             <AtiText style={styles.BN}>janusa</AtiText></ImageBackground>
                              {/* <Image style={styles.logoUp} source={up} /> */}
                              </View>
                              <View style={{flexDirection:'column'}}>
                                    <AtiText style={{ fontSize: 14,marginTop:5,marginBottom:15,fontWeight:'bold',color:'black',forntFamily:'AvenirNextLTPro-Demi'}}>{x.accountNo}{"\n"}
                                    <AtiText  style={{ fontSize: 14,fontWeight:'normal',forntFamily:'AvenirNextLTPro-Demi'}}>
                                    {x.shortProductName.toUpperCase()}</AtiText>
                                    {/* <AtiText style={{ fontSize: 14, fontWeight:'bold',marginTop:4,marginLeft:1}}></AtiText> */}
                                    </AtiText>
                              </View>
                           </View>
                        </Left>
                        <Right >
                            <TouchableOpacity
                                onPress={() =>
                                   {
                                  //   this.setState({
                                  //     modalVisible: true,
                                  // });
                                // v().bind;
                                  setModalVisible(true);
                            }}
                            >
                                 <Image style={styles.logoDown} source={dot} />
                            </TouchableOpacity>
                        </Right>
                    </AtiCardItem>
                </AtiCard>
            </TouchableOpacity>
           </View>
           )
         })
        }
       
      {/* <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight> */}
        

      </View>
    )
  }
}
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
    ...act
    // ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(AccountList));
// export default AccountList;
const styles = StyleSheet.create({

  container: {
  
    backgroundColor: '#f8f6f0',
  },
  BN:{

     color:'white',
     fontSize:13,
     marginTop:32
  },

    
   
   
    

    NA: {
        color: '#ffffff',
        fontSize: 20,
        // height: hp('10%'),
        // width:wp('57.4%'),
        marginLeft: hp('3.5%'),
        // marginBottom: hp('2%'),
        fontWeight: 'bold'
        // marginTop: hp('5.1%'),
    },
    logoUp: {
        height: 70,
        width: 90,
        overflow: 'hidden',
        borderRadius:12,
        // borderTopRightRadius:8,
        // borderTopLeftRadius:8,
        // borderBottomLeftRadius:8,
        // borderBottomRightRadius:8,
        marginRight: 11,
   
    },
    logoDown: {
        height: 60,
        width: 30,
        marginBottom:30,
    },
});