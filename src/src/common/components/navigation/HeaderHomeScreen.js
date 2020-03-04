import React, { Component } from 'react';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import navigate from './../../navigation/action';
import * as action from '../popup/store/popup-action';
import { AtiText, AtiButton, AtiIcon, AtiSwitchToggle } from 'ati-ui-elements';
import logoSrc from './../../../../assets/img/logo/headerlogo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import Dialog, { DialogContent, SlideAnimation, DialogTitle, DialogFooter, DialogButton, FadeAnimation, ScaleAnimation } from 'react-native-popup-dialog';
import Dash from 'react-native-dash';

import profilepic from '../../../../assets/img/icon/default-profile.png';

import {
    StyleSheet,
    TouchableOpacity,
    Image,
    View,
    Button,
} from 'react-native';
import * as action1 from '../../../modules/home/store/HomeAction';

class HeaderNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: '#f0f0f0',
            flag: true,
            View: true,
            isModalVisible: false,
            switchToggleValue: false,
            thumbTintColor: '#474747',
            AgentOn: 'Agent Status Information',
            AgentOn1: 'When an Agent is activated or opened, so all transactions that you create will be recorded as an Agent. You can make a personal transaction again by closing the Agent status.',
        };
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    agent = () => {
        if (this.state.flag) {
            // this.props.setAgent("1");
            this.setState({
                // active: "#10ff00",
                isModalVisible: true,

            });
        } else {
            //  this.props.setAgent("0");
            this.setState({
                //  active: "#f0f0f0",
                isModalVisible: false,
            });
        }

        this.setState({
            flag: !this.state.flag,
        });
    }

    qrcode = () => {
        this.props.navigate('QrCode');
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ marginTop: '5.3%', marginLeft: '5.1%' }} onPress={this.agent.bind()} >
                    <AtiText style={styles.head} ><Icon name="circle" size={20} color={this.state.active} /> Agent{this.props.agent} </AtiText>
                </TouchableOpacity>

                <Dialog
                    visible={this.state.isModalVisible}
                    dialogAnimation={new SlideAnimation({
                        slideFrom: 'top',
                    })}
                    transparent={false}
                    dialogStyle={{
                        borderRadius: 0,
                        backgroundColor: '#ffffff',
                        //  height: hp('30%'),
                        // width: 0.5,
                        // height: hp('33.9%'),
                        width: wp('100%'),
                        // alignSelf: 'flex-start',
                        flex: 1,
                        marginBottom: hp('42%'),
                        //  marginTop: hp('9%'),
                        alignItems: 'flex-start',
                    }}
                >

                    <DialogContent
                        style={{
                            backgroundColor: '#ffffff',
                            width: wp('100%'),
                            // marginBottom: hp('40%'),
                            //   borderRadius: 15,
                            flex: 1,
                        }}
                    >
                        <View style={styles.container1}>
                            <TouchableOpacity style={{ marginTop: '5.3%' }} onPress={this.agent.bind()} >
                                <AtiText style={styles.head} ><Icon name="circle" size={18} color={this.state.active} /> Agent{this.props.agent} </AtiText>
                            </TouchableOpacity>
                            <AtiText style={{ marginTop: '5.3%' }}> <Icon name="sort-desc" size={18} color="#000000" /></AtiText>
                            <Image
style={{
                                width: wp('26%'),
                                height: hp('4%'),

                                marginLeft: wp('14%'),
                                marginTop: hp('3%')
                            }}
source={logoSrc}
                            />
                            <TouchableOpacity style={{ marginTop: '5.8%', marginLeft: wp('20%') }} onPress={this.qrcode.bind()} >
                                <AtiText > <Icon name="qrcode" size={24} color="#000000" /></AtiText>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <AtiText style={{
                                    fontFamily: 'AvenirNextLTPro',
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    fontStyle: 'normal',
                                    lineHeight: 20,
                                    letterSpacing: 0,
                                    textAlign: 'left',
                                    color: '#000000',
                                }}
                                >Austine Lione
                                </AtiText>
                                <AtiText style={{
                                    fontFamily: 'AvenirNextLTPro-Demi',
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    fontStyle: 'normal',
                                    lineHeight: 22,
                                    letterSpacing: 0,
                                    textAlign: 'left',
                                    color: '#000000',
                                }}
                                >0011 1022 900
                                </AtiText>
                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <Image
style={{
                                    width: wp('10%'),
                                    height: hp('6%'),

                                    marginLeft: wp('53%'),
                                     marginTop: hp('2%')
                                }}
source={profilepic}
                                />
                            </View>

                        </View>
                        <Dash
