
/**
 * @author runy.novitasari
 * this component will be rendered to show popup message
 */
import { View, StatusBar } from 'react-native';
import { AtiAlert, AtiProgressModal, AtiCustomModal, AtiButton, AtiText } from 'ati-ui-elements';
import I18n, { Loc } from 'ati-react-native-redux-i18n';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './../../../../../assets/styles/default.style';
import * as action from './../store/popup-action';
import colors from './../../../../../assets/styles/colors';

class CentralizedPopup extends Component {
  componentWillMount() {
    this.changeStatusBarDark(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.changeStatusBarDark(nextProps);
    if (this.props.visibleProgress === true && nextProps.visibleProgress === false) {
      this.changeStatusBarDefaultColor();
    }
  }

  changeStatusBarDark = (props) => {
    if (props.visibleAlert || props.visibleConfirm || props.visibleProgress) {
      if (this.props.statusBarColor === colors.WHITE) {
        StatusBar.setBackgroundColor(colors.POPUP_DARK, true);
      } else {
        StatusBar.setBackgroundColor(colors.POPUP_DARK_TOSCA, true);
      }
    }
  }

  changeStatusBarDefaultColor = () => {
    this.props.changeStatusBarToDefault(this.props.statusBarColor, StatusBar);
  }

  render() {
    const visibleAlert = (this.props.visibleAlert != null ? this.props.visibleAlert : false);
    const buttonTextAlert = (this.props.buttonTextAlert != null && this.props.buttonTextAlert !== '' ? I18n.t(this.props.buttonTextAlert) : 'OK');
    const eventsAlert = {
      onPressButton: () => {
        this.props.eventsAlert();
        this.props.dismissAlert();
        this.changeStatusBarDefaultColor();
      },
    };

    const visibleConfirm = (this.props.visibleConfirm != null ? this.props.visibleConfirm : false);
    const buttonTextPositive = (this.props.buttonTextPositive != null && this.props.buttonTextPositive !== '' ? I18n.t(this.props.buttonTextPositive) : I18n.t('button.ok'));
    const buttonTextNegative = (this.props.buttonTextNegative != null && this.props.buttonTextNegative !== '' ? I18n.t(this.props.buttonTextNegative) : I18n.t('button.cancel'));
    const eventsConfirm = {
      onClickPositiveButton: () => {
        this.props.eventsConfirmPositive();
        this.props.dismissConfirmDialog();
        this.changeStatusBarDefaultColor();
      },
      onClickNegativeButton: () => {
        this.props.eventsConfirmNegative();
        this.props.dismissConfirmDialog();
        this.changeStatusBarDefaultColor();
      },
    };

    const visibleProgress = (this.props.visibleProgress != null ? this.props.visibleProgress : false);
    const visibleToast = (this.props.visibleToast != null ? this.props.visibleToast : false);
    const parameterMessage = (this.props.messageParam == null ? {} : this.props.messageParam);
    const title = (this.props.title != null && this.props.title !== '' ? I18n.t(this.props.title) : '');
    const message = (this.props.message != null && this.props.message !== '' ? I18n.t(this.props.message.trim(), parameterMessage) : '');

    return (
      <React.Fragment>
        <AtiAlert
          title={title}
          visible={visibleAlert}
          dialogStyle={styles.popupDialogStyle}
          titleStyle={styles.popupTitleStyle}
          contentStyle={styles.contentStyle}
          containerButtonStyle={{ marginBottom: 10 }}
          buttonStyle={[styles.popupButtonPositive, { alignSelf: 'center' }]}
          buttonText={buttonTextAlert}
          message={message}
          messageStyle={styles.popupMessageStyle}
          events={eventsAlert}
        />

        <AtiCustomModal
          visible={visibleConfirm}
          title={title}
          dialogStyle={styles.popupDialogStyle}
          titleStyle={styles.popupTitleStyle}
          contentStyle={{}}
          containerButtonStyle={{ justifyContent: 'center' }}
          buttonElements={
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <AtiButton
                accessibilityLabel="modal_negative_button"
                buttonStyle={styles.popupButtonNegative}
                events={{
                  onPress: () => {
                    eventsConfirm.onClickNegativeButton();
                  },
                }}
              >
                <AtiText style={[styles.popupButtonTextNegative, { marginRight: 7.5 }]} >
                  {buttonTextNegative}
                </AtiText>
              </AtiButton>
              <AtiButton
                accessibilityLabel="modal_positive_button"
                buttonStyle={[styles.popupButtonPositive, { marginLeft: 7.5 }]}
                events={{
                  onPress: () => {
                    eventsConfirm.onClickPositiveButton();
                  },
                }}
              >
                <AtiText style={styles.popupButtonTextPositive} >
                  {buttonTextPositive}
                </AtiText>
              </AtiButton>
            </View>
          }
        >
          <AtiText style={styles.popupMessageStyle}>
            {message}
          </AtiText>
        </AtiCustomModal>

        <AtiProgressModal
          dialogStyle={styles.popupProgressDialogStyle}
          visible={visibleProgress}
          activityIndicatorColor={colors.ACCENT}
        />

        {visibleToast &&
          <View
            style={styles.toastStyle}
          >
            <AtiText style={styles.toastMessageStyle}>
              {message}
            </AtiText>
          </View>}
      </React.Fragment>

    );
  }
}

const mapStateToProps = (state) => {
  const { popup } = state;
  return {
    ...popup,
  };
};

const mapActionToProp = () => ({
  ...action,
});

export default connect(mapStateToProps, mapActionToProp())(CentralizedPopup);