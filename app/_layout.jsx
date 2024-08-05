import React from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SignedOut, SignedIn, ClerkProvider,ClerkLoaded } from '@clerk/clerk-expo';
import { Text } from 'react-native';
import LoginScreen from './../components/LoginScreen'; 
SplashScreen.preventAutoHideAsync();
import * as SecureStore from 'expo-secure-store';

import { Slot } from "expo-router"

const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "outfit": require("./../assets/fonts/PlaywriteDKLoopet-Regular.ttf"),
    "outfit-medium": require("./../assets/fonts/PlaywriteDKLoopet-Light.ttf"),
    "outfit-light": require("./../assets/fonts/PlaywriteDKLoopet-ExtraLight.ttf")
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <SignedIn>
        <Stack>
          <Stack.Screen name="(tab)" options={{ headerShown: false }} />
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen/>
      </SignedOut>
    </ClerkProvider>
  );
}


