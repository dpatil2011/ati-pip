import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
//import bg from './../../../../../assets/img/icon/mask_group_19.png'
import border from './../../../assets/img/icon/border.png'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { AtiText, AtiIcon } from 'ati-ui-elements';
import navigate from '../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import * as action from '../../common/components/popup/store/popup-action';
import { connect } from 'react-redux';
import * as homeAction from '../home/store/HomeAction';


class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            amount:'0'
         }
    }
    nav=(e)=>{
        this.props.navigate(e)
    }
    componentDidMount(){
        if(this.props.Qamount==''){
            this.setState({
                amount:'0'
            })}
            else{
                this.setState({
                    amount: this.props.Qamount
                })
            }
        }
    
    render() { 
        return ( 
            <View style={{backgroundColor:'rgb(169,41,48)', elevation:8}}>
                <View style={{backgroundColor:'white', height:heightPercentageToDP('45%'), justifyContent:'space-between'}}>
                    
                    <View style={{paddingTop:heightPercentageToDP('10%'), alignItems:'center'}}><AtiText style={bill}>Bill</AtiText>
                        <AtiText style={styles}>Rp {this.state.amount}</AtiText>
                        <AtiText style={paradiseDynastyCen}>Paradise Dynasty Century</AtiText>
                    </View>
                    <Image source={border} style={{width:widthPercentageToDP('100%'), height:heightPercentageToDP('6%')}}/>
                </View>
                <View style={{ height:heightPercentageToDP('50%'), alignItems:'center'}}>
                    <AtiText style={pastikanNominalDi}>Make sure the nominal above is correct</AtiText>
                    <TouchableOpacity style={{width:widthPercentageToDP('80%'), backgroundColor:"white", height:heightPercentageToDP("7.8%"), marginTop:heightPercentageToDP('5%'), paddingTop:heightPercentageToDP('2%'),  borderRadius:widthPercentageToDP('8%')}} onPress={this.nav.bind(this, 'Qpin')}>
                        <AtiText style={pay}>Pay</AtiText>
                    </TouchableOpacity>
                </View>
                <View>
                    <AtiText style={{position:'absolute', marginTop:heightPercentageToDP('2%'), marginLeft:widthPercentageToDP('80%')}}><AtiIcon name='share'/></AtiText>
                </View>
            </View>
            
         );
    }
}
const mapStateToProps = (state) => {
    const { home } = state;
    return {
      ...home,
    };
  };
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...homeAction
    // ...authentication,
  });
  export default connect(mapStateToProps, mapActionToProps())(withWebConsole(Confirmation));

const styles = {
    marginTop:heightPercentageToDP("5%"),
    fontFamily: "AvenirNextLTPro",
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
    color: "#a92930"
  };
  const bill = {
    fontFamily: "AvenirNextLTPro",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000"
  };
  const paradiseDynastyCen = {
      marginTop:heightPercentageToDP('2%'),
    fontFamily: "AvenirNextLTPro",
    fontSize: 18,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#4a4a4a"
  };
  const pastikanNominalDi = {
   fontFamily: "AvenirNextLTPro",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
    marginTop:heightPercentageToDP('19%')
  };
  const pay = {
    fontFamily: "AvenirNextLTPro-Demi",
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#a92930"
}