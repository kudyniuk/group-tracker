import { ImageProps, SafeAreaView } from "react-native"
import { useAuth } from "../auth"
import { Button, Icon } from "@ui-kitten/components"
import { StyleSheet } from 'react-native'

type AcessoryComponent = Button['props']['accessoryLeft']

const GoogleIcon: AcessoryComponent = (props) => (
    <Icon name='google' {...props} />
);

export const LoginScreen = () => {
    const { googleSignIn } = useAuth()

    return <SafeAreaView style={styles.container}>
        <Button accessoryLeft={GoogleIcon} onPress={googleSignIn}>Google Sign In</Button>
    </SafeAreaView>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40
    }
});
