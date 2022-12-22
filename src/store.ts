import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'

import commentsReducer from './redux/slices/commentsSlice'

export const store = configureStore({
  reducer: commentsReducer,
  middleware: [thunk, logger],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch