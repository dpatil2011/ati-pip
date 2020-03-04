import React, { Component } from 'react';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import navigate from './../../navigation/action';
import * as action from '../popup/store/popup-action';
import { AtiText, AtiButton, AtiIcon } from 'ati-ui-elements';
import logoSrc from './../../../../assets/img/logo/headerlogo.png';
import Icon from 'react-native-vector-icons/Feather';
import {
    StyleSheet,
    TouchableOpacity,
    Image,
    View
} from 'react-native';
import * as action1 from '../../../modules/home/store/HomeAction';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
class ReceiptNavigation extends Component {
    constructor(props){
        super(props);
        this.state={
            active:'#f0f0f0',
            flag:true
        }

    }
  
    agent = () => {
        if(this.state.flag){
        this.props.setAgent("1");
        this.setState({
            active:"#10ff00"
        })
       }else{
        this.props.setAgent("0");
        this.setState({
            active:"#f0f0f0"
        })
       }
       this.setState({
           flag:!this.state.flag
       })
       
    }

    nav = () => {
        this.props.navigate('Pin');
     }

    render() {
        return (
            <View style={styles.container}>
               
                <AtiText style={styles.head}  > </AtiText>
                <AtiText style={{marginTop:heightPercentageToDP('2.5%'),marginLeft:widthPercentageToDP('38%')}}>Receipt</AtiText>
                <TouchableOpacity style={{marginTop:heightPercentageToDP('2.5%'),marginLeft:widthPercentageToDP('32%')}}>
                <Icon name="share-2" size={24} color="#000000" />
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

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(ReceiptNavigation));