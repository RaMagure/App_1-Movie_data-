import { View, Text, FlatList, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import { useState, useEffect } from 'react';

export default function Liked() {
    const [movies, setMovies] = useState([]);

    const get_api_data = async () => {
        const url = "https://api.themoviedb.org/3/trending/all/week?language=en-US'";
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmY4ZTE1NTNlNzY1MWVkNWQ3ZTJiZGQ4OWYzZTI5NiIsIm5iZiI6MTcyMjIzNTcyOC4xNDMxMjQsInN1YiI6IjYzYTFmNmE5MzczYWMyMDA3YmZjOTU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eP1F8fDJ5wTBmAbWbvqGV-yh-y8UAonV5nl0icLXzEw'
            }
        };

        try {
            let response = await fetch(url, options);
            let result = await response.json();
            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
            return { results: [] }; // Return an empty array in case of an error
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            let result = await get_api_data();
            setMovies(result.results); // Set the entire movie data
        };

        fetchData();
    }, []);

    const transcate = function (string, len) {
        if (string.length > len) {
            return string.substring(0, len) + '...';
        }
        else {
            return string
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.container_box}>
                <Text style={styles.head_text_style}>Liked</Text>
                <View>
                    <FlatList
                        data={movies}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (

                            //<Link href={'/App_1/app/(tab)/explore.jsx'}>

                            <View style={styles.imageContainer}>


                                <ImageBackground
                                    source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                                    style={styles.image}>
                                    <View style={styles.overlay}>
                                        <Text style={styles.overlayText}>Name: {item.title}</Text>
                                        <Text style={styles.overlayText}>Description: {transcate(item.overview)}</Text>


                                    </View>
                                </ImageBackground>


                                <Text style={{ color: "black", textAlign: "center", fontSize: 8 }}>Rating: {item.vote_average}</Text>
                            </View>


                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View>
                    <TouchableOpacity>
                        <View style={styles.view_container}>
                            <Text style={styles.view_style}>
                                View Liked
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingTop: 5,

    },
    container_box: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderWidth: 3,
        borderColor: "rgba(120,20,4,255)",
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
    imageContainer: {
        marginTop: 10,

        marginLeft: 15,
        marginRight: 15,
        position: 'relative', // Needed for absolute positioning
    },
    image: {
        height: 120,
        width: 80,

        borderRadius: 20,
        overflow: 'hidden',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50%', // Adjust this value to control the height of the fade
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black with opacity
        borderRadius: 20,
        padding: 10, // Adjust padding as needed

    },
    overlayText: {
        color: 'white',
        fontSize: 4,
        marginBottom: 5,

    },
    view_style: {
        color: "rgba(120,20,4,255)",
        textAlign:"center",
        fontSize:20,
        fontStyle:"normal",
        fontWeight:"800",
        textDecorationLine:"underline",
        textDecorationStyle:"dashed",
        textDecorationColor:"rgba(54,12,0,255)",
        


    },
    view_container: {
        display:"flex",
        height:30,
        width:140,
        marginTop:20,
        borderRadius:20,
        borderWidth:1,
        marginLeft:20,
        borderColor:"rgba(54,12,0,255)",
    }

})