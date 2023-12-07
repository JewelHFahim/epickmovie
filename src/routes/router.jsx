import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import MovieDetails from "../pages/movies/movie-details/MovieDetails";
import Category from "../pages/movies/category/Category";
import SearchList from "../pages/movies/search-list/SearchList";
import NotFound from "../pages/not-found/NotFound";
import Movies from "../pages/movies/movies/Movies";
import TvShow from "../pages/tv-show/TvShow";
import TvShowDetails from "../pages/tv-show/tvShowDetails";
import Dashboard from "../dashboard/dashboard/Dashboard";
import DashMain from "../layout/dashboard/DashMain";
import DbMovies from "../dashboard/DbMovies";
import MoviesDB from "../dashboard/dashboard/movies/MoviesDB";
import DbSeries from "../dashboard/dashboard/series/DbSeries";
import AddMovies from "../dashboard/dashboard/movies/AddMovies";

const router = createBrowserRouter([
  // ==========>> CLIENT ROUTES <<===========
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/movies",
        element: <Movies />,
      },

      {
        path: "/tv-show",
        element: <TvShow />,
      },

      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },

      {
        path: "/series/:id",
        element: <TvShowDetails />,
      },

      {
        path: "/category",
        element: <Category />,
      },

      {
        path: "/search-list",
        element: <SearchList />,
      },

      {
        path: "/not-found",
        element: <NotFound />,
      },
    ],
  },

  // ==========>> ADMIN ROUTES <<===========
  {
    path: "/dashboard",
    element: <DashMain />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      {
        path: "/dashboard/db-movies",
        element: <DbMovies />,
      },

      {
        path: "/dashboard/movies-db",
        element: <MoviesDB />,
      },

      {
        path: "/dashboard/add-movie",
        element: <AddMovies />,
      },

      {
        path: "/dashboard/db-series",
        element: <DbSeries />,
      },
    ],
  },

  // ========>> ERROR/LOGIN ROUTES <<=======
]);

export default router;
