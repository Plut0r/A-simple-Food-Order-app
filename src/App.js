import { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cardIsShown, setCardIsShown] = useState(false);

  function handleShowCart() {
    setCardIsShown(true);
  }

  function handleHideCart() {
    setCardIsShown(false)
  }

  return (
    <CartProvider>
      {cardIsShown && <Cart onClick={handleHideCart} onClose={handleHideCart} />}
      <Header onClick={handleShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
