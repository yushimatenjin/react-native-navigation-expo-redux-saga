import { takeLatest } from 'redux-saga/effects'
import actionTypes from './actionTypes'

function* welcome2Login() {
  console.log('Hello World')
}

export default function* appSaga() {
  yield [takeLatest(actionTypes.WELCOME_START, welcome2Login)]
}
