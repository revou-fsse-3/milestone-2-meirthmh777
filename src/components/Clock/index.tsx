import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

interface indexProps extends HTMLAttributes<HTMLParagraphElement> {
  timezone: number;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, timezone, ...resProps }) => {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getFormattedTime(timezone));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <p
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {currentTime}
    </p>
  );
};

export default index;
function getFormattedTime(timezone = 0) {
  const date = new Date();
  const unixTimezoneOffset = timezone;
  date.setUTCSeconds(date.getUTCSeconds() + unixTimezoneOffset);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  return `${hours % 12 || 12}:${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
}
