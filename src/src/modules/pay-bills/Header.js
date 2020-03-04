import React, { Component } from 'react';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import navigate from './../../common/navigation/action';
import * as action from './../../common/components/popup/store/popup-action';
import { AtiText, AtiButton, AtiIcon } from 'ati-ui-elements';
import {
    StyleSheet,
    TouchableOpacity,
    Image,
    View
} from 'react-native';
import history from './../../../assets/img/icon/History.png';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import paybillsAction from './store/paybills-action';
class HeaderNavigation extends Component {
    constructor(props){
        super(props);
        this.state={
            active:'#f0f0f0',
            flag:true
        }

    }

    navi = (e) => {
        this.props.navigate(e);
     }

    render() {
        return (
            <View style={styles.container}>
               
               <TouchableOpacity onPress={this.navi.bind(this,'PayBill')} style={{marginTop:heightPercentageToDP('2.5%'),marginLeft:widthPercentageToDP('4.25%')}}>
                <AtiIcon name="arrow-back" style={{
                            fontSize:23,
                            color: 'black',
                        }} type='MaterialIcons' color="#000000" />
                </TouchableOpacity>
                <AtiText style={{marginTop:heightPercentageToDP('2.5%'),marginLeft:widthPercentageToDP('27.2%')}}>{this.props.headerName}</AtiText>
                <TouchableOpacity onPress={this.navi.bind(this,this.props.headerLink)} style={{marginTop:heightPercentageToDP('2.5%'),marginLeft:widthPercentageToDP('24.5%')}}>
                <Image source={history} style={{height:heightPercentageToDP('3%'),width:widthPercentageToDP("6%")}}/>
                </TouchableOpacity>
            </View>
    
        );
    }
}

const styles = StyleSheet.create({
    container:{ 
        flexDirection: 'row',
        backgroundColor:'#ffffff',
        height:heightPercentageToDP('9%')
    },
    logoHead: {
        marginLeft: '12.7%',
        letterSpacing: 0.13,
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'AvenirNextLTPro',

    },
    head: {
        
        marginBottom:'3%',
        letterSpacing: 0,
        color: '#000000',
        fontSize: 18,
        fontFamily: 'AvenirNextLTPro-Bold',
    },
    logo: {
        marginLeft: '14%',
        marginTop:'5.3%',
        width: '25%',
        height: '40%'
    },
    

});

const mapStateToProps = (state) => {
    const { paybills } = state;
    return {
      ...paybills,
    };
  };
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...paybillsAction
    // ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(HeaderNavigation));