
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Genres() {
  const [genres, setGenres] = useState([]);
  const [movie, setMovie] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  

  const get_api_data = async () => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
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
      console.error("Error fetching data:", error);
      return { genres: [] };
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let result = await get_api_data();
      setGenres(result.genres);
    };
    fetchData();
  }, []);


  function find_Movies(genre) {
    
    console.log(genre)
    const get_api = async (query) => {
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
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
        console.error("Error fetching data:", error);
        return { results: [] };
      }
    };

    const fetchData = async () => {
      let result = await get_api(genre);
      // console.log(result)
      setMovie(result.results);

    };
    fetchData();

 
  }
  const handleGenrePress = (genre) => {
    if (selectedGenre === genre) {
      setSelectedGenre(null);
      setMovie([]);
    } else {
      setSelectedGenre(genre);
      find_Movies(genre);
      
    }
  };
 
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={genres}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity onPress={() => handleGenrePress(item.name)}>
                <View style={[styles.text_style, selectedGenre === item.name && styles.selectedText]}>
                  <Text style={styles.text}>{item.name}</Text>
                </View>
              </TouchableOpacity>
              

            </View>
          )}
        />
      </View>
      <View>
        <FlatList
          data={movie}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View >
              <View style={styles.Movie_container}>
                <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} />
                <View style={styles.text_style}>
                  <Text style={styles.text}>Title:{item.title}</Text>
                  <Text style={styles.Decp}>{item.overview}</Text>
                  <Text style={styles.Decp}>Rating: {item.vote_average}</Text>
                  
                </View>
              </View></View>
          )}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 8,
    width: 360,
    borderRadius: 30,
    margin: 10,

  },
  text_style: {
    display:"flex",
    width: 100,
    height:25,
    borderColor: "rgba(4,65,120,255)",
    borderWidth: 0.7,
    borderRadius: 20,
    margin: 4,
    marginLeft: 15
  },
  text: {
    color: "rgba(54,12,0,255)",
    display: "flex",
    textAlign: "center",
    margin: 1
  },
  Movie_container: {
    height: 150,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    margin: 5,
    display: "flex",
    borderColor: "rgba(4,65,120,255)",
    flexDirection: "row",
    gap: 10

  },
  image: {
    margin: 5,
    height: 140,
    width: 120,
    borderCurve:"circular"
  },
  Decp:{
    color:"rgba(54,12,0,255)",
    width:200,
    height:85
  },
  selectedText:{
    borderColor:"red"
  }
});




