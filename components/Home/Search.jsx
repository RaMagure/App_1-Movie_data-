// components/Home/Search.js
import React, { useEffect, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Search({}) {
    

    return (
        <View style={styles.search_layout}>
            <View style={styles.search_text}>
                <TextInput  placeholder='Search...' autoFocus={true} />
            </View>
            <View style={styles.search_Icon}>
                <Ionicons name="search-circle-sharp" size={40} color="black" />
            </View>
        </View>
    );
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
        
        backgroundColor: "rgba(64, 64, 64)",
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        borderBottomColor:"black",
        borderBottomWidth:1,
        height:60,
    },
});
