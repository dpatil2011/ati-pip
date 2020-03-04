import React, { Component } from 'react';
import { AtiFooterNavigation } from 'ati-navigation';
import { withWebConsole } from 'ati-web-console-connector';
import { connect } from 'react-redux';
import navigate from './../../navigation/action';
import * as action from '../popup/store/popup-action';
import { AtiNavigationAction } from 'ati-navigation';





class FooterNavigation extends Component{
     mapperMenu=[
        {
            screen:'home',
            iconName:'home',
            image:{uri:'../../../assets/img/icon/agenticon.png'},
            visible:true
        },
        {
            screen:'agent',
            iconName:'Agent',
            image:{uri:'../../../assets/img/icon/agenticon.png'},
            visible:true
        },
        {
            screen:'submission',
            iconName:'Submission',
            image:{uri:'../../../assets/img/icon/agenticon.png'},
            visible:true
        },
        {
            screen:'history',
            iconName:'history',
            image:{uri:'../../../assets/img/icon/agenticon.png'},
            visible:true
        },
        {
            screen:'user',
            iconName:this.props.userData.username,
            image:{uri:'../../../assets/img/icon/agenticon.png'},
            visible:true
        }
        
    ]
    render(){
            return(
                <AtiFooterNavigation
                containerStyle={{
                    backgroundColor: '#ffffff',
                    height:200,
                    
                }}
                textStyle={{
                    color: 'yellow',
                }}
                buttonStyle={{
                    height: 100,
                    backgroundColor: 'green',
                }}
                badgeStyle={{
                    backgroundColor: 'black',
                }}
                mapperMenu={this.mapperMenu}
                
                />
            )
    }
}
const mapStateToProps = (state) => {
    const { login } = state;
    return {
      ...login,
    };
  };

export default connect(mapStateToProps,null)(FooterNavigation);