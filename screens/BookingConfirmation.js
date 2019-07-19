import React from 'react'
import { Text, SafeAreaView, Button } from 'react-native'

export default ({ navigation }) => (
  <SafeAreaView>
    <Text>予約確認とありがとう</Text>
    <Button title="戻る" onPress={() => navigation.navigate('main')} />
  </SafeAreaView>
)
