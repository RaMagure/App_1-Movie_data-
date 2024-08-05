
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ImageBackground, StyleSheet, ScrollView } from 'react-native';

export default function Providers() {
  const [movies, setMovies] = useState([]);
  const [TV, setTV] = useState([]);

  const get_api_data = async (type) => {
    const url = `https://api.themoviedb.org/3/watch/providers/${type}?language=en-US`;
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
      return result.results;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await get_api_data('movie');
      const tvData = await get_api_data('tv');
      setMovies(moviesData);
      setTV(tvData);
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.box}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Movie Providers</Text>
        </View>
        <FlatList
          data={movies}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <ImageBackground
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.logo_path}` }}
                style={styles.image}
              >
                <View style={styles.overlay}>
                  <Text style={styles.overlayText}>{item.provider_name}</Text>
                </View>
              </ImageBackground>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.header}>
          <Text style={styles.headerText}>TV Providers</Text>
        </View>
        <FlatList
          data={TV}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <ImageBackground
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.logo_path}` }}
                style={styles.image}
              >
                <View style={styles.overlay}>
                  <Text style={styles.overlayText}>{item.provider_name}</Text>
                </View>
              </ImageBackground>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
  },
  box: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 30,
    padding: 8,
  },
  header: {
    width: 200,
    borderRadius: 40,
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
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    position: 'relative',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 99,
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 20,
    padding: 10,
  },
  overlayText: {
    textAlign: "center",
    color: 'white',
    fontSize: 10,
    marginBottom: 2,
  },
});


