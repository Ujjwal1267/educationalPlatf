import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

// Utility function to safely parse JSON
const safeJSONParse = (key, fallback) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : fallback
  } catch (e) {
    console.warn(`Failed to parse localStorage item "${key}":`, e)
    return fallback
  }
}

const initialState = {
  cart: safeJSONParse("cart", []),
  total: safeJSONParse("total", 0),
  totalItems: safeJSONParse("totalItems", 0),
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const course = action.payload
      const index = state.cart.findIndex((item) => item._id === course._id)

      if (index >= 0) {
        toast.error("Course already in cart")
        return
      }

      state.cart.push(course)
      state.totalItems++
      state.total += course.price

      localStorage.setItem("cart", JSON.stringify(state.cart))
      localStorage.setItem("total", JSON.stringify(state.total))
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems))

      toast.success("Course added to cart")
    },

    removeFromCart: (state, action) => {
      const courseId = action.payload
      const index = state.cart.findIndex((item) => item._id === courseId)

      if (index >= 0) {
        state.totalItems--
        state.total -= state.cart[index].price
        state.cart.splice(index, 1)

        localStorage.setItem("cart", JSON.stringify(state.cart))
        localStorage.setItem("total", JSON.stringify(state.total))
        localStorage.setItem("totalItems", JSON.stringify(state.totalItems))

        toast.success("Course removed from cart")
      }
    },

    resetCart: (state) => {
      state.cart = []
      state.total = 0
      state.totalItems = 0

      localStorage.removeItem("cart")
      localStorage.removeItem("total")
      localStorage.removeItem("totalItems")
    },
  },
})

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions
export default cartSlice.reducer
