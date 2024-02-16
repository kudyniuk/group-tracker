import { NavigationContainer } from "@react-navigation/native"

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./HomeScreen";
import { CreateGroupScreen } from "./CreateGroupScreen";
import { SafeAreaView } from "react-native";

const Stack = createNativeStackNavigator();

export const Router = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <Stack.Screen name="Create" component={CreateGroupScreen} />
        </Stack.Navigator>
    </NavigationContainer>

}