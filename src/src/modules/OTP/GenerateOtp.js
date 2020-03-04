import React, { Component } from 'react';
import exchange from './../../../assets/img/icon/GenerateOtp.png'
import { AtiText } from 'ati-ui-elements';
import { View, Image, TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';
import { Timer } from 'react-native-stopwatch-timer';
import axios from 'axios'

class GenerateOtp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time:'',
            timer:'',
            timerStart: true,
            stopwatchStart: false,
            totalDuration: '',
            timerReset: false,
            stopwatchReset: false,
            disable:false,
            color:'#a92930',
            code:''
          };
          this.toggleTimer = this.toggleTimer.bind(this);
          this.resetTimer = this.resetTimer.bind(this);

        }
        handleTimerComplete = () => {
          this.setState({
              timerStart:true,
              disable:false,
              color:'#a92930',
              time:'',
              role:"Mobile user",    
              accountNumber: "0101190002",     
              imeiNumber: "862400041292854"
          })
      }

        toggleTimer() {
          this.setState({timerStart: !this.state.timerStart, timerReset: false});
        }
       
        resetTimer() {
          this.setState({timerStart: false, timerReset: true});
        }
        
        getFormattedTime(time) {
            this.currentTime =time;
        };
    
    otp=()=>{
      
      axios({
        method: 'post',
        url: 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/mobile/otp',
        data:{
          role:"Mobile user",    
          accountNumber: "0101190002",     
          imeiNumber: "862400041292854",
        },
        auth: {
                     username: "coin",
                    password: "coin",
                               
                   },
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Fineract-Platform-TenantId': 'default',
        },
    }).then((response) => {
      console.log(response.data);
      this.setState({
        totalDuration:response.data.expiredMillisecond,
        time:response.data.code,
        timerReset: true,
        timerStart:false,
        disable:true,
        color:'#bebebe',
      })
    })
        .catch(function (response) {
            alert(response);
            console.log(response);
        });

    }
    render() { 
        return ( 
            <View style={{alignItems:'center',  height:heightPercentageToDP('100%'), backgroundColor:'white'}}>
            <Image source={exchange} style={{width:widthPercentageToDP('40%'), height:heightPercentageToDP('23%'), marginTop:heightPercentageToDP('5%')}}/>
            <AtiText style={generateCode}>Generate Code</AtiText>
            <View style={{width:widthPercentageToDP('70%')}}>
            <AtiText style={show}>Show and use the numeric code to transact through an agent or partner</AtiText>
            <AtiText style={OtpCode}>Your OTP Code</AtiText>
            </View>
            <View style={{flexDirection:'row', width:widthPercentageToDP('80%'), marginHorizontal:widthPercentageToDP('12%'), height:heightPercentageToDP('9%'), borderRadius:widthPercentageToDP('2%'), borderColor:'#d6d6d6', borderWidth:1, marginTop:heightPercentageToDP('3%')}}>
    <View style={{flexDirection:'column', width:widthPercentageToDP('70%')}}><AtiText style={layer}>{this.state.time} </AtiText>
   </View>
                <View style={{flexDirection:'column', width:widthPercentageToDP('5%'), marginTop:heightPercentageToDP('2.5%')}}><TouchableOpacity><AtiText><Icon name="share-2" size={20}/></AtiText></TouchableOpacity></View>
            </View>
        <AtiText style={options}>{this.state.timer} </AtiText>
        {!this.state.timerStart && <Timer totalDuration={this.state.totalDuration} secs start={!this.state.timerStart}
          reset={this.state.timerReset}
          options={options}
          handleFinish={this.handleTimerComplete.bind()}
          getTime={this.getFormattedTime} />
           || <AtiText style={{height:heightPercentageToDP('6%'),
    marginTop:heightPercentageToDP('3%')}}/>}
          
            <TouchableOpacity style={{width:widthPercentageToDP('80%'), backgroundColor:this.state.color, height:heightPercentageToDP("7.8%"), marginTop:heightPercentageToDP('5%'), paddingTop:heightPercentageToDP('2%'),  borderRadius:widthPercentageToDP('8%')}} disabled={this.state.disable} onPress={this.otp.bind()} >
                        <AtiText style={generate}>Generate Code</AtiText>
                    </TouchableOpacity>
            </View>
            
         );
    }
}
 
export default GenerateOtp;
const generateCode = {
    marginTop:heightPercentageToDP('2%'),
    fontFamily: "AvenirNextLTPro",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textAlign: "center",
    color: "#000000"
  };
  const show = {
    marginTop:heightPercentageToDP('0.5%'),
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    lineHeight: 20,
    color: "#000000"
  };
  const OtpCode = {
    marginTop:heightPercentageToDP('3.5%'),
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000"
  };
  const generate = {
    fontFamily: "AvenirNextLTPro",
    fontSize: 15,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  };
  const layer = {
    marginTop:heightPercentageToDP('1.5%'),
    marginLeft:widthPercentageToDP('9%'),
    fontFamily: "AvenirNextLTPro",
    fontSize: 22,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.44,
    textAlign: "center",
    color: "#000000"
  };

  
 
const options = {
  container: {
    height:heightPercentageToDP('6%'),
    marginTop:heightPercentageToDP('3%'),
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 5,
  },
  text: {
    fontFamily: "AvenirNextLTPro-Demi",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#a92930"
  }
};