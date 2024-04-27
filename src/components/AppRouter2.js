import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {publicRoutes, authRoutes} from '../path/routes'
import { useContext } from "react";
import {User} from "../index";

const Routes = () => {
  const { user } = useContext(User);

  return (
    <RouterProvider router={createBrowserRouter([
      ...publicRoutes,
      ...authRoutes
    ])} />
  );
};

export default Routes;
