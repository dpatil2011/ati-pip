import React, { Component } from 'react';
import { AtiSegment, AtiText, AtiTabs, AtiTab, AtiIcon } from 'ati-ui-elements';
import { View, TabHeading } from 'native-base';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import {Image, TouchableOpacity} from 'react-native'
import CashIn from './CashIn'
import CashOut from './CashOut'
import inmg from './../../../assets/img/icon/CashIn.png'
import outmg from './../../../assets/img/icon/CashOut.png'
import inmg1 from './../../../assets/img/icon/dCashIn.png'
import outmg1 from './../../../assets/img/icon/dCasOut.png'

class CashTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            margin:widthPercentageToDP('8%'),
            image1: inmg,
            image2: outmg,
            pg:0,
            color2:'#f0f0f0',
            color1:'#ffffff'
         }
    }
    page=(p)=>{
        if (p==0){
        this.setState({
            margin:widthPercentageToDP('8%'),
            color1:'#ffffff',
            color2:'#f0f0f0',
            image1:inmg,
            image2:outmg
        })}
       else{
            this.setState({
            margin:widthPercentageToDP('0%'),
            color2:'#ffffff',
            color1:'#f0f0f0',
            image1:inmg1,
            image2:outmg1
            })
    }}
    render() { 
        const margin = this.state.margin;
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

        <AtiTabs style={{justifyContent:'space-around'}} tabBarUnderlineStyle={{width:widthPercentageToDP('42%'),marginLeft:margin,marginRight:widthPercentageToDP('1.5%'),color:'white',backgroundColor:'white'}} onChangeTab={({i}) => this.page(i)} initialPage={0}>
        {/* <AtiTab heading="Cash In" tabStyle={{backgroundColor:'#a92930',borderColor: '#a92930'}}
        activeTabStyle={{backgroundColor:'#a92930',borderColor: '#a92930'}} textStyle={{color:'#f0f0f0'}} > */}

        <AtiTab heading={<TabHeading style={{backgroundColor:'#a92930',borderColor: '#a92930'}}>
                              <Image source={this.state.image1} style={{height:heightPercentageToDP('2.5%'),width:widthPercentageToDP("4%")}}/>
                              <AtiText style={{color:this.state.color1}} >Cash In</AtiText>
                             </TabHeading>}> 
                            <CashIn/>
                            </AtiTab>    
        <AtiTab heading={<TabHeading style={{backgroundColor:'#a92930',borderColor: '#a92930'}}>
                              <Image source={this.state.image2} style={{height:heightPercentageToDP('2.5%'),width:widthPercentageToDP("4%")}}/>
                              <AtiText style={{color:this.state.color2}} >Cash Out</AtiText>
                             </TabHeading>}> 
                            <CashOut/>
                            </AtiTab>  
</AtiTabs>
         );
    }
}
 
export default CashTransaction;