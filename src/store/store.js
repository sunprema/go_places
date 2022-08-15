import { configureStore } from '@reduxjs/toolkit'
import placesDataReducer from './placesDataSlice'

export const store = configureStore({
  reducer:{
    places:placesDataReducer
  }
})
