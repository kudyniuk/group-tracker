import { createContext, PropsWithChildren, useContext, useState } from "react"

import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth"
import { GoogleSignin } from "@react-native-google-signin/google-signin"

GoogleSignin.configure()

type AuthContext = {
	user?: FirebaseAuthTypes.UserCredential
	googleSignIn: () => Promise<void>
}

const AuthContext = createContext<AuthContext | undefined>(undefined)

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<FirebaseAuthTypes.UserCredential>()

    const googleSignIn = async (): Promise<void> => {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })

        const { idToken } = await GoogleSignin.signIn()
        const googleCredential = auth.GoogleAuthProvider.credential(idToken)
        const user = await auth().signInWithCredential(googleCredential)

        setUser(user)
    }

    return <AuthContext.Provider value={{ user, googleSignIn }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider")
    }

    return context
}
