import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/login/LoginPage";
import Dashboard from "../pages/dashboard/Dashboard";
import HomeDashboard from "../pages/dashboard/super-admin/home/HomeDashboard";
import ManageInstitutes from "../pages/dashboard/super-admin/institutes/ManageInstitutes";
import ManageUsers from "../pages/dashboard/super-admin/users/ManageUsers";
import ManageSubscriptions from "../pages/dashboard/super-admin/subscription/ManageSubscriptions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Navigate to="/dashboard/supper-admin/home" replace />,
      },
      {
        path: "/dashboard/supper-admin/home",
        element: <HomeDashboard />,
      },
      {
        path: "/dashboard/supper-admin/manage-institutes",
        element: <ManageInstitutes />,
      },
      {
        path: "/dashboard/supper-admin/manage-users",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/supper-admin/manage-subscriptions",
        element: <ManageSubscriptions />,
      },
    ],
  },
]);

export default router;
