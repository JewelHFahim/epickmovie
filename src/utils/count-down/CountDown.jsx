import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <span className="font-medium">Try After- {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

const RetryCountDown = () => (
  <Countdown date={Date.now() + 5000} renderer={renderer} />
);

export default RetryCountDown;
