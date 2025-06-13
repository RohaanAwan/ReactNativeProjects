import React from 'react'
import {store} from './redux/store'
import {Provider} from 'react-redux'
import HomeScreen from './HomeScreen'

export default function()
{
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  )
}