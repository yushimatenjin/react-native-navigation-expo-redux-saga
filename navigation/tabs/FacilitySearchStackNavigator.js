import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import FacilitySearch from '../../screens/FacilitySearch'
import FacilityDetails from '../../screens/FacilityDetails'
import FacilityList from '../../screens/FacilityList'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
})

const FacilitySearchStack = createStackNavigator(
  {
    FacilitySearch: {
      screen: FacilitySearch,
      navigationOptions: {
        title: '施設を探す'
      }
    },
    FacilityList: {
      screen: FacilityList,
      navigationOptions: {
        title: '施設一覧'
      }
    },
    FacilityDetails: {
      screen: FacilityDetails,
      navigationOptions: {
        title: '施設詳細'
      }
    }
  },
  config
)

export default FacilitySearchStack
