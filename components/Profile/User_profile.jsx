import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-react';
export default function user_profile() {
    const { user } = useUser();
    return (
        <View style={styles.container}>
            <View style={{}}>
                    <Image source={{ uri: user.imageUrl }} style={styles.image_box}>

                    </Image>
                </View>
            <View style={styles.container_box}>
                
                <View style={styles.components}>
                    <View style={{display:"flex",flexDirection:"row"}}>
                    <Text style={styles.Hello_style}>Hello!</Text>
                    <Text style={styles.full_name}>{user.fullName}</Text>
                    
                    </View>
                    <Text style={{fontSize:10,fontWeight:"bold",marginLeft:30}}>ID: {user?.primaryEmailAddress?.emailAddress}</Text>
                    <Text style={{fontSize:10,fontWeight:"bold",marginLeft:30}}>Phone: {user?.primaryPhoneNumber?.phoneNumber}</Text>
                    
                    <View style={{display:"flex",flexDirection:"row"}}>
                    <Text style={{fontSize:10,fontWeight:"bold",marginLeft:30}}>Summary: </Text>
                    <Text style={{fontSize:10,fontWeight:"ultralight"}}>I like to watch movie</Text>
                    
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingTop: 40

    },
    container_box: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderWidth:3,
        borderColor:"rgba(4,65,120,255)",
        borderRadius: 30,
    },
    image_box: {
        margin: 15,
        marginLeft:110,
        display:"flex",
        height: 150,
        width: 150,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "rgba(4,65,120,255)",

    },
    components:{
        display:"flex",
        marginLeft:80,
        textAlign:"center",
        marginBottom:10,
        
    },
    Hello_style:{
        textAlign:"center",
        fontSize:35,
        color:"rgba(54,12,0,255)"

    },
    full_name:{
        
        fontWeight:"bold",
        fontSize:35,
        marginLeft:7,
        textTransform: 'capitalize',

    },
})