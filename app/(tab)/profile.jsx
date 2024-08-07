import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import User_profile from '../../components/Profile/User_profile'
import Liked from '../../components/Profile/Liked'
import Subscription from '../../components/Profile/Subscription'

import Downloads from '../../components/Profile/Downloads'
import Settings from '../../components/Profile/Settings'


export default function profile() {
  return (
    <ScrollView>
    <View>
      
      <User_profile></User_profile>
      <Settings></Settings>
      <View style={{display:"flex",flexDirection:"row",}}>
      <Liked></Liked>
      <Subscription></Subscription>
      </View>
      
      <Downloads></Downloads>
      
    </View>
    </ScrollView>
  )
}