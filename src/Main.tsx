import { Text } from "@ui-kitten/components"
import { SafeAreaView } from "react-native"
import { AuthGuard } from "./auth"
import { LoginScreen, HomeScreen } from "./screens"


export const Main = () => {
    return <AuthGuard authorizedScreen={<HomeScreen />} loginScreen={<LoginScreen />} />
}