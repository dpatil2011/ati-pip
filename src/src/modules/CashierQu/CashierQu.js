import React, { Component } from 'react';
import { AtiSegment, AtiText, AtiTabs, AtiTab } from 'ati-ui-elements';
import { View, TabHeading } from 'native-base';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import {Image, TouchableOpacity} from 'react-native'
import CreateBill from './CreateBill'
import BillDelayed from './BillDelayed'
import History from './History'
import CreateBill1 from './../../../assets/img/icon/CreateBill.png'
import dCreateBill from './../../../assets/img/icon/dCreateBill.png'
import Pending1 from './../../../assets/img/icon/Pending.png'
import dPending from './../../../assets/img/icon/dPending.png'
import History1 from './../../../assets/img/icon/History.png'
import dHistory from './../../../assets/img/icon/dHistory.png'

class CashierQu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pg:0,
            color1:'#ffffff',
            color2:'#f0f0f0',
            color3:'#f0f0f0',
            image1:CreateBill1,
            image2:Pending1,
            image3:History1
         }
    }
    page=(e)=>{
        if (e==0){
            this.setState({
                pg:0,
                color1:'#ffffff',
            color2:'#f0f0f0',
            color3:'#f0f0f0',
            image1:CreateBill1,
            image2:Pending1,
            image3:History1
            })}
        else if (e==1){
        this.setState({
            pg:1,
            color2:'#ffffff',
            color1:'#f0f0f0',
            color3:'#f0f0f0',
            image1:dCreateBill,
            image2:dPending,
            image3:History1
        })}
       else{
            this.setState({
                pg:2,
                color3:'#ffffff',
                color2:'#f0f0f0',
                color1:'#f0f0f0',
                image1:dCreateBill,
                image2:Pending1,
                image3:dHistory
            })
    }}
    render() { 
        return ( 
        //     <AtiSegment
        //     selectedIndex={1}
        //     segmentItems={[{title:'Create Bill',content:(<View><AtiText>Segment 1</AtiText></View>)},
        //                     {title:'title2', content:(<View><AtiText>Segment 2</AtiText></View>)},
        //                    // {title:text('title3','title3'),content:(<View><AtiText>Segment 3</AtiText></View>)}
        //                 ]}
        //     height = {30}
        //     borderRadius={5}
        //     backgroundColor='#a92930'
        //     >
        // </AtiSegment>

        <AtiTabs  tabBarUnderlineStyle={{width:widthPercentageToDP('25%'),marginLeft:widthPercentageToDP('5%'),marginRight:widthPercentageToDP('1.5%'),color:'white',backgroundColor:'white'}}  page={this.state.pg}>
        <AtiTab heading={<TabHeading style={{backgroundColor:'#a92930',borderColor: '#a92930'}}><TouchableOpacity style={{flexDirection:'row', width:'100%', justifyContent:'center'}} onPress={this.page.bind(this, 0)}>
                              <Image source={this.state.image1} style={{height:heightPercentageToDP('2.5%'),width:widthPercentageToDP("4%"),  marginTop:heightPercentageToDP('0.2%')}}/>
                              <AtiText style={{color:this.state.color1}} >Create Bill</AtiText>
                             </TouchableOpacity></TabHeading>}>
            <CreateBill/>
        </AtiTab>
        
        <AtiTab heading={<TabHeading style={{backgroundColor:'#a92930',borderColor: '#a92930'}}><TouchableOpacity style={{flexDirection:'row', width:'100%', justifyContent:'center'}} onPress={this.page.bind(this, 1)}>
                              <Image source={this.state.image2} style={{height:heightPercentageToDP('2.5%'),width:widthPercentageToDP("4%"), marginTop:heightPercentageToDP('0.5%')}}/>
                              <AtiText style={{color:this.state.color2}} >Pending</AtiText>
                             </TouchableOpacity></TabHeading>}>
            <BillDelayed/>
        </AtiTab>
        
        <AtiTab heading={<TabHeading style={{backgroundColor:'#a92930',borderColor: '#a92930'}}><TouchableOpacity style={{flexDirection:'row', width:'100%', justifyContent:'center'}} onPress={this.page.bind(this, 2)}>
                            <Image source={this.state.image3} style={{height:heightPercentageToDP('2.2%'),width:widthPercentageToDP("4.1%"), marginTop:heightPercentageToDP('0.5%')}}/>
                              <AtiText style={{color:this.state.color3}}> History</AtiText>
                             </TouchableOpacity></TabHeading>}>
           <History/>
        </AtiTab>
</AtiTabs>
         );
    }
}
 
export default CashierQu;