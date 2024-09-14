import { createSlice } from "@reduxjs/toolkit";


export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    value: 0,
    favArray: []
  },
  reducers: {
    addFavorites: (state, action) => {
      let character = state.favArray.find(x => x.id === action.payload.id)
      if (!character) {
        state.value += 1
        state.favArray.push(action.payload)
      }
    }
  }
})

export const { addFavorites } = favoriteSlice.actions
export default favoriteSlice.reducer