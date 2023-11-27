import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice'
import cartReducer,  { initializeCart } from './cartReducer';
import userReducer from "./userSlice";
import orderReducer from "./orderSlice";

const store = configureStore({
  reducer: {
    // Định nghĩa các reducers của bạn ở đây
    auth: authReducer,
    cart: cartReducer,
    user: userReducer,
    order: orderReducer,
    
  },
});
// Load cart data from Local Storage and initialize the cart state
const storedCart = localStorage.getItem("cart");
if (storedCart) {
  const parsedCart = JSON.parse(storedCart);
  store.dispatch(initializeCart(parsedCart));
}

// Subscribe to store updates and save cart data to Local Storage
store.subscribe(() => {
  const cart = store.getState().cart.products;
  localStorage.setItem("cart", JSON.stringify(cart));
});

export default store;
