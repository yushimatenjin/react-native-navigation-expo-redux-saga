import React from 'react'
import { applyMiddleware, createStore, compose } from 'redux'
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import reducers from '../reducers'
import AppNavigator from '../../navigation/AppNavigator'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav
)

const middleware = [sagaMiddleware, navigationMiddleware]
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(...middleware))
export const store = createStore(reducers, enhancer)

const App = createReduxContainer(AppNavigator)
const mapStateToProps = state => ({
  state: state.nav
})
export const AppWithNavigationState = connect(mapStateToProps)(App)
sagaMiddleware.run(sagas)
