import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import MainTabNavigator from './MainTabNavigator'
import FacilityDetailsStackNavigator from './switchs/FacilityDetailsStackNavigator'

const AppContainer = createAppContainer(
  createSwitchNavigator({
    main: MainTabNavigator,
    FacilityDetails: FacilityDetailsStackNavigator
  })
)
export default AppContainer
