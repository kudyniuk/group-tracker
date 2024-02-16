import React from 'react';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { GroupsScreen } from './GroupsScreen';
import { MapScreen } from './MapScreen';
import { HomeStackParamList, RootScreen } from '@own/routing';

const { Navigator, Screen } = createBottomTabNavigator<HomeStackParamList>();

const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Groups' />
        <BottomNavigationTab title='Map' />
    </BottomNavigation>
);

export const HomeScreen: RootScreen.Home = () => {
    return <Navigator initialRouteName='Groups' tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Groups' component={GroupsScreen} />
        <Screen name='Map' component={MapScreen} />
    </Navigator>
}










