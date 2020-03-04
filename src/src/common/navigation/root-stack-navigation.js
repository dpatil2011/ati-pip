import { createStackNavigator } from 'react-navigation';
import React from 'react';
import rootNavigationConfig from './root-navigation-stack-config';
import HeaderNavigation from '../components/navigation/header-navigation';
import FooterNavigation from '../components/navigation/footer-navigation';
import headerNavigation from '../components/navigation/header-navigation';

const RootStackNavigation = createStackNavigator(
    { ...rootNavigationConfig },
    {
        navigationOptions:{
            header: () => false}
        }
    

);

export default RootStackNavigation;