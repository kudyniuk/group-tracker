import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import { GroupsScreen } from './GroupsScreen';
import { MapScreen } from './MapScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Groups' />
        <BottomNavigationTab title='Map' />
    </BottomNavigation>
);

export const HomeScreen = () => {
    return <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
            <Navigator tabBar={props => <BottomTabBar {...props} />}>
                <Screen name='Groups' component={GroupsScreen} />
                <Screen name='Map' component={MapScreen} />
            </Navigator>
        </NavigationContainer>
    </SafeAreaView>
}









