import React from 'react';
import { Provider } from 'react-redux';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';
// redux stuff
import { createStore } from 'redux';
import reducer from './reducer';

// In react-redux we need Provider which will wrap our application and connect to access the info relayed by Provider

//initial store
const initialStore = {
  cart: cartItems,
  total: 1500,
  amount: 10,
};

// second parameter ie the state is optional or pass it in the reducer
const store = createStore(reducer, initialStore);

console.log(store.getState());

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
