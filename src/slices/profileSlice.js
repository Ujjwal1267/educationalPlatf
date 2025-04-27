import { createSlice } from "@reduxjs/toolkit"

// Safe JSON parse utility
const safeParse = (key, fallback = null) => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch (error) {
    console.warn(`Error parsing localStorage item "${key}":`, error)
    return fallback
  }
}

const initialState = {
  user: safeParse("user", null),
  loading: false,
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const { setUser, setLoading } = profileSlice.actions
export default profileSlice.reducer
