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
import FilterList from "../pages/movies/filter-list/FilterList";
import AddSeries from "../dashboard/dashboard/series/AddSeries";
import AddTags from "../dashboard/dashboard/movies/AddTags";
import AddGenre from "../dashboard/dashboard/movies/AddGenre";
import AddQuality from "../dashboard/dashboard/movies/AddQuality";
import AddYear from "../dashboard/dashboard/movies/AddYear";
import AddCast from "../dashboard/dashboard/movies/AddCast";
import AddDirector from "../dashboard/dashboard/movies/AddDirector";
import AddCreator from "../dashboard/dashboard/series/AddCreator";
import AddStudio from "../dashboard/dashboard/series/AddStudio";
import AddNetworks from "../dashboard/dashboard/series/AddNetworks";
import Seasons from "../dashboard/dashboard/series/Seasons";
import AddSeasons from "../dashboard/dashboard/series/AddSeason";
import Episode from "../dashboard/dashboard/series/Episode";
import AddEpisode from "../dashboard/dashboard/series/AddEpisode";

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
        path: "/filter-list",
        element: <FilterList />,
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

      // ================>> MOVIES ROUTES <<===============
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
        path: "/dashboard/add-tags",
        element: <AddTags />,
      },

      {
        path: "/dashboard/add-genre",
        element: <AddGenre />,
      },

      {
        path: "/dashboard/add-quality",
        element: <AddQuality />,
      },

      {
        path: "/dashboard/add-cast",
        element: <AddCast />,
      },

      {
        path: "/dashboard/add-director",
        element: <AddDirector />,
      },

      {
        path: "/dashboard/add-year",
        element: <AddYear />,
      },

      // ================>> TV SHOWS ROUTES <<===============
      {
        path: "/dashboard/db-series",
        element: <DbSeries />,
      },
      
      {
        path: "/dashboard/add-series",
        element: <AddSeries />,
      },

      {
        path: "/dashboard/add-creator",
        element: <AddCreator />,
      },

      {
        path: "/dashboard/add-studio",
        element: <AddStudio />,
      },

      {
        path: "/dashboard/add-networks",
        element: <AddNetworks />,
      },

      {
        path: "/dashboard/db-seasons",
        element: <Seasons />,
      },

      {
        path: "/dashboard/add-season",
        element: <AddSeasons />,
      },

      {
        path: "/dashboard/episode",
        element: <Episode />,
      },

      {
        path: "/dashboard/add-episode",
        element: <AddEpisode />,
      },


    ],
  },

  // ========>> ERROR/LOGIN ROUTES <<=======
]);

export default router;
