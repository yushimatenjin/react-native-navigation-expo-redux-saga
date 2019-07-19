import actionTypes from './actionTypes'

export const welcome = () => {
  return { type: actionTypes.WELCOME_START }
}

export const welcomeEnd = () => {
  return { type: actionTypes.WELCOME_END }
}
