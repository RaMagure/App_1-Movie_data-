
import { View, Text, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Tabs } from 'expo-router';
import { Colors } from './../../constants/Colors';
import { useUser } from '@clerk/clerk-react';

export default function Tablayout() {
  const { user } = useUser();
  return (
  
    <Tabs sceneContainerStyle={{ backgroundColor: "black" }} screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.PRIMARY }}>
      <Tabs.Screen
        name="home"
        options={{ tabBarLabel: "Home", tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} /> }}
      />
      <Tabs.Screen
        name="explore"
        options={{ tabBarLabel: "Explore", tabBarIcon: ({ color }) => <MaterialIcons name="explore" size={24} color={color} /> }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) =>
            user?.imageUrl ? (
              <Image
                source={{ uri: user.imageUrl }}
                style={{ width: 24, height: 24, borderRadius: 12 }}
              />
            ) : (
              <AntDesign name="user" size={24} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
