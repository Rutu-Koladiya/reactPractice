import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";
import HomePage from "./component/Home";
import ProductsPage from "./component/Products";
import RootLayout from "./component/Root";
import ErrorPage from "./component/Error";
import ProductDetailsPage from "./component/ProductDetails";

// alternative way
// const routeDefinations = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinations);

const router = createBrowserRouter([
  {
    // absolute path - - in this if write any thing in path insted of what we had written then whenever we try to open it's children page it will throw error
  //   path: "/",
  //   element: <RootLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     { path: "/", element: <HomePage /> },
  //     { path: "/products", element: <ProductsPage /> },
  //     { path: '/products/:productId', element: <ProductDetailsPage />}
  //   ],
  // },
  // 
    // relative path - in this if write any thing in path (/root or /)home it's children will work same
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { path: "", element: <HomePage /> },
      // it simply means it's default route
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailsPage />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
