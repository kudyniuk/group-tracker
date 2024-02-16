import { SafeAreaView, StyleSheet } from "react-native"
import { AuthGuard } from "./auth"
import { LoginScreen, HomeScreen } from "./screens"
import { Router } from "./screens/Router"

export const Main = () => {
    return <SafeAreaView style={{ ...StyleSheet.absoluteFillObject }}>
        <AuthGuard authorizedScreen={<Router />} loginScreen={<LoginScreen />} />
    </SafeAreaView>
}