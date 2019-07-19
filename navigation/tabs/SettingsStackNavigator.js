import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Settings from '../../screens/Settings'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
})

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: '設定'
      }
    }
  },
  config
)

export default SettingsStack
