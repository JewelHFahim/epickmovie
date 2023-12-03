import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import MovieDetails from "../pages/movies/movie-details/MovieDetails";
import Category from "../pages/movies/category/Category";
import SearchList from "../pages/movies/search-list/SearchList";
import NotFound from "../pages/not-found/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/movie/:id",
        element: <MovieDetails />,
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
]);

export default router;
