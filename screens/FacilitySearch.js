import React from 'react'
import { View, Text, SafeAreaView, TextInput, Button } from 'react-native'

const styles = {
  text: {
    fontSize: 18
  },

  textInput: {
    backgroundColor: 'gray'
  },
  button: {
    fontSize: 24,
    backgroundColor: '#42E0E9',
    color: '#ffffff'
  }
}
//ナビゲーションをSagaに持たせる
export default ({ navigation }) => (
  <SafeAreaView>
    <Text>施設検索項目</Text>

    <Text style={styles.text}>スポーツから探す</Text>
    <TextInput style={styles.textInput} defaultValue="サッカー" />
    <Button
      onPress={() => {
        navigation.navigate('FacilityList')
      }}
      title="検索"
    />

    <Text style={styles.text}>スポーツ施設から探す</Text>
    <TextInput style={styles.textInput} defaultValue="野球場" />
    <Button
      onPress={() => {
        navigation.navigate('FacilityList')
      }}
      title="検索"
    />
  </SafeAreaView>
)
