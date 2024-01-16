import { FC, HTMLAttributes } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import FetchForecast, { GetForecastProps } from "@libs/api/GetForecast";
import FetchWeather, { GetWeatherProps } from "@libs/api/GetWeather";
import CurrentWeather from "@components/Weather";
import Forecast from "@components/Forecast";
import { Audio } from "react-loader-spinner";

type weatherResult = [GetWeatherProps, GetForecastProps];
async function fetchWeatherByCity(city: string): Promise<weatherResult> {
  try {
    const Weather = await FetchWeather(city);
    const Forecast = await FetchForecast(city);
    // setCurrentWeather(Weather);
    // setForecast(Forecast);
    return [Weather, Forecast];
  } catch (e) {
    throw Error("city not found");
  }
}

interface WeatherResultProps extends HTMLAttributes<HTMLDivElement> {}
type WeatherResultComponents = FC<WeatherResultProps>;
const WeatherResult: WeatherResultComponents = ({}) => {
  const [params] = useSearchParams();
  const city = params.get("city") || "";
  const { data, isLoading, error } = useQuery<weatherResult, Error>({
    queryKey: [`weather-${city}`],
    queryFn: () => fetchWeatherByCity(city),
  });
  // console.log(data);
  // console.log(city);

  return (
    <div className="font-bold text-2xl">
      {isLoading && (
        <div className="flex justify-center w-full py-8">
          <Audio
            height="80"
            width="80"
            color="blue"
            ariaLabel="three-dots-loading"
          />
        </div>
      )}
      {data && (
        <>
          <CurrentWeather data={data[0]} />
          <Forecast data={data[1]} />
        </>
      )}
      {error && <>Error {error.message}</>}
    </div>
  );
};

export default WeatherResult;
