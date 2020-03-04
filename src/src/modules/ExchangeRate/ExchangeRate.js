import React, { Component } from 'react';
import { Image, View, ScrollView } from 'react-native';
import exchange from './../../../assets/img/icon/Exchange.png'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { AtiText,AtiList, AtiListItem } from 'ati-ui-elements';
import axios from 'axios';


class ExchangeRate extends Component {
        constructor(props) {
            super(props);
            this.state = { 
            dat:[],
               date:''
             }
        }


   
        componentDidMount() {
            const URL = "https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/mobile/exchangerate";
            axios.get(URL, {
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Fineract-Platform-TenantId': '000000',
              },
              auth: {
                username: "user84",
                password: "coin",
              },
            }).then((response) => {
              const datey = new Date().getFullYear();
        const datem = new Date().getMonth() + 1;
        const dateD = new Date().getDate();
        const dateyProps = new Date(response.data.lastUpdatedOnDate).getFullYear();
        const dateDProps = new Date(response.data.lastUpdatedOnDate).getDate();
        const dateprops = new Date(response.data.lastUpdatedOnDate).getMonth();
        var month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const date = `${datey}-${datem}-${dateD}`;
        const newDate1 = `${dateDProps} ${month_names[dateprops]} ${dateyProps}`;
        console.log("Date"+newDate1);

              console.log(JSON.stringify(response.data))
              this.setState({
                  dat:response.data.exchangeRates,
                  date: newDate1
              })
            });
          } 
    render() { 
        const data=this.state.dat
        return ( 
            <View style={{alignItems:'center',  height:heightPercentageToDP('100%'), backgroundColor:'white'}}>
                <View style={{alignItems:'center',backgroundColor:'#f5f8fa', width:widthPercentageToDP('100%')}}>
                <Image source={exchange} style={{width:widthPercentageToDP('50%'), height:heightPercentageToDP('20%'), marginTop:heightPercentageToDP('2%')}}/>
                <AtiText style={ex}>Exchange Rates in Rupiah (IDR)</AtiText>
                <AtiText style={last}>Last update {this.state.date}</AtiText>
                </View>
                <View style={{flexDirection:'row', justifyContent:'flex-start', backgroundColor:'#a92930', width:widthPercentageToDP('100%'), height:heightPercentageToDP('8%'), paddingLeft:widthPercentageToDP('5%'), paddingVertical:heightPercentageToDP('2.5%')}}>
                <View style={{flexDirection:'column', width:widthPercentageToDP('42%')}}><AtiText style={th}>Currency</AtiText></View>
                <View style={{flexDirection:'column', width:widthPercentageToDP('26%')}}><AtiText style={th}>Sell</AtiText></View>
                <View style={{flexDirection:'column', width:widthPercentageToDP('20%')}}><AtiText style={th}>Buy</AtiText></View>
                </View>
                <ScrollView>
                    <AtiList
                            dataArray={data}
                            renderRow={
                                (item, index )=>{
                                    var i= data.indexOf(item);
                                    var bg="";
                                    if(i%2==0){
                                        bg="white";
                                        
                                    }else{
                                        bg="#f5f8fa";
                                        
                                    }
                                   
                                   
                                   return (
                                        <AtiListItem style={{backgroundColor:bg, marginLeft:widthPercentageToDP('1.2%'), paddingLeft:widthPercentageToDP('1.2%')}}>
                                                

                                            <View style={{ flexDirection: 'row' , width:widthPercentageToDP('100%'), paddingHorizontal:widthPercentageToDP('1%')}}>
                                                <View style={{ flexDirection:'column', width:widthPercentageToDP('42%')}} >
                                        <AtiText  style={content}> {item.currency.code}</AtiText>
                                                </View>
                                                <View style={{flexDirection:'column',  width:widthPercentageToDP('26%'), alignItems:'center'}}>
                                        <AtiText style={content}> {item.sell}</AtiText>
                                                </View>
                                                <View style={{flexDirection:'column',  width:widthPercentageToDP('20%'), alignItems:'center'}}>
                                                    <AtiText style={content}> {item.buy}</AtiText>
                                                </View>
                                            </View>
                                        </AtiListItem>)
                                }
                                            }
                    />
                </ScrollView>
            </View>
         );
    }
}
 
export default ExchangeRate;

const ex = {
    marginTop:heightPercentageToDP('2.5%'),
    fontFamily: "AvenirNextLTPro",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textAlign: "center",
    color: "#000000"
  };
  const last = {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000",
    marginBottom:heightPercentageToDP('2%'),
    marginTop:heightPercentageToDP('1.5%')
  };
  const content = {
    fontFamily: "AvenirNextLTPro",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000", 
    alignSelf:'flex-start'
  };
  const th = {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
    alignSelf:'flex-start'

  };