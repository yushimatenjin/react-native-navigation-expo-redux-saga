import React from 'react'
import { Text, SafeAreaView, Button } from 'react-native'

export default ({ navigation }) => (
  <SafeAreaView>
    <Text>予約情報</Text>
    <Button
      title="予約確認"
      onPress={() => navigation.navigate('BookingConfirmation')}
    />
  </SafeAreaView>
)
