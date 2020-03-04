import React, { Component } from 'react';
import { AtiText,AtiRow,AtiCol,AtiTextInput, AtiButton,AtiSearchBar,AtiCard,AtiCardItem,Right,Left } from 'ati-ui-elements';
import { Content, Icon } from 'native-base';
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { AtiForm} from 'ati-redux-form';
import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';
import * as ac from './store/Transfer-action';

import I18n, { Loc } from 'ati-react-native-redux-i18n';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
class SelectAccountTransfer extends Component {
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
  renderSubmit = () => {
 
}
addMyAccount=()=>{
    this.props.navigate('AddAccount')
}
  render() {
    const {
      nameValidation,
      dateOfBirthValidation,
      salutationValidation,
      formID,
      onNext,
  } = this.props;
  console.log(this.props.newBankDetail);
    return (
      <View style={{flex:1}} >
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
            <View style={{backgroundColor:"#ffffff"}}>
              <View style={{flexDirection:'row', height:hp('8%'), width:wp('90%'), borderWidth:2,borderBottomColor:'#d6d6d6',borderTopColor:'#d6d6d6',borderRadius: 6,marginLeft:wp("5.3%"),marginRight:wp("5.3%"),backgroundColor:'white',borderColor:"#d6d6d6" }}>
            <AtiSearchBar
        searchBar
        style={{width:wp('80%'),backgroundColor:"white"}}
        // rounded
        //placeholder="search......."
        // style={{}}
        // itemStyle={{borderWidth:2, backgroundColor:'white',borderRadius:6,borderColor:"#d6d6d6" }}
    >
    </AtiSearchBar>
    <View style={{marginTop:hp("2%")}}><Icon name='ios-search'/></View>
    </View>
    <View style={{marginTop:hp("1%")}}>
              <TouchableOpacity>
                <AtiCard
                  style={{marginLeft:15,marginRight:15,width:380,borderRadius: 8,marginTop:20 }}
                  >
                  <AtiCardItem  bordered
                    style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 ,borderBottomLeftRadius:8,borderBottomRightRadius:8 }}
                    >
                        <Left  style={{marginTop:5}}>
                         
                              
                                 
                                    
                                    <AtiText  style={{fontSize: 14}}>
                           {this.props.bank.name}-{this.props.accountNumber}
            </AtiText>
          
                                    
         
                        </Left>
                        <Right>
                        <AtiText  style={{fontSize: 14}}>
                        Internal
            </AtiText>
                          </Right>
                          </AtiCardItem>
                          </AtiCard>
                          </TouchableOpacity>
                          </View>
    <TouchableOpacity onPress={this.addMyAccount.bind()}>
    <Image style={{marginTop:hp("55.5%"),marginLeft:wp("80%"),width:wp("14.7%"),height:hp("9.4%")}} source={require('../../../assets/img/icon/pluse.png')} />
           
    </TouchableOpacity>                       
                          
            
                              </View>
                            </AtiForm>
                            
                          
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
  ...ac,
    // ...authentication,
  });
  export default connect(mapStateToProps, mapActionToProps())(withWebConsole(SelectAccountTransfer));