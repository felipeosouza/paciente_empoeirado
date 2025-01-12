import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { View, StatusBar } from 'react-native';
import NavBar from '@/components/NavBar';
import React from 'react';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Habibi: require('../assets/fonts/Habibi-Regular.ttf'),
    GolosText: require('../assets/fonts/GolosText-VariableFont_wght.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={{flex: 1}}>
      <View style={{height: StatusBar.currentHeight, backgroundColor: '#018786'}}/>
      <Stack screenOptions={{header: NavBar}}>
        <Stack.Screen name="index"/>
      </Stack>
      </View>
    </ThemeProvider>
  );
}
