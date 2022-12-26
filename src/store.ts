import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'

import commentsReducer from './redux/slices/commentsSlice'
import modalReducer from './redux/slices/modalSlice'

export const store = configureStore({
  reducer: combineReducers({comments: commentsReducer, modal: modalReducer}),
  middleware: [thunk, logger],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch