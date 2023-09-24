import React, { useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, OpenSans_700Bold, OpenSans_400Regular, OpenSans_500Medium } from '@expo-google-fonts/open-sans';
import { View } from 'react-native'; // Importe o componente View da biblioteca react-native
import theme from "./src/global/styles/theme";
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_700Bold,
    OpenSans_400Regular,
    OpenSans_500Medium
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // Isso diz à tela de splash para ser ocultada imediatamente
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Dashboard />
      </View>
    </ThemeProvider>
  );
}
