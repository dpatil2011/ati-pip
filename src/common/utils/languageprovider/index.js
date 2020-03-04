import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';

import messagesId from '../../../common/translations/id.json';
import messagesEn from '../../../common/translations/en.json';

import locale_en from 'react-intl/locale-data/en';
import locale_id from 'react-intl/locale-data/id';

addLocaleData([...locale_en, ...locale_id]);

const messages = {
  en: messagesEn,
  id: messagesId,
};

class LanguageProvider extends React.PureComponent {
  render() {
    return (
      <IntlProvider
        locale={this.props.locale}
        key={this.props.locale}
        messages={messages[this.props.locale]}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

export default LanguageProvider;
