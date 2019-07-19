import React from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'

export default ({ navigation }) => (
  <SafeAreaView>
    <Text>施設詳細</Text>
    <Button title="予約する" onPress={() => navigation.navigate('Booking')} />
  </SafeAreaView>
)
