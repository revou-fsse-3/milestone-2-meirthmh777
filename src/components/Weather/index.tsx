import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useState,
  useEffect,
} from "react";
import { GetWeatherProps } from "../../libs/api/GetWeather";
// import { format } from "path";

interface indexProps extends HTMLAttributes<HTMLDivElement> {
  data: GetWeatherProps;
}
type indexComponents = FC<indexProps> & PropsWithChildren;

// make timezone based on the city searched by users
const index: indexComponents = ({ children, data, ...resProps }) => {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  function getFormattedTime() {
    const date = new Date();
    const unixTimezoneOffset = data.timezone || 0;
    date.setUTCSeconds(date.getUTCSeconds() + unixTimezoneOffset);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    return `${hours % 12 || 12}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
  }

  // UTC timezone
  // const unixTimezone = data.timezone;
  // const date = new Date(unixTimezone*1000);
  // const
  return (
    <div
      {...resProps}
      className={`flex items-center justify-center${
        resProps.className ? resProps.className : ""
      }`}
    >
      <div className="flex bg-slate-700 text-white m-5 p-7 gap-10 rounded-lg max-w-lg">
        <div className="items-center justify-center ml-auto">
          <div className="items-center">
            <p className="text-3xl font-bold">{data.name}</p>
            <p className="text-3xl">{Math.round(data.main.temp)}°C</p>
            <p className="text-xl">{data.weather[0].description}</p>
          </div>
          <img
            alt="weather"
            className="h-36 w-36 mx-auto"
            src={`icons/${data.weather[0].icon}.png`}
          />
          <p className="text-3xl font-bold">{currentTime}</p>
        </div>
        <div className="text-xl table">
          <div className="table-row-group">
            <div className="table-row">
              <span className="table-cell">Feels like</span>
              <span className="table-cell">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell">Wind</span>
              <span className="table-cell">{data.wind.speed} m/s</span>
            </div>
            <div className="table-row">
              <span className="table-cell">Humidity</span>
              <span className="table-cell">{data.main.humidity}%</span>
            </div>
            <div className="table-row">
              <span className="table-cell">Pressure</span>
              <span className="table-cell">{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
