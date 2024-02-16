import { SafeAreaView, StyleSheet } from "react-native"

import { AuthGuard } from "./auth"
import { Router } from "./routing/Router"
import { LoginScreen } from "./screens"

export const Main = () => {
    return (
        <SafeAreaView style={{ ...StyleSheet.absoluteFillObject }}>
            <AuthGuard authorizedScreen={<Router />} loginScreen={<LoginScreen />} />
        </SafeAreaView>
    )
}
