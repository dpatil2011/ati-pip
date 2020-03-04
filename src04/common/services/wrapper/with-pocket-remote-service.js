import React, { Component } from 'react';
import { CSRF_SERVICE_NAME } from './../../initOptions.properties';
import CONSTANTS from './../../utils/Constants';
import request from './../request';
import { PocketRemoteContext } from './../pocket-remote-service';

const withPocketRemoteService = WrapperComponent => class extends Component {
    state = {
        waitingForCsrf: false,
        error: null,
    };

    /*
    -- method invoke using SSO by mas pretet --*/
    invoke = (baseUrl, serviceName, params, method, header, cookies) => new Promise((resolve, reject) => {
        const interceptResolve = (response) => {
            // const tempToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VybmFtZTIwIiwiaXNzIjoib21uaS1jaGFubmVsIiwiZXhwIjoxNTUxMDk4MjYxMDAwLCJpYXQiOjE1NTEwOTY2MDEsImF1dGhvcml0aWVzIjpbIkFQUi1DIiwiQVBSLVIiLCJBUFItVSIsIkFQUi1EIiwiQVBSLUEiLCJEU0gtQyIsIkRTSC1SIiwiRFNILVUiLCJEU0gtRCIsIkRTSC1BIiwiQ1NVLUMiLCJDU1UtUiIsIkNTVS1VIiwiQ1NVLUQiLCJDU1UtQSIsIlVTTS1DIiwiQk9VLUMiLCJCT1UtUiIsIkJPVS1VIiwiQk9VLUQiLCJCT1UtQSIsIkFHTS1DIiwiQUdNLVIiLCJBR00tVSIsIkFHTS1EIiwiQUdNLUEiLCJBTUctQyIsIkFDTS1DIiwiQUNNLVIiLCJBQ00tVSIsIkFDTS1EIiwiQUNNLUEiLCJDTUctQyIsIkNNRy1SIiwiQ01HLVUiLCJDTUctRCIsIkNNRy1BIiwiTU1HLUMiLCJNTUctUiIsIk1NRy1VIiwiTU1HLUQiLCJNTUctQSIsIkNTTS1DIiwiQ1NNLVIiLCJDU00tVSIsIkNTTS1EIiwiQ1NNLUEiLCJFQ0MtQyIsIkVDQy1SIiwiRUNDLVUiLCJFQ0MtRCIsIkVDQy1BIiwiQlBNLUMiLCJFQ00tQyIsIkVDTS1SIiwiRUNNLVUiLCJFQ00tRCIsIkVDTS1BIiwiRUNULUMiLCJFQ1QtUiIsIkVDVC1VIiwiRUNULUQiLCJFQ1QtQSIsIkNPTS1DIiwiQ09NLVIiLCJDT00tVSIsIkNPTS1EIiwiQ09NLUEiLCJGRUMtQyIsIkZFQy1SIiwiRkVDLVUiLCJGRUMtRCIsIkZFQy1BIiwiTE1ULUMiLCJMTVQtUiIsIkxNVC1VIiwiTE1ULUQiLCJMTVQtQSIsIk5DUy1DIiwiTkNTLVIiLCJOQ1MtVSIsIk5DUy1EIiwiTkNTLUEiLCJNU1ItQyIsIk1TUi1SIiwiTVNSLVUiLCJNU1ItRCIsIk1TUi1BIiwiTUNTLUMiLCJNQ1MtUiIsIk1DUy1VIiwiTUNTLUQiLCJNQ1MtQSIsIkJPUi1DIiwiQk9SLVIiLCJCT1ItVSIsIkJPUi1EIiwiQk9SLUEiLCJEQ1AtQyIsIkRDUC1SIiwiRENQLVUiLCJEQ1AtRCIsIkRDUC1BIiwiQ1BULUMiLCJDUFQtUiIsIkNQVC1VIiwiQ1BULUQiLCJDUFQtQSIsIk9QRi1DIiwiSEtULUMiLCJIS1QtUiIsIkhLVC1VIiwiSEtULUQiLCJIS1QtQSIsIkRDVC1DIiwiRENULVIiLCJEQ1QtVSIsIkRDVC1EIiwiRENULUEiLCJBRFQtQyIsIkFEVC1SIiwiQURULVUiLCJBRFQtRCIsIkFEVC1BIiwiUlBULUMiLCJSUEwtQyIsIlJQTC1SIiwiUlBMLVUiLCJSUEwtRCIsIlJQTC1BIiwiU0VULUMiLCJTRVQtUiIsIlNFVC1VIiwiU0VULUQiLCJTRVQtQSIsIlNZUC1DIiwiU1lQLVIiLCJTWVAtVSIsIlNZUC1EIiwiU1lQLUEiLCJTWU0tQyIsIlNDTS1DIiwiU0NNLVIiLCJTQ00tVSIsIlNDTS1EIiwiU0NNLUEiLCJBUFYtQyIsIkFQVi1SIiwiQVBWLVUiLCJBUFYtRCIsIkFQVi1BIiwiUkxNLUMiLCJSTE0tUiIsIlJMTS1VIiwiUkxNLUQiLCJSTE0tQSIsIkNQVy1DIiwiQ1BXLVIiLCJDUFctVSIsIkNQVy1EIiwiQ1BXLUEiLCJTRlMtQyJdLCJ1c2VybmFtZSI6InVzZXJuYW1lMjAiLCJhcHBzIjpbeyJjbGllbnRJZCI6ImNhc2EiLCJjbGllbnROYW1lIjoiQ0FTQSIsImNsaWVudFR5cGUiOiJCQUNLRU5EIn1dfQ.SXcPQ5KdUsw-bytenpj8gmas3cFDhp7msJ8JcBmjxKI';
            // cookies.set(CONSTANTS.COOKIE_TOKEN_KEY, tempToken, { path: '/' });
            // cookies.set(CONSTANTS.COOKIE_TOKEN_KEY, tempToken, { path: '/' });ORIGINAL_TOKEN_KEY
            if (resolve) resolve(response);
        };
        request(this.appendUrl(baseUrl, serviceName), method, params, header, interceptResolve, reject);
    })

    /* -- method invoke by ryan -- */
    /* invoke = (baseUrl, serviceName, params, method, header, cookies) => {
        return new Promise((resolve,reject)=>{
             request(this.appendUrl(baseUrl,serviceName),method,params,header,resolve,reject);
        });
    } */

    appendUrl = (baseUrl, service) => `${baseUrl}/${service}`

    createAction = (context) => {
        /*
        -- method action invoke using SSO by mas pretet --*/
        const invoke = (serviceName, params, option, isUsingFakeServer = false) => {
            const { cookies } = context;
            const options = { method: 'POST', useCsrfToken: true, ...option };
            const { method, header, useCsrfToken } = options;
            const urlOrigin = isUsingFakeServer ? context.fakeUrl : context.baseUrl;
            const baseUrl = option && option.baseUrl ? option.baseUrl : urlOrigin;
            const headers = header || {};
            if (cookies) {
                const authenToken = cookies.get(CONSTANTS.COOKIE_TOKEN_KEY);
                const authorToken = cookies.get(CONSTANTS.ORIGINAL_TOKEN_KEY);
                if (authenToken) {
                    if (headers[CONSTANTS.COOKIE_TOKEN_KEY] === undefined) {
                        headers[CONSTANTS.COOKIE_TOKEN_KEY] = authenToken;
                    }
                }
                if (authorToken) {
                    if (headers[CONSTANTS.ORIGINAL_TOKEN_KEY] === undefined) {
                        headers[CONSTANTS.ORIGINAL_TOKEN_KEY] = authorToken;
                    }
                }
            }

            if (useCsrfToken) {
                headers['X-CSRF-TOKEN'] = context.csrfToken;
                return this.invoke(baseUrl, serviceName, params, method, headers, cookies);
            }

            return this.invoke(baseUrl, serviceName, params, method, headers, cookies);
        };

        /* -- method action invoke by ryan -- */
        /* const invoke = (serviceName,params,option, isUsingFakeServer = false)=>{
            const _option ={ method:"POST", useCsrfToken:true, ...option};
            const { method, header, useCsrfToken } = _option;
            const urlOrigin = isUsingFakeServer ? context.fakeUrl : context.baseUrl;
            const _header = header || {};

            if (useCsrfToken){
                _header['X-CSRF-TOKEN'] = context.csrfToken;
                return this.invoke(urlOrigin, serviceName, params, method, header);
            }

            return this.invoke(urlOrigin, serviceName, params, method, header);
        } */

        const refreshCsrfToken = () => {
            this.setState({ waitingForCsrf: true });
            invoke(CSRF_SERVICE_NAME, {}, { method: 'GET', useCsrfToken: false }).then((response) => {
                const { data } = response;
                context.action.setCsrfToken(data.token);
                this.setState({ waitingForCsrf: false });
            }, (errResponse) => {
                this.setState({ waitingForCsrf: false, error: errResponse });
            });
        };
        return { invoke, refreshCsrfToken };
    }

    render() {
        return (
            <PocketRemoteContext.Consumer>
                {(context) => {
                    const action = this.createAction(context);
                    const pocketRemoteService = action;
                    return (
                        <WrapperComponent
                            {...this.props}
                            pocketRemoteService={pocketRemoteService}
                        />);
                }}
            </PocketRemoteContext.Consumer>
        );
    }
};

export default withPocketRemoteService;