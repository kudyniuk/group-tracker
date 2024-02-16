import * as eva from "@eva-design/eva"
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components"
import { EvaIconsPack } from "@ui-kitten/eva-icons"

import { AuthProvider } from "@own/auth"
import { Main } from "@own/Main"

const App = () => {
    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <AuthProvider>
                    <Main />
                </AuthProvider>
            </ApplicationProvider>
        </>
    )
}

export default App
