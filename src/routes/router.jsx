import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Dashboard from "../dashboard/dashboard/Dashboard";
import DashMain from "../layout/dashboard/DashMain";
import MoviesDB from "../dashboard/dashboard/movies/MoviesDB";
import DbSeries from "../dashboard/dashboard/series/DbSeries";
import AddCreator from "../dashboard/dashboard/series/AddCreator";
import AddStudio from "../dashboard/dashboard/series/AddStudio";
import AddNetworks from "../dashboard/dashboard/series/AddNetworks";
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
import PrivateRouter from "./PrivateRouter";
import Users from "../dashboard/users/Users";
import AdminMovieDetails from "../dashboard/dashboard/movies/movies/AdminMovieDetails";
import UserDetails from "../dashboard/users/UserDetails";
import AddAudio from "../dashboard/dashboard/movies/audio/AddAudio";
import AdminTvShowDetails from "../dashboard/dashboard/series/series/AdminTvShowDetails";
import AddSeries from "../dashboard/dashboard/series/series/AddSeries";
import UpdateTvShow from "../dashboard/dashboard/series/series/UpdateTvShow";
import Seasons from "../dashboard/dashboard/series/seasons/Seasons";
import AddSeasons from "../dashboard/dashboard/series/seasons/AddSeason";
import Episode from "../dashboard/dashboard/series/episode/Episode";
import AddEpisode from "../dashboard/dashboard/series/episode/AddEpisode";
import { clientRoutes } from "./clientRoutes";
import TrashList from "../dashboard/trash/trash/TrashList";
import SeasonTrash from "../dashboard/dashboard/series/seasons/SeasonTrash";
import EpisodeList from "../dashboard/dashboard/series/series/EpisodeList";

const router = createBrowserRouter([

  // ==========>> CLIENT ROUTES <<===========
  {
    path: "/",
    element: <Main />,
    children: clientRoutes
  },

  // ==========>> ADMIN ROUTES <<===========
  {
    path: "/admin/dashboard",
    element: (
      <PrivateRouter>
        <DashMain />
      </PrivateRouter>
    ),
    children: [

      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },

      {
        path: "/admin/dashboard/users",
        element: <Users />,
      },

      {
        path: "/admin/dashboard/users/:id",
        element: <UserDetails />,
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
        path: "/admin/dashboard/details/:id",
        element: <AdminMovieDetails />,
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
        path: "/admin/dashboard/add-audio",
        element: <AddAudio />,
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
        path: "/admin/dashboard/tvshow-details/:id",
        element: <AdminTvShowDetails />,
      },

      {
        path: "/admin/dashboard/add-series",
        element: <AddSeries />,
      },

      {
        path: "/admin/dashboard/update-tvShow/:id",
        element: <UpdateTvShow />,
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
        path: "/admin/dashboard/add-season/:id",
        element: <AddSeasons />,
      },

      {
        path: "/admin/dashboard/episode",
        element: <Episode />,
      },

      {
        path: "/admin/dashboard/episode-list/:id",
        element: <EpisodeList />,
      },

      {
        path: "/admin/dashboard/add-episode",
        element: <AddEpisode />,
      },

      {
        path: "/admin/dashboard/register",
        element: <Register />,
      },

      {
        path: "/admin/dashboard/trash",
        element: <TrashList />,
      },

      {
        path: "/admin/dashboard/season-trash",
        element: <SeasonTrash />,
      },

    ],
  },

  // ========>> ERROR/LOGIN ROUTES <<=======
  {
    path: "/admin/login",
    element: <Login />,
  },

]);

export default router;
