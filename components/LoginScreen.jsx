// components/LoginScreen.jsx
import 'react-native-gesture-handler'; // Import at the top of the entry file
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from "expo-web-browser";

import { Link } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking"
export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};
WebBrowser.maybeCompleteAuthSession();
const LoginScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({ redirectUrl: Linking.createURL("/Dashboard", { scheme: "myapp" }) });

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);



  return (
    <View style={{
      backgroundColor: "#F1F1F2",
      height: 1000,
      display: "flex"


    }}>

      <View>
        <Image source={require("./../assets/images/Screenshot 2024-07-25 114014.png")}
          style={{
            width: 180,
            height: 200,
            //borderRadius:30,
            //borderColor:"#000",
            //borderRadius:30,
            //borderWidth:7.5,
            marginTop: 80,
            marginLeft: 120,
            display: "flex"
            ,


          }} /></View>
      <View>
        <Text style={{
          fontSize: 35,
          fontFamily: "outfit-medium",
          marginTop: 50,
          textAlign: 'left',
          marginLeft: 40,
          color: "#00CCCC", display: "flex",

        }}>Welcome! To
        </Text><View style={{ marginLeft: 180 }}><Text style={{
          fontSize: 40,
          fontFamily: "outfit", color: "#754CE5"
        }}>App_1</Text></View>

      </View>
      <Text style={{
        fontSize: 14,
        textAlign: "center",
        fontFamily: "outfit",
        marginTop: 15,
        dispaly: "flex",
      }}
      >Find your favourate business near your and post your own business to your own communtiy! </Text>
      <View style={{ flex: 1, marginTop: 50, marginLeft: 54, marginBottom: 330, display: "flex", width: 300, backgroundColor: "#004c99", borderRadius: 50, borderWidth: 6, borderColor: "black" }}><GestureHandlerRootView
      >
        <TouchableOpacity onPress={onPress}>
          <Text style={{
            fontSize: 23,
            fontFamily: "outfit",
            color: "#CC00FF",
            marginLeft: 49,
            marginTop: 18,

          }}>Let's Get Started</Text></TouchableOpacity>



      </GestureHandlerRootView><Image source={require("./../assets/images/Screenshot 2024-07-25 131147.png")} style={{ marginBottom: -580, marginTop: 150, marginLeft: 5, width: 300, height: 450 }}></Image></View>



    </View>
  );
};

export default LoginScreen;
