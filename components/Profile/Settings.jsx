import { Text, StyleSheet, View, TouchableOpacity, Animated, Dimensions } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Octicons from '@expo/vector-icons/Octicons';

const MENU_HEIGHT = 300; // Adjust this value to set the height of the menu

export default function Settings() {
    const [menu, setMenu] = useState(false);
    const translateY = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    useEffect(() => {
        Animated.timing(translateY, {
            toValue: menu ? 0 : Dimensions.get('window').height,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [menu]);


    const openMenu = (show) => {
        setMenu(show);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menuButton} onPress={() => openMenu(true)}>
                {menu?(null):(<Ionicons name="menu" size={30} color="white" />)}
                
                
            </TouchableOpacity>
            
            <Animated.View style={[styles.component, { transform: [{ translateY }] }]}>
                    
                        <TouchableOpacity onPress={() => openMenu(false)}>
                            <View style={{ alignItems: "center" }}>
                                <MaterialIcons name="arrow-drop-down" size={40} color="white" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.options}>
                            <Ionicons name="settings-outline" size={24} color="white" />
                            <Text style={styles.text}>App Settings</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.options}>
                            <MaterialIcons name="manage-accounts" size={24} color="white" />
                            <Text style={styles.text}>Manage profile</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.options}>
                            <Entypo name="help-with-circle" size={24} color="white" />
                            <Text style={styles.text}>Help</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.options}>
                            <Octicons name="sign-out" size={24} color="white" />
                            <Text style={styles.text}>Sign Out</Text>
                        </View>
                        </TouchableOpacity>
                    
                
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', // Ensures visibility of white icons
    },
    menuButton: {
        position: 'absolute',
        top: 10,
        right:170,
        padding:20,
    },
    component: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: MENU_HEIGHT, // Set a fixed height here
        padding: 2,
        paddingTop: 5,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        borderRadius: 20,
        borderTopWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.7)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        overflow: 'hidden', // Ensures content doesn't overflow the animated height
    },
    options: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 20,
        rowGap: 20,
        gap: 10,
    },
    text:{
        color:"white"
    }
});





