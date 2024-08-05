import { Image, Text, StyleSheet, TextInput, View, Keyboard, Button, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import  Search  from "./Search";
import { useNavigation } from '@react-navigation/native';
export default function Header() {
  const { user } = useUser();
  const navigation = useNavigation();

  const handleSearchClick = () => {
    navigation.navigate('explore', { activateSearch: false });
  };

  return (

    <View style={{ padding: 15, paddingTop: 40 }}>

      <View style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        height: 200,
        borderRadius: 30,
      }}>
        <View
          style={{
            marginTop: 10,
            marginLeft: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingLeft: 8,
            borderColor: "black",

            height: 60,
            borderRadius: 50,
            width: 150

          }}>
          <Image source={require("./../../assets/images/download.webp")}
            style={{ width: 45, height: 45 }}></Image>
          <View>
            <Text style={{ fontSize: 17, fontWeight:"bold" }}>Magure Entertainments</Text>


          </View>
          <View style={{ paddingLeft: 100 }}>
            <Feather name="download" size={32} color="black" />
          </View>
        </View>
        <View style={{paddingTop:50}}>
        <TouchableOpacity onPress={handleSearchClick}>
        <View style={styles.search_layout}>
            <View style={styles.search_text}>
                <Text>Search...</Text>
            </View>
            <View style={styles.search_Icon}>
                <Ionicons name="search-circle-sharp" size={40} color="black" />
            </View>
        </View>
      </TouchableOpacity>
      </View>
        

        

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  search_Icon: {
      paddingLeft: 6,
  },
  search_text: {
      marginLeft: 10,
      width: "80%",
  },
  search_layout: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      padding: 10,
      elevation: 10,
      backgroundColor: "rgba(64, 64, 64, 0.6)",
      borderRadius: 40,
      marginLeft: 16,
      
      width: 350,
      height: 60,
  },
});








