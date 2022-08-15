import { createSlice } from '@reduxjs/toolkit'
import dummy_locations from '../dummyData/dummyLocations'

const placesDataSlice = createSlice({
  name: 'places',
  initialState:dummy_locations,
  reducers:{
    more_places:(state, action) => {
        state.placesData = action.payload
    },
    segment_places:(state, action) => {
      const filtered_locations = dummy_locations.locations.filter( place => place.tags.includes( action.payload ))
      state.locations =  filtered_locations
    }

  }
})

export const { more_places, segment_places } = placesDataSlice.actions
export default placesDataSlice.reducer