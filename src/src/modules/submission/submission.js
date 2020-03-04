import React, { Component } from 'react';
'use strict';
import { View, StyleSheet, Text, ScrollableTab, Image, ScrollView,TouchableOpacity,Tab, Tabs } from 'react-native';
import { AtiSegment, AtiTabs,AtiTab,AtiCardItem, AtiTextInput, AtiList, AtiListItem, Left, Right, AtiIcon, AtiSpinner, AtiText } from 'ati-ui-elements';
import {TabHeading, List,} from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SubList from './List';
import Status from './Status';
import Status1 from './StatusSubmission';
import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';
import * as act from './Store/Submission-action';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
class Submission extends Component {
  constructor(props){
    super(props);
    this.state=({
      status:false,
      mPr:'6.5%',
      list:require('../../../assets/img/icon/listactive.png'),
      status:require('../../../assets/img/icon/Pending.png'),
      textColor:'#ffffff',
      textColor1:'#9b9b9b',
    })
  }
  
  renderTab(e){
    if(e==1){
      this.setState({
      mPr:'0%',
      list:require('../../../assets/img/icon/linstin.png'),
      status:require('../../../assets/img/icon/dPending.png'),
      textColor:'#9b9b9b',
      textColor1:'#ffffff',
      })
    }else{
      this.setState({
        textColor:'#ffffff',
        textColor1:'#9b9b9b',
        mPr:'6.5%',
        list:require('../../../assets/img/icon/listactive.png'),
        status:require('../../../assets/img/icon/Pending.png'),
        })
    }
  }
    render() {   
   console.log(this.props.status);
        const mPr=this.state.mPr
        const c=this.state.textColor;
        const c1=this.state.textColor1;
        
      return (
        <AtiTabs 
        onChangeTab={({i}) => this.renderTab(i)} initialPage={0} tabBarUnderlineStyle={{width:widthPercentageToDP('43%'),marginLeft:widthPercentageToDP(mPr),color:'white',backgroundColor:'white'}}>
          <AtiTab key={0} heading={<TabHeading style={{backgroundColor:'#a92930',borderColor: '#a92930'}}>
                              <Image source={this.state.list} style={{height:heightPercentageToDP('2.5%'),width:widthPercentageToDP("4.2%")}}/>
                              <AtiText style={{color:c}} style={styles.text}>List of Submission</AtiText>
                            </TabHeading>}>
      <SubList/>
          </AtiTab>
        
          <AtiTab key={1} heading={ <TabHeading style={{backgroundColor:'#a92930',borderColor: '#a92930'}}>
                              <Image source={this.state.status} style={{height:heightPercentageToDP('2.5%'),width:widthPercentageToDP("4.2%")}}/>
                              <AtiText style={{color:c1}} style={styles.text}>Status of Submission</AtiText>
                            </TabHeading>}>
                            {(this.state.status)== false? <Status1 /> : <Status1 /> }
          </AtiTab>
</AtiTabs>
    
        );
        }
        }
        const styles = StyleSheet.create({
            picture: {
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover',
            },
            text: {
              fontFamily: "AvenirNextLTPro",
              fontSize: 14,
              fontWeight: "normal",
              fontStyle: "normal",
              textAlign: "left",
             
              }
          });
const mapStateToProps = (state) => {
  const { submission } = state;
  return {
      ...submission,
  };
};
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...act,
    // ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(Submission));