import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Layout, List, Row } from 'antd';
import { AtiButton } from 'ati-react-web';
import { DEFAULT_LOCALE } from '../../../common/utils/languageprovider/constants';
import LayoutSider from './sider';
import LayoutContent from './content';
import LayoutHeader from './header';
import './layout.css';
import LanguageProvider from '../../../common/utils/languageprovider/index';
import ContactUsDrawer from '../../../common/general-component/drawer/component/drawer';
import ContactList from './contact-list-component';
import SosmedList from './sosmed-list-component';
import CONSTANTS from './../../utils/Constants';

export default class AtiLayout extends React.Component {
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

    checkAuthenticate = () => {
        this.props.cookies.get(CONSTANTS.COOKIE_TOKEN_KEY);
    }

    render() {
        const { contactUs, socialMedia } = this.props;
        return (
            <React.Fragment>
                <LanguageProvider locale={this.state.locale}>
                    <Layout style={{ height: '100vh' }}>
                        <LayoutSider {...this.props} />
                        <Layout style={{ background: '#f4f5f8' }}>
                            <LayoutHeader {...this.props} />
                            <LayoutContent {...this.props} />
                            <ContactUsDrawer
                                placement="right"
                                visible={this.props.drawerVisible}
                                onClose={this.props.toogleDrawerCollapse}
                            >
                                <AtiButton
                                    events={{
                                        onClick: this.props.toogleDrawerCollapse,
                                    }}
                                    className="close-button"
                                    icon="close"
                                    shape="circle"
                                    size="large"
                                />
                                <h5 className="mb-20 mt-20 ml-2">Contact Us</h5>
                                <ContactList contactUs={contactUs} />
                                <SosmedList socialMedia={socialMedia} />
                            </ContactUsDrawer>
                        </Layout>
                    </Layout>
                </LanguageProvider>
            </React.Fragment>
        );
    }
}