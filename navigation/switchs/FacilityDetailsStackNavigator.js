import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import FacilityDetails from '../../screens/FacilityDetails'
import Booking from '../../screens/Booking'
import BookingConfirmation from '../../screens/BookingConfirmation'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
})

const FacilityDetailsStack = createStackNavigator(
  {
    FacilityDetails: {
      screen: FacilityDetails,
      navigationOptions: {
        title: '施設詳細'
      }
    },
    Booking: {
      screen: Booking,
      navigationOptions: {
        title: '予約する'
      }
    },
    BookingConfirmation: {
      screen: BookingConfirmation,
      navigationOptions: {
        title: '予約完了'
      }
    }
  },
  config
)

export default FacilityDetailsStack
