import React from 'react';
import PropTypes from 'prop-types'
import { Layout, Breadcrumb } from 'antd';
import './layout.css';

const { Content } = Layout;

export class layoutContent extends React.Component {
    static propTypes = {
        childComponent:PropTypes.any.isRequired
    }
     
    render() {
        return (
            <React.Fragment>
                <Content style={{ margin: '0 1%', marginTop: '-1.5%', padding: '0px 24px', background: '#f4f5f8' }}>
                    {this.props.childComponent}
                </Content>
            </React.Fragment>
        )
    }
  }
  
  export default layoutContent