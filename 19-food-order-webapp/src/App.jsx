import Checkout from './component/Checkout'
import Cart from "./component/Cart";
import Header from "./component/Header";
import Meals from "./component/Meals";
import { CartContextProvider } from "./store/cartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
