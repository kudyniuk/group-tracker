import { View, StyleSheet, Button, Text, Image } from "react-native"
import { useAuth } from "../auth";

export const LoginPage = () => {
    const { user, googleSignIn } = useAuth()

    return <View style={styles.container}>
        {user ? <View>
            <Image style={styles.avatar} source={{ uri: user.user.photoURL || undefined }} />
            <Text>{user.user.displayName}</Text>
        </View> :
            <Button title="Google SignIn" onPress={googleSignIn} />}
    </View>
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
