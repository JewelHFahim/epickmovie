import { Link } from "react-router-dom";
import "./ChannelCard.css"

const ChannelCard = () => {
  return (
    <Link
      to={`/tv/streaming/star-sports`}
      className="w-[200px] h-[320px] rounded-[10px] border overflow-hidden relative cardContainer"
    >
      <img
        src="https://s3-alpha-sig.figma.com/img/66d1/de44/b16bb7cc63abe9c8a34d5e963513dbea?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFAWspx3DOkDWYYgT4Cdn8sRZQ8hnK50wxPBSXS4yxkLjJhhuFqgUakUwzAWszDJw4ImugvdcNyTQZHqs4CflC53kU6M7oY2EehEJhkBUSb8BXJtR-ivJbcJhvybZ1G3JVHBQFAIb6V~Antc08xvSJ27lgw62lx5nucs3Qn-bI3UfeEHbcH9gLAnbmGyrhkKFkOK1iJLCThyIYkONPF-VgQk3E8PkFXRE5yx1cDdqOpklYxTrDKwMKEOUfYgeKgLIDv6~twaDn2IR6q7DWgGQ0~E7gY4RRDIA6fAP5mM4Q4CznRYoLzhThCf8JYmbyA4Lf7mrVucEjuAQ5uRIO9ppg__"
        alt=""
        className="w-full h-full rounded-[10px]"
      />

      <div className="absolute z-20 bottom-3 px-3">
        <p className="text-center text-white font-bold text-[13px]">
          Download Captain Miller (2024) Hindi WEB-DL 480p, 720p & 1080p |
          Gdrive
        </p>
      </div>

      <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-t from-gray-600 from-5%  to-transparent to-60% "></div>
    </Link>
  );
};

export default ChannelCard;
