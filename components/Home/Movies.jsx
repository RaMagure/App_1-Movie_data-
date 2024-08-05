import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';

const Movies = () => {
    const [movie1, setMovie1] = useState([]);
    const[movie2,setMovie2]=useState([])
    const[movie3,setMovie3]=useState([])

    const get_api_data = async (no) => {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=hi-indian&page='+no;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmY4ZTE1NTNlNzY1MWVkNWQ3ZTJiZGQ4OWYzZTI5NiIsIm5iZiI6MTcyMjQwNzU2Mi4xMDY3NzEsInN1YiI6IjYzYTFmNmE5MzczYWMyMDA3YmZjOTU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i9d3VQ2-lxzORxUygbytTwV8Y_6cxgwuMSJwTW3Vac4'
            }
        };

        try {
            let response = await fetch(url, options);
            let result = await response.json();
            return result;
        } catch (error) {
            console.error("Error fetching data:", error);
            return { results: [] };
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            let result1 = await get_api_data("1");
            setMovie1(result1.results);
            let result2=await get_api_data("2")
            setMovie2(result2.results)
            let result3=await get_api_data("3")
            setMovie3(result3.results)
        };
        fetchData();
    }, []);

    const truncate = (string, len) => {
        if (string.length > len) {
            return string.substring(0, len) + "...";
        } else {
            return string;
        }
    };
    

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>All Movies</Text>
                </View>
                <View>
                <FlatList
                    data={movie1}
                    //numColumns={3}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    
                    renderItem={({item}) => (
                        <View style={styles.imageContainer}>
                            <ImageBackground
                                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                                style={styles.image}
                            >
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>Name: {item.title}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    
                /></View>
                <View>
                <FlatList
                    data={movie2}
                    //numColumns={3}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    
                    renderItem={({item}) => (
                        <View style={styles.imageContainer}>
                            <ImageBackground
                                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                                style={styles.image}
                            >
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>Name: {truncate(item.title, 15)}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    
                /></View>
                <View>
                <FlatList
                    data={movie3}
                    //numColumns={3}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    
                    renderItem={({item}) => (
                        <View style={styles.imageContainer}>
                            <ImageBackground
                                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                                style={styles.image}
                            >
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>Name: {truncate(item.title, 15)}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    
                /></View>
            </View>
        </View>
    );
};

export default Movies;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 7,
    },
    box: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        flex: 1,
        borderRadius: 30,
        padding: 8,
        
    },
    header: {
        width: 160,
        borderRadius: 30,
        marginBottom: 5,
        marginLeft: 12,
        marginTop: 8,
    },
    headerText: {
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: "600",
        color: "black",
        marginLeft: 10,
    },
    
    imageContainer: {

        flex: 1 / 3,
        //aspectRatio: ,
        padding:8,
        position: "relative",
    },
    image: {
        flex: 1,
        height:200,
        width:120,
        borderRadius: 20,
        overflow: "hidden",
        justifyContent: "flex-end",
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.6)",
        padding: 5,
        paddingBottom:20,
    },
    overlayText: {
        color: "white",
        fontSize: 10,
    },
});