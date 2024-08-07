import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, FlatList, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Search() {
    const [isClicked, setIsClicked] = useState(true);
    const [value, setValue] = useState('');
    const [searchItems, setSearchItems] = useState([]);

    const handleInputChange = (text) => {
        setValue(text);
    };

    const getApiData = async (query) => {
        const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmY4ZTE1NTNlNzY1MWVkNWQ3ZTJiZGQ4OWYzZTI5NiIsIm5iZiI6MTcyMjgzNjIxOS4wMTc1MjcsInN1YiI6IjYzYTFmNmE5MzczYWMyMDA3YmZjOTU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.niLYki9dzW2vmK0mlB-sEvRivgh9_1xKeO9YkbbzGls'
            }
        };
        try {
            let response = await fetch(url, options);
            let result = await response.json();
            return result;
        } catch (error) {
            //console.error("Error fetching data:", error);
            return { results: [] };
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if (value) {
                let result = await getApiData(value);
                setSearchItems(result.results);
            } else {
                setSearchItems([]);
            }
        };
        fetchData();
    }, [value]);
    return (
        <View>
            <View style={styles.searchLayout}>
                <View style={styles.searchText}>
                    <TextInput
                        value={value}
                        onChangeText={handleInputChange}
                        placeholder='Search...'
                        autoFocus={true}
                    />
                </View>
                <TouchableOpacity onPress={() => setIsClicked(!isClicked)}>
                    <View style={styles.searchIcon}>
                        <Ionicons name="search-circle-sharp" size={40} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            {isClicked && (
                <View style={styles.searched}>
                    <FlatList
                        data={searchItems}
                        numColumns={1}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View>
                            <View style={styles.movieContainer}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                                />
                                <View style={styles.textStyle}>
                                    <Text style={styles.text}>Title: {item.title || item.name}</Text>
                                    <Text style={styles.decp}>{item.overview}</Text>
                                    <Text style={styles.decp}>Rating: {item.vote_average}</Text>
                                </View>
                            </View></View>
                        )}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    searchIcon: {
        paddingRight:5,
        paddingLeft:20,
    },
    searchText: {
        marginLeft: 15,
        width: "70%",
    },
    searchLayout: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 10,
        backgroundColor: "rgba(64, 64, 64)",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        height: 60,
    },
    searched: {
        display: "flex",
        width: "100%",
    },
    textStyle: {
        display: "flex",
        width: 100,
        height:25,
        borderColor: "rgba(4,65,120,255)",
        borderWidth: 0.7,
        borderRadius: 20,
        margin: 4,
        marginLeft: 15,
    },
    text: {
        color: "rgba(54,12,0,255)",
        display: "flex",
        textAlign: "center",
        margin: 1,
    },
    movieContainer: {
        height: 150,
        borderWidth: 2,
        borderRadius:15,
        margin: 5,
        display: "flex",
        borderColor: "rgba(100,150,120,0.7)",
        flexDirection: "row",
        gap: 10,
    },
    image: {
        margin: 5,
        height: 130,
        width: 110,
    },
    decp: {
        color: "rgba(54,12,0,255)",
        width: 200,
        height: 85,
    },
});

