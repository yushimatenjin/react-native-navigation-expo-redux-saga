import React from 'react'
import { Platform, Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import FacilitySearchStackNavigator from './tabs/FacilitySearchStackNavigator'
import SettingsStackNavigator from './tabs/SettingsStackNavigator'
import MyPageStackNavigator from './tabs/MyPageStackNavigator'
import images from '../assets/images'
const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
})

const MainTabNavigator = createBottomTabNavigator(
  {
    FacilitySearch: {
      screen: FacilitySearchStackNavigator,
      navigationOptions: {
        title: '検索',
        tabBarIcon: <Image source={images.icons.search} />
      }
    },
    MyPage: {
      screen: MyPageStackNavigator,
      navigationOptions: {
        title: '予約一覧',
        tabBarIcon: <Image source={images.icons.booking} />
      }
    },
    Settings: {
      screen: SettingsStackNavigator,
      navigationOptions: {
        title: '設定',
        tabBarIcon: <Image source={images.icons.circle} />
      }
    }
  },
  config
)

export default MainTabNavigator
