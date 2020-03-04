import React, { Component, BrowserRouter } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import Cookies from 'universal-cookie';
import 'antd/dist/antd.css';
import 'ati-react-web/dist/index.css';
import { PersistGate } from 'redux-persist/integration/react';
import PocketRemoteServiceProvider from './../common/services/pocket-remote-service';
import { BASE_URL, FAKE_URL } from './../common/initOptions.properties';
import { store, persistor, browserHistory } from './../common/store';
import Router from './../common/route/router';
import './../assets/css/App.css';
import CONSTANTS from './../common/utils/Constants';
import LanguageProvider from './../common/utils/languageprovider/index';
import { DEFAULT_LOCALE } from './../common/utils/languageprovider/constants';

const cookies = new Cookies();
class App extends Component {
  state = {
    locale: DEFAULT_LOCALE,
  }

  componentWillMount() {
    if (JSON.parse(localStorage.getItem('persist:atic-react-pocketbank')) !== null) {
      const languages = JSON.parse(localStorage.getItem('persist:atic-react-pocketbank')).locale;
      this.setState({
        locale: JSON.parse(languages).language,
      });
    }
  }

  componentWillReceiveProps(props) {
    if (props.checked_indonesian) {
      this.setState({ locale: 'id' });
    }

    if (props.checked_english) {
      this.setState({ locale: 'en' });
    }
  }

  render() {
    return (
      <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PocketRemoteServiceProvider
          baseUrl={BASE_URL}
          fakeUrl={FAKE_URL}
          cookies={cookies}
        >
          <LanguageProvider locale={this.state.locale}>
              <Router history={browserHistory} cookies={cookies} />
          </LanguageProvider>
        </PocketRemoteServiceProvider>
      </PersistGate>
      </ReduxProvider>
    );
  }
}

export default App;