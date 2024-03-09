import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { clientRoutes } from "./ClientRoutes.jsx";
import NotFound from "../pages/not-found/NotFound.jsx";
import AdminLoginRedirect from "../components/admin-redirect/AdminLoginRedirect.jsx";
import MoviePost from "../components/SitemapGenerator/MoviePost.jsx";
import HomeRoutes from "../components/SitemapGenerator/HomeRoutes.jsx";
import TvShowPost from "../components/SitemapGenerator/TvShowPost.jsx";
import GenrePost from "../components/SitemapGenerator/terms-post/GenrePost.jsx";
import YearPost from "../components/SitemapGenerator/terms-post/YearPost.jsx";
import QualityPost from "../components/SitemapGenerator/terms-post/QualityPost.jsx";
import BanglaPost from "../components/SitemapGenerator/BanglaPost.jsx";

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
    element: <HomeRoutes />,
  },
  {
    path: "/movie-post.xml",
    element: <MoviePost />,
  },
  {
    path: "/tv-post.xml",
    element: <TvShowPost />,
  },
  {
    path: "/bengali-post.xml",
    element: <BanglaPost />,
  },
  {
    path: "/genre-post.xml",
    element: <GenrePost />,
  },
  {
    path: "/year-post.xml",
    element: <YearPost />,
  },
  {
    path: "/quality-post.xml",
    element: <QualityPost />,
  },
  // {
  //   path: "/sitemap-xml",
  //   element: <SitemapHomePage />,
  //   children: [
  //     {
  //       path: "/sitemap-xml",
  //       element: <HomeRoutes />,
  //     },
  //     {
  //       path: "/movie-post.xml",
  //       element: <MoviePost />,
  //     },
  //     {
  //       path: "/tv-post.xml",
  //       element: <TvShowPost />,
  //     },
  //     {
  //       path: "/bengali-post.xml",
  //       element: <BanglaPost />,
  //     },
  //     {
  //       path: "/genre-post.xml",
  //       element: <GenrePost />,
  //     },
  //     {
  //       path: "/year-post.xml",
  //       element: <YearPost />,
  //     },
  //     {
  //       path: "/quality-post.xml",
  //       element: <QualityPost />,
  //     },
  //   ],
  // },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
