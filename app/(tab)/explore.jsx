// pages/Explore/Explore.js
import { View, StyleSheet,TextInput,ScrollView } from 'react-native';
import Search from '../../components/Home/Search';
import Genres from '../../components/Explore/Genres';
import Movies from '../../components/Home/Movies' 
import Tv from '../../components/Home/Tv' 
import React, { useEffect, useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
export default function Explore() {
  const route = useRoute();
  
    return (
        <ScrollView style={{flex:7}}showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.search}>
                    <Search/>
                </View>
                <View>
                    <Genres/>
                </View>
                <View>
                    <Movies></Movies>
                </View>
                <View>
                    <Tv></Tv>
                </View>
                
            </View>
            
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingTop: 40,
        flex:1,
       
    },
    box: {
        flex:1,
        
        backgroundColor: "rgba(255,255,255,0.7)",
        borderRadius: 30,
    },
    
});