dashColor="#cbcbcb"
                            // dashLength={6}
                            dashGap={0}
                            style={styles.dash}
                        />
                        <View style={{
                            flexDirection: 'row',
                            marginTop: hp('4%'),
                        }}
                        >
                            <Icon name="home" size={24} color="#000000" />
                            <AtiText style={{
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 14,
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                lineHeight: 20,
                                letterSpacing: 0,
                                textAlign: 'center',
                                color: '#000000',
                                marginLeft: wp('2.8%'),
                            }}
                            >Open an agent?
                            </AtiText>
                            <AtiSwitchToggle
                                events={
                                    {
                                        onValueChange: (e) => {
                                            this.setState({ switchToggleValue: e });
                                            if (e) {
                                                this.props.setAgent('1');
                                                this.setState({
                                                    thumbTintColor: '#ffff',
                                                    active: '#10ff00',
                                                    AgentOn: 'Informasi Status Agen',
                                                    AgentOn1: 'When an Agent is activated or opened, so all transactions that you create will be recorded as an Agent. You can make a personal transaction again by closing the Agent status.',

                                                });
                                            } else {
                                                this.props.setAgent('0');
                                                this.setState({
                                                    thumbTintColor: '#474747',
                                                    active: '#f0f0f0',
                                                    AgentOn: 'Agent Status Information',
                                                    AgentOn1: 'When an Agent is activated or opened, so all transactions that you create will be recorded as an Agent. You can make a personal transaction again by closing the Agent status.',
                                                });
                                            }
                                        },
                                    }
                                }
                                value={this.state.switchToggleValue}
                                onTintColor="#10ff00"
                                thumbTintColor={this.state.thumbTintColor}
                                tintColor="grey"
                                style={{
                                    marginLeft: wp('48%'),
                                    // height: hp('8%'),
                                    // width: wp('15%')
                                }}
                                labelStyle={{
                                    width: wp('20%'),
                                    height: hp('20%'),
                                    //   backgroundColor: "#cbcbcb",
                                    backgroundColor: '#474747',

                                }}
                                viewStyle={{
                                    // marginRight: 20,

                                    width: wp('10%'),
                                    height: hp('19.5%'),
                                    borderRadius: 15,
                                    backgroundColor: '#cbcbcb',

                                }}
                                label="English"
                             />
                        </View>

                        <View>
                            <Dash
dashColor="#cbcbcb"
                                // dashLength={6}
                                dashGap={0}
                                style={styles.dash}
                            />
                            <View style={{
                                flexDirection: 'row',
                                marginTop: hp('3%'),
                            }}
                            >
                            <View style={{
                                borderRadius: 50, borderWidth: 2, borderColor: '#000', width: 23, height: 23, marginRight: wp('2%'),
                            }}
                            >
                            <AtiText style={{
                               alignSelf: 'center',
                               marginBottom: hp('10%'),
                               fontWeight: 'bold',
                               height: hp('2.3%'),
                               width: wp('2%'),
                               marginLeft: wp('1%'),
                            }}
                            >|
                            </AtiText>
                                {/* <Icon
                                name="exclamation"
                                size={16}
                                color="#000"
                                    style={{
                                        marginLeft: wp('1.2%'),
                                        marginTop: hp('0.5%'),
                                    }}
                                /> */}
                            </View>
                                <AtiText style={{
                                    fontFamily: 'AvenirNextLTPro-Demi',
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    fontStyle: 'normal',
                                    lineHeight: 16,
                                    letterSpacing: 0,
                                    textAlign: 'left',
                                    color: '#000000',

                                }}
                                > {this.state.AgentOn} 
                                </AtiText>
                            </View>
                            <AtiText style={{
                                fontFamily: 'AvenirNextLTPro',
                                fontSize: 12,
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                lineHeight: 18,
                                letterSpacing: 0,
                                textAlign: 'left',
                                color: '#000000',
                                marginTop: hp('3%'),
                            }}
                            > {this.state.AgentOn1} 
                            </AtiText>
                        </View>
                    </DialogContent>
                </Dialog>
                <AtiText style={{ marginTop: '5.3%' }}> <Icon name="sort-desc" size={18} color="#000000" /></AtiText>
                <Image style={styles.logo} source={logoSrc} />
                <TouchableOpacity style={{ marginTop: '5.8%', marginLeft: '20%' }} onPress={this.qrcode.bind()} >
                    <AtiText > <Icon name="qrcode" size={24} color="#000000" /></AtiText>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: '100%',
        height: '10%',
    },
    container1: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: '100%',
        height: hp('10%'),

        // height: '10%'
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

        marginBottom: '3%',
        letterSpacing: 0,
        color: '#000000',
        fontSize: 18,
        fontFamily: 'AvenirNextLTPro-Bold',
    },
    logo: {
        marginLeft: '14%',
        marginTop: '5.3%',
        width: '24%',
        height: '40%',
    },
    dash: {
        height: 1,
        marginTop: hp('4%'),
        //  marginLeft: wp('4.9%'),
        //  marginRight: wp('7.8%'),
        opacity: 90,
    },

});

const mapStateToProps = state => ({ ...state });
const mapActionToProps = () => ({
    navigate,
    ...action,
    ...action1,
    // ...authentication,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(HeaderNavigation));