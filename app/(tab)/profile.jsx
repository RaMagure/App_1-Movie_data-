import { View, Text } from 'react-native'
import React from 'react'
import User_profile from '../../components/Profile/User_profile'
import Liked from '../../components/Profile/Liked'
import Subscription from '../../components/Profile/Subscription'


export default function profile() {
  return (
    <View>
      <User_profile></User_profile>
      <View style={{display:"flex",flexDirection:"row",}}>
      <Liked></Liked>
      <Subscription></Subscription>
      </View>
      
    </View>
  )
}