/**
 * Sample Anabatic Mobile Framework
 */

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { AtiWebConsoleProvider } from 'ati-web-console-connector';
import storeCreator from './../common/store';
import navigatorCreator from './../common/navigation';
import appReducers from './../common/store/reducer';
import CentralizedPopup from './../common/components/popup/container/centralized-popup';
import colors from './../../assets/styles/colors';
import { BASE_URL, DEFAULT_METADATA, WEBCONSOLE_SERVICES } from './../common/init-options-properties';
import I18n from './../common/i18n';

const navigator = navigatorCreator();
const store = storeCreator(appReducers, navigator.middleware);

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    StatusBar.setBackgroundColor(colors.ACCENT, true);
    return (
      <AtiWebConsoleProvider
        services={WEBCONSOLE_SERVICES}
        baseUri={BASE_URL}
        tokenKey="x-auth-token"
        metadata={DEFAULT_METADATA}
        defaultProtocol="https"
      >
        <Provider store={store.store}>
          <PersistGate loading={null} persistor={store.persistor}>
            <navigator.AppWithNavigationState />
            <CentralizedPopup />
          </PersistGate>
        </Provider>
      </AtiWebConsoleProvider>
    );
  }
}
