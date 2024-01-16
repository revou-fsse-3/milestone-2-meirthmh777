// import CurrentWeather from "@components/Weather";
// import Forecast from "@components/Forecast";
// import FetchForecast, { GetForecastProps } from "@libs/api/GetForecast";
// import FetchWeather, { GetWeatherProps } from "@libs/api/GetWeather";
import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  // ChangeEvent,
  // useState,
  Fragment,
} from "react";
// import Button, { ButtonTypes } from "../../common/Button";
import { Outlet } from "react-router-dom";
import WeatherForm from "@components/WeatherForm";
interface AppProps extends HTMLAttributes<HTMLDivElement> {}
type AppComponents = FC<AppProps> & PropsWithChildren;
const App: AppComponents = () => {
  // const [currentWeather, setCurrentWeather] = useState<GetWeatherProps | null>(
  //   null
  // );
  // const [error, setError] = useState<Error | null>(null);
  // const [forecast, setForecast] = useState<GetForecastProps | null>(null);
  // const [input, setInput] = useState("");
  // const handelChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInput(e.target.value);
  // };

  // const handelSearch = async () => {
  //   try {
  //     const resultWeather = await FetchWeather(input);
  //     const resultForecast = await FetchForecast(input);
  //     setCurrentWeather(resultWeather);
  //     setForecast(resultForecast);
  //   } catch (e) {
  //     let fetchError = new Error("failed to fetch");

  //     if (e instanceof Error) {
  //       fetchError = e;
  //     }
  //     setError(fetchError);
  //   }
  // };
  return (
    <Fragment>
      <WeatherForm />
      {/* <form>
        <label htmlFor="">
          <input
            className="my-10 text-xl border-2 m-2 p-1 rounded-lg"
            type="text"
            onChange={handelChangeInput}
            value={input}
            placeholder="Enter City"
          />
        </label>
        <Button
          onClick={handelSearch}
          ButtonType={ButtonTypes.FiveButton}
          className="font-bold p-2 text-xl rounded-lg"
        >
          Search
        </Button>
      </form> */}
      {/* {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}

      {error && <>{error.message} </>} */}
      <Outlet />
    </Fragment>
  );
};

export default App;
