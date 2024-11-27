import App from "./App";
import Checkout from "./components/Checkout";
import ErrorPage from "./components/ErrorPage";
import MainPage from "./components/MainPage";
import Shop from "./components/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "shop", element: <Shop /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
];

export default routes;
