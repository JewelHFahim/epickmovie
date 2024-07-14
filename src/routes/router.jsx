import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { clientRoutes } from "./ClientRoutes.jsx";
import NotFound from "../pages/not-found/NotFound.jsx";
import AdminLoginRedirect from "../components/admin-redirect/AdminLoginRedirect.jsx";
import HomeRoutes from "../components/SitemapGenerator/HomeRoutes.jsx";
import TvLayout from "../layout/TvLayout.jsx";
import TvHome from "../pages/tv-channels/tv-home/TvHome.jsx";
import TvStreaming from "../pages/tv-channels/TvStreaming.jsx";
import AllChannels from "../pages/tv-channels/AllChannels.jsx";
import SingleCategory from "../pages/tv-channels/single-category/SingleCategory.jsx";
import TestRoute from "../pages/test/TestRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: clientRoutes,
  },

  {
    path: "/tv",
    element: <TvLayout />,
    children: [
      {
        path: "/tv",
        element: <TvHome />,
      },
      {
        path: "/tv/all-tvs",
        element: <AllChannels />,
      },

      {
        path: "/tv/:string",
        element: <SingleCategory />,
      },

      {
        path: "/tv/streaming/:string/:id",
        element: <TvStreaming />,
      },
    ],
  },

  {
    path: "/admin/login",
    element: <AdminLoginRedirect />,
  },

  {
    path: "/sitemap-xml",
    element: <HomeRoutes />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/test",
    element: <TestRoute />,
  },
]);

export default router;
