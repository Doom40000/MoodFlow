import { GOOD, OK, BAD, YES, NO } from "./actions";

export const stateQuestion1 = { answer: '' };
export const stateQuestion2 = { answer: false };
export const stateQuestion3 = { answer: false };
export const stateQuestion4 = { answer: false };
export const stateQuestion5 = { answer: false };


export const reducerQuestion1 = (state = stateQuestion1, action: { type: string; }) => {
  action.type === GOOD ? state.answer = 'good'
  : action.type === OK ? state.answer = 'ok'
  : state.answer = 'bad'
}

export const reducerQuestion2 = (state = stateQuestion2, action: { type: string; }) => {
  action.type === YES ? state.answer = true
  : state.answer = false
}

export const reducerQuestion3 = (state = stateQuestion3, action: { type: string; }) => {
  action.type === YES ? state.answer = true
  : state.answer = false
}

export const reducerQuestion4 = (state = stateQuestion4, action: { type: string; }) => {
  action.type === YES ? state.answer = true
  : state.answer = false
}

export const reducerQuestion5 = (state = stateQuestion5, action: { type: string; }) => {
  action.type === YES ? state.answer = true
  : state.answer = false
}
