import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store, { persistor } from "./store";
import ErrorPage from "components/common/ErrorPage";
import ToastProvider from "components/common/Toast";
import Login from "components/Login";
import { HOME_URL } from "constants/urls";
import ROUTES from "constants/routes";

const router = createBrowserRouter([
  {
    path: HOME_URL,
    element: <App />,
    errorElement: <ErrorPage />,
    children: ROUTES.map(({ path, element }) => ({ path, element })),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastProvider />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
