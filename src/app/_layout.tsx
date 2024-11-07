import * as SplashScreen from 'expo-splash-screen';
import "@/global.css";
import { Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [ fontsLoaded, error] = useFonts({
    "SF-Regular": require("../assets/fonts/SF-Pro.ttf"),
    "SF-Pro-Text-HeavyItalic": require("../assets/fonts/SF-Pro-Text-HeavyItalic.otf"),
    "SF-Pro-Italic": require("../assets/fonts/SF-Pro-Italic.ttf")
  })

  useEffect(()=> {
    if(error) throw error
    if(fontsLoaded) SplashScreen.hideAsync()
  },[fontsLoaded])

  if(!fontsLoaded && !error) return null

  return (
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="(steps)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
   
  );
}
