import CurrentWeather from "@components/Weather";
import Forecast from "@components/Forecast";
import FetchForecast, { GetForecastProps } from "@libs/api/GetForecast";
import FetchWeather, { GetWeatherProps } from "@libs/api/GetWeather";
import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ChangeEvent,
  useState,
} from "react";
import Button, { ButtonTypes } from "../../common/Button";

interface AppProps extends HTMLAttributes<HTMLDivElement> {}
type AppComponents = FC<AppProps> & PropsWithChildren;
const App: AppComponents = ({ children, ...resProps }) => {
  const [currentWeather, setCurrentWeather] = useState<GetWeatherProps | null>(
    null
  );
  const [forecast, setForecast] = useState<GetForecastProps | null>(null);
  const [input, setInput] = useState("");
  const handelChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handelSearch = async () => {
    const resultWeather = await FetchWeather(input);
    const resultForecast = await FetchForecast(input);
    setCurrentWeather(resultWeather);
    setForecast(resultForecast);
  };
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <input
        className="my-10 text-xl border-2 m-2 p-1 rounded-lg"
        type="text"
        onChange={handelChangeInput}
        value={input}
        placeholder="Enter City"
      />
      <Button
        onClick={handelSearch}
        ButtonType={ButtonTypes.FiveButton}
        className="font-bold p-2 text-xl rounded-lg"
      >
        Search
      </Button>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
};

export default App;
