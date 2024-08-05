import { ScrollView, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from "./../../components/Home/Header"
import Event from '../../components/Home/Event'
import Trending from "../../components/Home/Trending"
import Providers from '../../components/Home/Providers'
import Movies from '../../components/Home/Movies'
import Tv from '../../components/Home/Tv'

export default function home() {

  return (


    <ScrollView style={{ flex: 7 }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
      <View >
        <Header></Header>
        <Event></Event>
        <Trending></Trending>

        <Movies></Movies>
        <Tv></Tv>
        <Providers></Providers>
      </View>
    </ScrollView>
  )
}