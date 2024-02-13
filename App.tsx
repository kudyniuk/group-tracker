import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/auth/AuthContext';
import { LoginPage } from './src/components/LoginPage';

export default function App() {

  return (
    <AuthProvider>
      <StatusBar />
      <LoginPage />
    </AuthProvider>
  );
}

