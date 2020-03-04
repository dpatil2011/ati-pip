import React, { Component } from 'react';
import { AtiText, AtiCarousel } from 'ati-ui-elements';
import URL from './../../../common/urls/URLS';
import {
    ImageBackground,
    Image,
    StyleSheet,
    View,
} from 'react-native';
import axios from 'axios';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import PayBillImg from '../../../../assets/img/icon/PayBill.png';


class HomeScreen extends Component {
    state = {
        name: '',
        data: [],
        fileName: '',

        type: '',
        description: '',

        location: '',
    }
    componentDidMount() {
        //  const URL = 'https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/clients/template/mobile';
        axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/promotions/mobile', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Fineract-Platform-TenantId': '000000',
            },
            auth: {
                username: 'mobileUser',
                password: 'mvcapntlgjzpa',
            },
        }).then((response) => {
            console.log(response);
            this.setState({
                data: response.data,
            });
            // console.log(this.state.religionOption);
        });
    }

    renderItem({ item, index }) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                <Image source={require('../../../../assets/img/icon/PayBill.png')} />
                <Text>{item.name}</Text>

            </View>
        );
    }
    render() {
        const dataList1 = {
            data: [
                {
                    // ...this.state.data.map(x => ({
                    // key: x.imageId,
                    // value: x.location,
                    name: 'navya',
                },
            ],
        };


        return (
            <View>
                <View style={{
                    borderColor: '#ffffff', marginTop: hp('60%'), marginBottom: hp('30%'), backgroundColor: '#ffffff', height: hp('31.5%'), width: wp('100%'),
                }}
                >
                    <AtiText>Hiii</AtiText>

                    <AtiCarousel
                        ref={ref => this.carousel = ref}
                        // data={
                        //     this.state.data.map(x => ({
                        //         key: x.fileName,
                        //         value: x.location,
                        //     }))
                        // }
                        data={dataList1}
                        renderItem={this.renderContent}
                        sliderWidth={200}
                        itemWidth={200}
                        events={{
                            onSnapToItem: (index) => {
                                console.log(index);
                            }
                        }
                        }



                    />

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    picture: {
        flex: 1,

        width: null,
        height: null,
        resizeMode: 'cover',
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginLeft: '25%',
        marginTop: '80%',
    },
});
export default HomeScreen;