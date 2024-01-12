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
// make timezone based on the city searched by users
const index: indexComponents = ({ children, data, ...resProps }) => {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getFormattedTime(data.timezone));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  // function getFormattedTime() {
  //   const date = new Date();
  //   const unixTimezoneOffset = data.timezone || 0;
  //   date.setUTCSeconds(date.getUTCSeconds() + unixTimezoneOffset);
  //   const hours = date.getUTCHours();
  //   const minutes = date.getUTCMinutes();
  //   const seconds = date.getUTCSeconds();
  //   return `${hours % 12 || 12}:${String(minutes).padStart(2, "0")}:${String(
  //     seconds
  //   ).padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
  // }

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
      <div className="flex justify-center bg-slate-700 text-white m-5 p-7 gap-16 rounded-lg  lg:w-6/12">
        <div className="flex-[1]">
          <div>
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
        <div className="lg:pt-10 text-lg lg:text-2xl flex-[2] flex flex-col gap-8 lg:px-8 ">
          <div className="flex flex-col lg:flex-row justify-between">
            <span className="">Feels like :</span>
            <span className="">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <span className="">Wind :</span>
            <span className="">{data.wind.speed} m/s</span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <span className="">Humidity :</span>
            <span className="">{data.main.humidity}%</span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <span className="">Pressure :</span>
            <span className="">{data.main.pressure} hPa</span>
          </div>
        </div>
        {/* <div className="text-xl table">
          <div className="table-row-group">
            <div className="table-row">
              <span className="">Feels like</span>
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
        </div> */}
      </div>
    </div>
  );
};

export default index;
