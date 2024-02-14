import { AuthProvider } from './src/auth/AuthContext';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { Main } from './src/Main';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light} >
        <AuthProvider>
          <Main />
        </AuthProvider>
      </ApplicationProvider>
    </>
  );
}

export default App

