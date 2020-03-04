import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { AtiText, AtiCardShowcase, AtiCard, AtiCardItem, AtiTextInput, AtiList, AtiListItem, Left, Right, AtiIcon, AtiSpinner } from 'ati-ui-elements';
import { View, TouchableOpacity, StyleSheet, Text, ImageBackground, Image, ScrollView } from 'react-native';

import bgSrc from './../../../assets/img/background/bg.png';
import up from './../../../assets/img/background/accountbg.png';
import float from './../../../assets/img/icon/float.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import axios from 'axios';
import { connect } from 'react-redux';
import navigate from './../../common/navigation/action';
import { withWebConsole } from 'ati-web-console-connector';
import Geocoder from 'react-native-geocoding';
import * as action from './../../common/components/popup/store/popup-action';
import * as act from'./store/agent-action';



class Agent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Agent: [],
    }
  }

  componentDidMount() {

    axios.get('https://prdc-support.anabatic.com:7443/fineract-provider/api/v1/externalusers/agentnew ', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Fineract-Platform-TenantId': 'default',
      },
      auth: {
        username: 'coin',
        password: 'coin',
      },
    }).then((response) => {

      console.log(JSON.stringify(response.data));
      //this.props.setAccountDetail(response.data.savingsAccounts[0]);
      this.setState({
        Agent: response.data,


      }).catch((error) => {

        console.log(error);
        alert(error)
      });

      console.log(this.state.product);
    });


  }


  render() {
    if (this.state.Agent == "") {
      return (
        <View>
          <AtiSpinner />
        </View>
      )
    }
    const navi = (e) => {
      this.props.setAgent(e)
      this.props.navigate('AgentDetail')
    }
    return (
      <ScrollView style={{ backgroundColor: '#f8f6f0', flex: 1 }}>
        <View style={{}}>
          <AtiText style={{ marginLeft: 18, fontSize: 16, fontWeight: 'bold', marginTop: 25, marginBottom: 20, forntFamily: 'AvenirNextLTPro-Bold' }}>Nearest Agent</AtiText>
          {
            this.state.Agent.map(function (x) {
              Geocoder.init("AIzaSyAUMCWqPGXvJBGdPuD9Erfjgl6UzqDo-NQ");

              var addressComponent;
              Geocoder.from(x.latitude, x.longitude)
                .then(json => {
                  addressComponent = json.results[0].address_components[0];
                  console.log(addressComponent.long_name);
                })
                .catch(error => console.warn(error));
              return (
                <TouchableOpacity onPress={navi.bind(this,x)}>
                  <AtiCard
                    style={{ marginLeft: 18, marginRight: 15, width: 380, borderRadius: 8, marginTop: 10 }}
                  >
                    <AtiCardItem bordered
                      style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, marginLeft: 0 }}
                    >
                      <Left >
                        <View style={{ flexDirection: 'row' }} >

                          <View style={{ flexDirection: 'column' }}>
                            <AtiText style={{ fontSize: 14, marginLeft: 0, fontWeight: 'bold', color: 'black', fontFamily: 'AvenirNextLTPro-Demi' }}>{x.username}{"\n"}
                              <AtiText style={{ fontSize: 14, marginLeft: 0, fontWeight: 'normal', color: '#333333', fontFamily: 'AvenirNextLTPro-Demi' }}>
                                {addressComponent}</AtiText>{"\n"}

                              <AtiIcon name="mail" style={{ fontSize: 14, color: '#333333', marginLeft: 0, }}></AtiIcon>&nbsp;&nbsp;
                                   <AtiText style={{ fontSize: 14, marginLeft: 0, color: '#333333', fontWeight: 'normal', fontFamily: 'AvenirNextLTPro-Demi' }}>
                                0.2 km</AtiText>

                            </AtiText>
                          </View>
                        </View>
                      </Left>
                      <Right >
                        <Image style={styles.logoDown} source={up} />

                      </Right>
                    </AtiCardItem>

                  </AtiCard>
                </TouchableOpacity>
              )
            })
          }


        </View>

        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 15,
            backgroundColor: '#a92930',
            marginLeft: wp('80%'),
            marginTop: hp('4%'),
            marginBottom: hp('6%')
          }}
        >
          {/* <Icon name="plus"  size={30} color="#01a699" /> */}
          <Image style={{ height: hp("3.3%"), width: wp("5.5%"), marginTop: hp('2%'), marginLeft: hp('2%') }} source={float} />
        </TouchableOpacity>
      </ScrollView>
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
    fontSize: 20,
    alignSelf: "center",
    marginTop: '20%',
    alignContent: "center"
  },
  logoDown: {
    height: 60,
    width: 80,
    borderRadius: 15  // marginBottom:30,
  },
});
const mapActionToProps = () => ({
  navigate,
  ...action,
  ...act,
  // ...authentication,
});

export default connect(null, mapActionToProps())(withWebConsole(Agent));
// export default Agent;