import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { Provider } from "react-redux";
import store from "./Redux/store";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:id",
      element: <Details />,
    },
  ]);

  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
};

export default App;
