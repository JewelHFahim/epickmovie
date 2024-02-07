import AdminRedirect from "../components/admin-redirect/AdminRedirect";
import Home from "../pages/home/Home";
import BanglaMovie from "../pages/movies/bangla/BanglaMovie";
import FilterList from "../pages/movies/filter-list/FilterList";
import MovieDetails from "../pages/movies/movie-details/MovieDetails";
import Movies from "../pages/movies/movies/Movies";
import SearchList from "../pages/movies/search-list/SearchList";
import NotFound from "../pages/not-found/NotFound";
import TvShow from "../pages/tv-show/TvShow";
import TvShowDetails from "../pages/tv-show/tvShowDetails";
import VideoPlayer from "../pages/video-player/VideoPlayer";
import DashboardRedirect from "../utils/DashboardRedirect";

export const clientRoutes = [
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
    path: "/movie/:id/:title",
    element: <MovieDetails />,
  },

  {
    path: "/series/:id/:title",
    element: <TvShowDetails />,
  },


  {
    path: "/search-list",
    element: <SearchList />,
  },

  // {
  //   path: "/filter-list/",
  //   element: <FilterList />,
  // },
  
  {
    path: "/sp-terms/:string",
    element: <FilterList />,
  },

  {
    path: "/admin",
    element: <AdminRedirect />,
  },

  {
    path: "/dashboard",
    element: <DashboardRedirect />,
  },

  {
    path: "/video-player",
    element: <VideoPlayer />,
  },

  {
    path: "/not-found",
    element: <NotFound />,
  },
];
