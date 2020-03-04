import React, { Component } from 'react';
import { connect } from 'react-redux';
import withPocketRemoteService from '../../common/services/wrapper/with-pocket-remote-service';
import { navigate } from './../../common/store/action/general-action';
import * as dashboardAction from '../../modules/dashboard/store/dashboard-action';
import DashboardComponent from './../../modules/dashboard/component/dashboard-component';

class DashboardPage extends Component {
    layouts = () => (
        {
            lg: [
                {
                    i: '1', x: 0, y: 0, w: 8.5, h: 5, static: true,
                },
                {
                    i: '2', x: 8.9, y: 0, w: 16.9, h: 3.5, static: true,
                },
                {
                    i: '3', x: 33, y: 0, w: 16.9, h: 3.5, static: true,
                },
                {
                    i: '4', x: 8.9, y: 3.7, w: 8.2, h: 3.1, static: true,
                },
                {
                    i: '5', x: 17.6, y: 3.7, w: 8.2, h: 3.1, static: true,
                },
                {
                    i: '6', x: 26.2, y: 3.7, w: 8.2, h: 3.1, static: true,
                },
                {
                    i: '7', x: 40, y: 3.7, w: 8.2, h: 3.1, static: true,
                },
                {
                    i: '8', x: 0, y: 7.2, w: 26, h: 5, static: true,
                },
                {
                    i: '9', x: 28, y: 7.2, w: 16.8, h: 2, static: true,
                },
            ],
            md: [
                {
                    i: '1', x: 0, y: 0, w: 8.5, h: 7.1, static: true,
                },
                {
                    i: '2', x: 8.9, y: 0, w: 13.4, h: 3.5, static: true,
                },
                {
                    i: '3', x: 33, y: 0, w: 13.4, h: 3.5, static: true,
                },
                {
                    i: '4', x: 8.9, y: 3.7, w: 6.5, h: 3.1, static: true,
                },
                {
                    i: '5', x: 15.8, y: 3.7, w: 6.5, h: 3.1, static: true,
                },
                {
                    i: '6', x: 22.7, y: 3.7, w: 6.5, h: 3.1, static: true,
                },
                {
                    i: '7', x: 33, y: 3.7, w: 6.5, h: 3.1, static: true,
                },
                {
                    i: '8', x: 0, y: 7.2, w: 22.4, h: 5, static: true,
                },
                {
                    i: '9', x: 28, y: 7.2, w: 13.3, h: 2, static: true,
                },
            ],
            sm: [
                {
                    i: '1', x: 0, y: 0, w: 6.5, h: 7.1, static: true,
                },
                {
                    i: '2', x: 6.8, y: 0, w: 10.5, h: 2.5, static: true,
                },
                {
                    i: '3', x: 32, y: 0, w: 10.5, h: 2.5, static: true,
                },
                {
                    i: '4', x: 6.8, y: 3.7, w: 5.1, h: 2.1, static: true,
                },
                {
                    i: '5', x: 12.2, y: 3.7, w: 5.1, h: 2.1, static: true,
                },
                {
                    i: '6', x: 17.5, y: 3.7, w: 5.1, h: 2.1, static: true,
                },
                {
                    i: '7', x: 32, y: 3.7, w: 5.1, h: 2.1, static: true,
                },
                {
                    i: '8', x: 0, y: 7.2, w: 17.2, h: 4, static: true,
                },
                {
                    i: '9', x: 27, y: 7.2, w: 10.5, h: 1, static: true,
                },
            ],
        });

    render() {
        return (
            <DashboardComponent
                layouts={this.layouts()}
            />
        );
    }
}

const mapStateToProps = state => ({
    ...state.dashboard,
    ...state.layout,
    ...state.history,
});

const mapActionToProps = () => ({
    navigate,
    ...dashboardAction,
});

const page = connect(mapStateToProps, mapActionToProps())(DashboardPage);
export default withPocketRemoteService(page);