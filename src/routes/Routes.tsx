import { createBrowserRouter, Link } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/login/LoginPage";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "../layouts/ProtectedRoute";
import { routeGenerator } from "../utils/routeGenerator";
import { superAdminPaths } from "./superAdmin.routes";
import { userRole } from "../types/user.type";
import { mainMenuPaths } from "./mainMenu.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(mainMenuPaths, ""),
    errorElement: (
      <p>
        Page not found back to <Link to={"/"}>Home</Link>
      </p>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/super-admin",
    element: (
      <ProtectedRoute role="super-admin">
        <Dashboard />
      </ProtectedRoute>
    ),
    children: routeGenerator(superAdminPaths, userRole.SUPERADMIN),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <Dashboard />
      </ProtectedRoute>
    ),
    // children: routeGenerator(superAdminPaths),
  },
]);

export default router;

//   {
//     path: "/dashboard",
//     element: <Navigate to="/dashboard/supper-admin/home" replace />,
//   },
