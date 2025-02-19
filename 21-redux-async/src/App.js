import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notfication from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  // this fetch latest fetch directly
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // using useEffect
  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "pending",
  //         title: "Sending...",
  //         message: "Sending cart data!",
  //       })
  //     );
  //     const response = await fetch(
  //       "https://redux-async-21-default-rtdb.firebaseio.com/cart.json",
  //       { method: "PUT", body: JSON.stringify(cart) }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Sending cart data failed!");
  //     }

  //     dispatch(
  //       uiActions.showNotification({
  //         status: "success",
  //         title: "Success!...",
  //         message: "Sent cart data successfully!!",
  //       })
  //     );

  //     // const responseData = await response.json();
  //   };

  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  //   sendCartData().catch((error) => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "error",
  //         title: "Error...",
  //         message: "Sending cart data failed!",
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);

  // using an action creator thunk

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
    
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      <Layout>
        {notification && (
          <Notfication
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
