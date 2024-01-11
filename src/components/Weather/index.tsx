import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { GetWeatherProps } from "../../libs/api/GetWeather";
// import "./index.css";

interface indexProps extends HTMLAttributes<HTMLDivElement> {
  data: GetWeatherProps;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, data, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`flex items-center justify-center${
        resProps.className ? resProps.className : ""
      }`}
    >
      <div className="flex bg-slate-800 text-white m-5 p-7 gap-10 rounded-lg max-w-lg">
        <div className="items-center">
          <div>
            <p className="text-3xl font-bold">{data.name}</p>
            <p className="text-3xl">{Math.round(data.main.temp)}°C</p>
            <p className="text-xl">{data.weather[0].description}</p>
          </div>
          <img
            alt="weather"
            className="h-36 w-36"
            src={`icons/${data.weather[0].icon}.png`}
          />
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
