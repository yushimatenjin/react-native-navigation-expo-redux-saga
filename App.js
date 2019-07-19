import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store, AppWithNavigationState } from './redux/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
