import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    cartItems: [],
  },
  reducers: {
    Adding: (state, action) => {
      console.log(
        state.cartItems.filter((item) => item.id === action.payload)[0]
      );
      state.cartItems.filter((item) => item.id === action.payload)[0]
        ? state.cartItems.filter((item) => item.id === action.payload)[0]
            .amount++
        : state.cartItems.push({
            id: action.payload,
            amount: 1,
          });
    },
    Deleting: (state, action) => {
      if (state.cartItems.filter((item) => item.id === action.payload)[0])
        if (
          state.cartItems.filter((item) => item.id === action.payload)[0]
            .amount -
            1 >
          0
        )
          state.cartItems.filter((item) => item.id === action.payload)[0]
            .amount--;
        else
          state.cartItems = state.cartItems.filter(
            (item) => item.id != action.payload
          );
    },
  },
});

export const { Adding, Deleting } = CartSlice.actions;
export default CartSlice.reducer;
