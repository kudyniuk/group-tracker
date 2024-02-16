import { NavigationContainer } from "@react-navigation/native"

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateGroupScreen, GroupScreen, HomeScreen } from "@own/screens";
import { RootStackParamList } from "./RouterTypes";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Router = () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <Stack.Screen name="CreateGroup" component={CreateGroupScreen} />
            <Stack.Screen name="Group" options={{ title: "Group Name" }} component={GroupScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}