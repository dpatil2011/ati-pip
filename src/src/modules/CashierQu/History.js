import React, { Component } from 'react';
import {  View, ScrollView } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { AtiText,AtiList, AtiListItem } from 'ati-ui-elements';
import Icon from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import moment from 'moment';


class History extends Component {
        constructor(props) {
            super(props);
            this.state = { 
               dat:[]
             }
        }
        componentDidMount(){
        axios({
            method: 'post',
            url: 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/transactions/ppob/history/list',
            data:{
                  
                    accountNumber: "00112015562",     
                    isSuccess: true,     
                    categoryModeCode: "BUY" 
                     
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
         // console.log(response);
          this.setState({
              dat:response.data
          })
        })
            .catch(function (response) {
                alert(response);
                console.log(response);
            });
        }
   
    render() { 
        const data=this.state.dat;
        return ( 
            <View style={{alignItems:'center',  height:heightPercentageToDP('100%'), backgroundColor:'white'}}>
                <View style={{flexDirection:'row', backgroundColor:'#f5f8fa', width:widthPercentageToDP('100%'), height:heightPercentageToDP('8%'), paddingLeft:widthPercentageToDP('5%'), paddingVertical:heightPercentageToDP('2.5%'), marginTop:heightPercentageToDP('2%')}}>
                <View style={{flexDirection:'column', width:widthPercentageToDP('25%')}}><AtiText style={th}>TIME</AtiText></View>
                <View style={{flexDirection:'column', width:widthPercentageToDP('25%')}}><AtiText style={th}>BILL NUMBER</AtiText></View>
                <View style={{flexDirection:'column', width:widthPercentageToDP('37%'),  justifyContent:'flex-end', alignItems:'flex-end', alignContent:"space-around"}}><AtiText style={th1}>TOTAL</AtiText></View>
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
                                   console.log(item.responseAsJson)
                                   var obj=JSON.parse(item.responseAsJson);
                                   var date=Date.parse(obj.timeStamp);

                                   var d=new Date(parseInt(obj.timeStamp)).getDate()
                               //   console.log("D:"+date);
                                  var c=moment(parseInt(obj.timeStamp)).format();
                                  var z=(obj.timeStamp).replace(/-/g,"");
                                 var y=z.split(' ');
                                 var a=y[1].split(':');
                                  console.log("c"+a[0]);
                                   return (
                                        <AtiListItem style={{backgroundColor:bg, marginLeft:widthPercentageToDP('1.2%'), paddingLeft:widthPercentageToDP('1.2%')}}>
                                                

                                            <View style={{ flexDirection: 'row' , width:widthPercentageToDP('100%'), paddingHorizontal:widthPercentageToDP('1%')}}>
                                                <View style={{ flexDirection:'column', width:widthPercentageToDP('25%')}} >
                                        <AtiText  style={content}>  {a[0]}:{a[1]}</AtiText>
                                                </View>
                                                <View style={{flexDirection:'column',  width:widthPercentageToDP('27%'), alignItems:'center'}}>
                                        <AtiText style={content}> {obj.billNumber}</AtiText>
                                                </View>
                                                <View style={{flexDirection:'column',  width:widthPercentageToDP('35%'), alignItems:'flex-end'}}>
                                                    <AtiText style={content1}>Rp {obj.amount}</AtiText>
                                                </View>
                                                <View style={{flexDirection:'column',  width:widthPercentageToDP('5%'), alignItems:'flex-end', alignSelf:'flex-end'}}>
                                                <AtiText><Icon name='chevron-right'/></AtiText>
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
 
export default History;


  const content = {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000", 
    alignSelf:'flex-start'
  };
  const content1 = {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "right",
    alignSelf:'right',
    color: "#000000", 
    alignSelf:'flex-end'
  };
  const th = {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    alignSelf:'flex-start'

  };
  const th1 = {
    fontFamily: "AvenirNextLTPro",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    alignSelf:'flex-end'

  };