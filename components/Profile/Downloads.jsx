import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ImageBackground, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function Downloads() {
    const [movies, setMovies] = useState([]);

    const get_api_data = async () => {
      const url = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
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
        <View style={styles.box}>
          <View style={styles.header}>
          
            <Text style={styles.headerText}>Downloads</Text>
            <MaterialIcons name="download" size={28} color="black" />
          </View>
          <FlatList
            data={movies}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <ImageBackground
                  source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                  style={styles.image}
                >
                  <View style={styles.overlay}>
                    <Text style={styles.overlayText}>Name: {item.title}</Text>
                    <Text style={styles.overlayText}>Description: {transcate(item.overview, 80)}</Text>
                    <Text style={{ color: "white", textAlign: "right" }}>Rating: {item.vote_average}</Text>
                    <Text style={{ color: "white", textAlign: "right" }}>Votes: {item.vote_count}</Text>
                  </View>
                </ImageBackground>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 7,
    },
    box: {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      height: 300,
      borderRadius: 30,
      padding: 8,
    },
    header: {
      width: 160,
      borderRadius: 30,
      marginBottom: 5,
      marginLeft: 12,
      marginTop: 8,
      display:"flex",
      flexDirection:"row",
      gap:3
    },
    headerText: {
      fontSize: 20,
      fontStyle: "italic",
      fontWeight: "600",
      color: "black",
    },
    imageContainer: {
      marginTop: 10,
      marginLeft: 15,
      marginRight: 15,
      position: 'relative', // Needed for absolute positioning
    },
    image: {
      height: 220,
      width: 140,
      borderRadius: 20,
      overflow: 'hidden',
    },
    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '40%', // Adjust this value to control the height of the fade
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black with opacity
      borderRadius: 20,
      padding: 10, // Adjust padding as needed
    },
    overlayText: {
      color: 'white',
      fontSize: 14,
      marginBottom: 5,
  
    },
  });
  
  