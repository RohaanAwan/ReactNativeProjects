import React from 'react'
import countReducer from './counterSlice'
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
  reducer:
  {
    counter: countReducer,
  },
});