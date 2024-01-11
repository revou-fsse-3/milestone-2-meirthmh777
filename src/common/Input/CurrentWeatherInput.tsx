import _React, { FC, HTMLAttributes, useState } from "react";
// import icons from "../../../public/icons/01d.png";
import SearchCurrentWeather from "./SearchCurrentWeather";

interface WeatherInputProps extends HTMLAttributes<HTMLDivElement> {}
interface WeatherData {
  city: string;
  temperature: number;
  weatherCondition: string;
  windSpeed: number;
  humidity: number;
  pressure: number;
  feelsLike: number;
  seaLevel: number;
}
type WeatherInputComponents = FC<WeatherInputProps>;

const WeatherInput: WeatherInputComponents = ({ ...resProps }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleSearchChange = async (weatherData: WeatherData) => {
    setWeatherData(weatherData);
  };

  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <SearchCurrentWeather onSearchChange={handleSearchChange} />
      <div className="bg-slate-200 md:box-content text-lg m-auto justify-center items-center flex gap-16 max-w-fit p-5">
        <div className="flex items-center gap-10">
          {/* <img src={icons} className="h-70 w-70" alt="Weather icon" /> */}
          {weatherData && (
            <div className="text-center">
              <p>{weatherData.city}</p>
              <p>{weatherData.temperature}°C</p>
              <p className="text-sm">{weatherData.weatherCondition}</p>
            </div>
          )}
        </div>
        <div className="items-center">
          {weatherData && (
            <>
              <div>
                <span className="text-left">Wind</span>
                <span className="ml-3">{weatherData.windSpeed} m/s</span>
              </div>
              <div>
                <span>Humidity</span>
                <span className="ml-3">{weatherData.humidity}%</span>
              </div>
              <div>
                <span>Pressure</span>
                <span className="ml-3">{weatherData.pressure} hPa</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherInput;
