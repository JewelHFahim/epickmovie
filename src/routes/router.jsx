import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { clientRoutes } from "./ClientRoutes.jsx";
import NotFound from "../pages/not-found/NotFound.jsx";
import AdminLoginRedirect from "../components/admin-redirect/AdminLoginRedirect.jsx";
import SitemapGenerator from "../components/SitemapGenerator/SitemapGenerator.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: clientRoutes,
  },

  {
    path: "/admin/login",
    element: <AdminLoginRedirect />,
  },

  {
    path: "/sitemap-xml",
    element: <SitemapGenerator />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
