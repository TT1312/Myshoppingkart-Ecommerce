import { createSlice } from '@reduxjs/toolkit'

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    products: []
  },
  reducers: {
    
    addToWishlist: (state, action) => {
      const element = state.products.find((element) => element.id === action.payload.id);
      if (element) {
        alert("Product Already in WishList!!!");
      } else {
        state.products.push(action.payload);
      }
    },
    removeWishlistItem: (state, action) => {
      state.products = state.products.filter(item=> item.id !== action.payload);
    },

  }
})

// Action creators are generated for each case reducer function
export const { addToWishlist, removeWishlistItem } = wishlistSlice.actions

export default wishlistSlice.reducer