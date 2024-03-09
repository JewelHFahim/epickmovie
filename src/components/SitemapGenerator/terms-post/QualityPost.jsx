import {
  usePixelQualityClientQuery,
  usePrintQualityClientQuery,
} from "../../../redux/features/movies/movieApi";
import TermPost from "./TermPost";

const QualityPost = () => {
  const { data: pixelQualityList } = usePixelQualityClientQuery();
  const { data: printQualityList } = usePrintQualityClientQuery();

  const pixel = pixelQualityList?.data;
  const print = printQualityList?.data;
  const combinedQuality = pixel?.concat(print);

  return <div>
          <TermPost termUrl={combinedQuality} />

  </div>;
};

export default QualityPost;
