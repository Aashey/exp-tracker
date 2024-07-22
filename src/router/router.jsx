import Layout from "./Layout";
import Dashboard from "../pages/dashboard";
import Target from "../pages/target";
import { createBrowserRouter } from "react-router-dom";
import Finance from "../pages/financials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "finance", element: <Finance /> },
      { path: "targets", element: <Target /> },
    ],
  },
]);

export default router;
