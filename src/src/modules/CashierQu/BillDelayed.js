import React, { Component } from 'react';
import { Image, View, ScrollView } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { AtiText,AtiList, AtiListItem } from 'ati-ui-elements';
import Icon from 'react-native-vector-icons/Entypo'


class BillDelayed extends Component {
        constructor(props) {
            super(props);
            this.state = { 
   //       index:1,
               
             }
        }


   
   
    render() { 
        const data=[
            {
                Time: '18:29',
                Bill: '12A9122Q111',
                Total: '100,000',
            },
            {
                Time: '12:23',
                Bill: '12A912C1421',
                Total: '10,000',
            },  
            {
                Time: '10:56',
                Bill: '12A9122Q111',
                Total: '100,000',
            },
            ];
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
                                   
                                   
                                   return (
                                        <AtiListItem style={{backgroundColor:bg, marginLeft:widthPercentageToDP('1.2%'), paddingLeft:widthPercentageToDP('1.2%')}}>
                                                

                                            <View style={{ flexDirection: 'row' , width:widthPercentageToDP('100%'), paddingHorizontal:widthPercentageToDP('1%')}}>
                                                <View style={{ flexDirection:'column', width:widthPercentageToDP('25%')}} >
                                        <AtiText  style={content}> {item.Time}</AtiText>
                                                </View>
                                                <View style={{flexDirection:'column',  width:widthPercentageToDP('25%'), alignItems:'center'}}>
                                        <AtiText style={content}>{item.Bill}</AtiText>
                                                </View>
                                                <View style={{flexDirection:'column',  width:widthPercentageToDP('37%'), alignItems:'flex-end'}}>
                                                    <AtiText style={content1}>Rp {item.Total}</AtiText>
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
 
export default BillDelayed;


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
  
