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
import MoviesDB from "../dashboard/dashboard/movies/MoviesDB";
import DbSeries from "../dashboard/dashboard/series/DbSeries";
import FilterList from "../pages/movies/filter-list/FilterList";
import AddSeries from "../dashboard/dashboard/series/AddSeries";
import AddCreator from "../dashboard/dashboard/series/AddCreator";
import AddStudio from "../dashboard/dashboard/series/AddStudio";
import AddNetworks from "../dashboard/dashboard/series/AddNetworks";
import Seasons from "../dashboard/dashboard/series/Seasons";
import AddSeasons from "../dashboard/dashboard/series/AddSeason";
import Episode from "../dashboard/dashboard/series/Episode";
import AddEpisode from "../dashboard/dashboard/series/AddEpisode";
import DbMovies from "../dashboard/db-movies/DbMovies";
import AddCast from "../dashboard/dashboard/movies/cast/AddCast";
import AddMovies from "../dashboard/dashboard/movies/movies/AddMovies";
import AddTags from "../dashboard/dashboard/movies/tags/AddTags";
import AddGenre from "../dashboard/dashboard/movies/genre/AddGenre";
import AddQuality from "../dashboard/dashboard/movies/quality/AddQuality";
import AddDirector from "../dashboard/dashboard/movies/director/AddDirector";
import AddYear from "../dashboard/dashboard/movies/year/AddYear";
import EditMovies from "../dashboard/dashboard/movies/movies/EditMovies";
import Login from "../dashboard/authentication/login/Login";
import Register from "../dashboard/authentication/register/Register";

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
    path: "/admin/dashboard",
    element: <DashMain />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },

      // ================>> MOVIES ROUTES <<===============
      {
        path: "/admin/dashboard/db-movies",
        element: <DbMovies />,
      },

      {
        path: "/admin/dashboard/movies-db",
        element: <MoviesDB />,
      },

      {
        path: "/admin/dashboard/add-movie",
        element: <AddMovies />,
      },

      {
        path: "/admin/dashboard/edit-movie/:id",
        element: <EditMovies />,
      },

      {
        path: "/admin/dashboard/add-tags",
        element: <AddTags />,
      },

      {
        path: "/admin/dashboard/add-genre",
        element: <AddGenre />,
      },

      {
        path: "/admin/dashboard/add-quality",
        element: <AddQuality />,
      },

      {
        path: "/admin/dashboard/add-cast",
        element: <AddCast />,
      },

      {
        path: "/admin/dashboard/add-director",
        element: <AddDirector />,
      },

      {
        path: "/admin/dashboard/add-year",
        element: <AddYear />,
      },

      // ================>> TV SHOWS ROUTES <<===============
      {
        path: "/admin/dashboard/db-series",
        element: <DbSeries />,
      },

      {
        path: "/admin/dashboard/add-series",
        element: <AddSeries />,
      },

      {
        path: "/admin/dashboard/add-creator",
        element: <AddCreator />,
      },

      {
        path: "/admin/dashboard/add-studio",
        element: <AddStudio />,
      },

      {
        path: "/admin/dashboard/add-networks",
        element: <AddNetworks />,
      },

      {
        path: "/admin/dashboard/db-seasons",
        element: <Seasons />,
      },

      {
        path: "/admin/dashboard/add-season",
        element: <AddSeasons />,
      },

      {
        path: "/admin/dashboard/episode",
        element: <Episode />,
      },

      {
        path: "/admin/dashboard/add-episode",
        element: <AddEpisode />,
      },
    ],
  },

  // ========>> ERROR/LOGIN ROUTES <<=======
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/admin/register",
    element: <Register />,
  },
]);

export default router;
