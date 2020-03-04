import React, { Component } from 'react';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import navigate from '../../navigation/action';
import * as action from '../popup/store/popup-action';
import { AtiText, AtiButton, AtiIcon } from 'ati-ui-elements';

import {
    widthPercentageToDP,
    heightPercentageToDP,
    listenOrientationChange ,
    removeOrientationListener
  } from 'react-native-responsive-screen';import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    StyleSheet,
    TouchableOpacity,
    Image,
    View
} from 'react-native';
import * as action1 from '../../../modules/home/store/HomeAction';
class CashTransactionHeader extends Component {
    constructor(props){
        super(props);
        this.state={
            active:'#f0f0f0',
            flag:true
        }

    }
  
    nav=()=>{
        this.props.navigate('HomeScreen')
    }

    render() {
        return (
            <View style={styles.container}>
               
            <TouchableOpacity style={{marginTop:heightPercentageToDP('2.15%'),marginLeft:widthPercentageToDP('2.85%')}} onPress={this.nav.bind()} >
             <AtiText style={styles.head}  > <Icon name="arrow-back" size={24} color="#000000" /></AtiText>
             </TouchableOpacity>
             <AtiText style={{marginTop:heightPercentageToDP('2.5%'),marginLeft:widthPercentageToDP('28%')}}>Cash Transaction</AtiText>
            
             <TouchableOpacity>
                <View style={{height:heightPercentageToDP('0.2%'),width:widthPercentageToDP('20%'), flexDirection:'row', marginLeft:widthPercentageToDP('23%')} }>
             <Image style={styles.stretch}
  source={require('./../../../../assets/img/icon/transfer.png')} />

             </View>
            
             </TouchableOpacity>
         </View>
    
        );
    }
}

const styles = StyleSheet.create({
    container:{ 
        flexDirection: 'row',
        backgroundColor:'#ffffff',
        width: '100%',
        height: '10%'
    },
    logoHead: {
        marginLeft: '12.7%',
        letterSpacing: 0.13,
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'AvenirNextLTPro',

    },
    stretch: {
        marginTop:heightPercentageToDP('2.5%'),
        marginRight:widthPercentageToDP('4%'),
        height:heightPercentageToDP('2.5%'),
        width:widthPercentageToDP('5%'),
        resizeMode: 'cover'
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


const mapStateToProps = state => ({ ...state });
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...action1
    // ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(CashTransactionHeader));