import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../../common/components/popup/store/popup-action';
import { withWebConsole } from 'ati-web-console-connector';
import navigate from '../../common/navigation/action'
import { View, ScrollView } from 'react-native';
import Body from './Body';
import FooterNavigation from '../../common/components/navigation/footer-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

class HomeScreen extends Component {

  navi = (e) => {
    this.props.navigate(e);
  }
  render() {
    return (
      <View style={{ height: hp('100%') }}>
        <ScrollView >
          <Body />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => ({ ...state });
const mapActionToProps = () => ({
  navigate,
  ...action,
});

export default connect(mapStateToProps, mapActionToProps())(withWebConsole(HomeScreen));