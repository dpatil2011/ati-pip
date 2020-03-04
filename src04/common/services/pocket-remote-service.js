import React, { Component } from 'react';

export const PocketRemoteContext =
    React.createContext({ baseUrl: null, csrfToken: null, cookies: null });

class PocketRemoteServiceProvider extends Component {
    state = {
        baseUrl: null,
        fakeUrl: null,
        csrfToken: null,

    }

    componentWillMount() {
        this.setBaseUrl(this.props.baseUrl);
        this.setFakeUrl(this.props.fakeUrl);
    }

    setBaseUrl = (url) => {
        this.setState({ baseUrl: url });
    }

    setFakeUrl = (url) => {
        this.setState({ fakeUrl: url });
    }

    setCsrfToken = (csrfToken) => {
        this.setState({ csrfToken });
    }

    render() {
        const { csrfToken } = this.state;
        const { baseUrl, fakeUrl, cookies } = this.props;
        const action = { setBaseUrl: this.setBaseUrl, setCsrfToken: this.setCsrfToken };
        return (
            <PocketRemoteContext.Provider value={{ baseUrl, fakeUrl, csrfToken, action, cookies }}>
                {this.props.children}
            </PocketRemoteContext.Provider>
        );
    }
}

export default PocketRemoteServiceProvider;