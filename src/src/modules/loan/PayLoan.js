import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AtiText, AtiTextInput } from 'ati-ui-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { Loc } from 'ati-react-native-redux-i18n';
import Icon from 'react-native-vector-icons/AntDesign'

class PayLoan extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    nav=(e)=>{
        //this.props.setQamount(this.state.inputValue)
        this.props.navigate(e)
    }
    render() { 
        return (
            <View>
                <View style={{backgroundColor:'#ffffff', padding:wp('5%'), height:hp('38%')}}>
                    <AtiText style={styles.label1}>Nominal Payment</AtiText>
                    <AtiText style={{width:wp('90%'), backgroundColor:'#fafafa', textAlign:'center', paddingVertical:hp('2%'), marginBottom:hp('1.5%'), borderRadius:wp('1.5%'), fontFamily: "AvenirNextLTPro", fontSize: 32, fontWeight: "bold", color: "#a92930"}}>Rp 1,299,000</AtiText>
                    <Loc style={styles.label3} locKey="label.PayFromAccount" />
                    <View style={styles.input2}>
                      <TouchableOpacity style={{flexDirection:'row'}}><AtiText style={styles.text}>TARAMAS - 0011 1022 900</AtiText><AtiText style={{ paddingTop:hp('1%')}} ><Icon name='right' color="#78849e"/></AtiText></TouchableOpacity>
                </View>
                </View>
                <View style={{backgroundColor:'#ffffff', marginTop:hp('2%'), padding:wp('5%'), height:hp('50%')}}>
                <Loc style={styles.label} locKey="label.SelectLoanAccount" />
                <View style={styles.input2}>
                      <TouchableOpacity style={{flexDirection:'row'}}><AtiText style={styles.text}>TARAMAS - 0011 1022 900</AtiText><AtiText style={{ paddingTop:hp('1%')}} ><Icon name='right' color="#78849e"/></AtiText></TouchableOpacity>
                </View>
                <AtiText style={styles.balance}>Available balance is Rp 9,760,000</AtiText>
                <Loc style={styles.label} locKey="label.Message" />
                <AtiTextInput textStyle={styles.input2} placeholder='Optional'/>
                <TouchableOpacity style={{width:wp('80%'), backgroundColor:"#a92930", height:hp("7.8%"), marginTop:hp('3.7%'), paddingTop:hp('2%'),  marginLeft:wp('3.8%'), borderRadius:wp('8%')}} ><AtiText style={{color:'white', alignSelf:'center'}}>Pay</AtiText></TouchableOpacity>
                </View>
            </View>
          );
    }
}
 
export default PayLoan;

const styles= StyleSheet.create({
    text:{
        width:wp('78%'),
        fontFamily: "AvenirNextLTPro",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0.28,
        textAlign: "left",
        color: "#000000"
      },
    input2: {
        flexDirection:'row',
        borderRadius: 10,
        borderColor: '#d6d6d6',
        borderWidth:1,
        paddingLeft: wp('3.5%'),
        marginTop:hp('1%'),
       // marginBottom:hp('2%'),
        // marginLeft: wp('6.9%'),
        // marginRight: wp('6.9%'),
        height: hp('7%'),
        color:"#a92930",
        fontWeight:'bold',
        fontSize:14,
        backgroundColor:"#ffffff",
        width: wp('90%'),
        paddingTop:hp('1.5%'),
    },
    label:{
        fontFamily: "AvenirNextLTPro", 
        fontSize: 14,  
        marginBottom:hp('0.8%'),
        color:'#000000'},
        
    label1:{
        fontFamily: "AvenirNextLTPro", 
        fontSize: 14, alignSelf:'center', 
        marginBottom:hp('2%'),
        color:'#000000'},
    label3:{
        marginTop:hp('3%'),
        fontFamily: "AvenirNextLTPro", 
        fontSize: 14,  
        marginBottom:hp('0.8%'),
        color:'#000000'
    },
    balance: {
        marginTop:hp('1%'),
        marginBottom:hp('2%'),
        fontFamily: "AvenirNextLTPro",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0.24,
        textAlign: "left",
        color: "#008211"
      }
    
})