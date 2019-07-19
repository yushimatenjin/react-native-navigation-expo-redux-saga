import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import MyPage from '../../screens/Settings'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
})

const MyPageStack = createStackNavigator(
  {
    MyPage: {
      screen: MyPage,
      navigationOptions: {
        title: '予約一覧'
      }
    }
  },
  config
)

export default MyPageStack
