import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Subscription() {
    const [active, setactive] = useState(false)
    const activate=(temp)=>{
        setactive(temp)
    }

    return (
        <View style={styles.container}>
            <View style={styles.container_box}>
                <View>
                    <Text style={styles.head_text_style}>Subscription</Text>
                </View>
                <View>
                    <Text style={styles.plan_style}>Your Current Plan</Text>
                </View>
                
                {active ? (
    <View>
        <View style={styles.plan_status}>
            <Text style={styles.active}>!</Text>
            <Text style={styles.status}>No Active Plans</Text>
        </View>
        <View>
            <TouchableOpacity onPress={() => activate(false)}>
                <View style={styles.view_container}>
                    <Text style={styles.view_style}>
                        Buy New Plan
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
) : (
    <View>
        <TouchableOpacity onPress={() => activate(true)}>
            <View style={styles.view_container}>
                <Text style={styles.view_style}>
                    View My Plans
                </Text>
            </View>
        </TouchableOpacity>
    </View>
)}


                
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
        paddingTop: 5,


    },
    container_box: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderWidth: 3,
        borderColor: "rgba(4,65,120,255)",
        borderRadius: 30,
        width: 185,
        height: 250

    },
    head_text_style: {
        textAlign: "center",
        fontSize: 15,
        fontStyle: "italic",
        fontWeight: "bold",
        textDecorationLine: "underline",
        textDecorationStyle: "dotted",
        textShadowColor: "black",


    },
    view_style: {
        color: "rgba(4,65,120,255)",
        textAlign: "center",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "800",
        textDecorationLine: "underline",
        textDecorationStyle: "dashed",
        textDecorationColor: "rgba(54,12,0,255)",



    },
    view_container: {
        display: "flex",
        height: 30,
        width: 150,
        marginTop: 20,
        borderRadius: 20,
        borderWidth: 1,
        marginLeft: 15,
        borderColor: "rgba(4,65,120,255)",
    },
    plan_style: {
        fontSize: 10,
        marginLeft: 15,
        fontWeight: "600",
        marginTop: 20,
    },
    plan_status: {
        marginLeft: 40,
        marginTop: 10,
        borderColor: "red",
        borderWidth: 3,
        borderRadius: 50,
        height: 100,
        width: 100,


    },
    active: {
        marginTop: -7,
        fontSize: 50,
        color: "red",
        textAlign: "center"


    },
    status: {
        fontSize: 10,
        color: "red",
        textAlign: "center"

    }


})