import { useParams } from "react-router-dom";
import { useAdminMovieDetailsQuery } from "../../../../redux/features/movies/movieApi";

const AdminMovieDetails = () => {
  const { id } = useParams();
  const { data: movieDetails } = useAdminMovieDetailsQuery(id);
  console.log(movieDetails);

  return <div>
    
    Movie Details
    
    </div>;
};

export default AdminMovieDetails;
