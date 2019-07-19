import React from 'react'
import { View, Text, SafeAreaView, TextInput, Button } from 'react-native'
export default ({ navigation }) => (
  <SafeAreaView>
    <Text>施設一覧</Text>
    <Button
      title="Active Space　渋谷"
      onPress={() => {
        navigation.navigate('FacilityDetails')
      }}
    />
  </SafeAreaView>
)
