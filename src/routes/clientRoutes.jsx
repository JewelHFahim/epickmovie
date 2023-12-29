import AdminRedirect from "../components/admin-redirect/AdminRedirect";
import Home from "../pages/home/Home";
import BanglaMovie from "../pages/movies/bangla/BanglaMovie";
import Category from "../pages/movies/category/Category";
import FilterList from "../pages/movies/filter-list/FilterList";
import MovieDetails from "../pages/movies/movie-details/MovieDetails";
import Movies from "../pages/movies/movies/Movies";
import SearchList from "../pages/movies/search-list/SearchList";
import NotFound from "../pages/not-found/NotFound";
import TvShow from "../pages/tv-show/TvShow";
import TvShowDetails from "../pages/tv-show/tvShowDetails";

 
 export const clientRoutes = [
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
      path: "/bangla",
      element: <BanglaMovie />,
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
      path: "/filter-list",
      element: <FilterList />,
    },

    {
      path: "/admin",
      element: <AdminRedirect />,
    },

    {
      path: "/not-found",
      element: <NotFound />,
    },

  ]