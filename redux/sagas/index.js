import { fork } from 'redux-saga/effects'
import appSaga from '../app/saga'
export default function* saga() {
  yield fork(appSaga)
}
