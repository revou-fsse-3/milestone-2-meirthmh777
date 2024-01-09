import { FC, HTMLAttributes, PropsWithChildren } from "react";
import Fieldset from "../../common/FieldSet";
import WeatherInput from "../../common/Input/WeatherInput";
// import SearchInput from "../../common/Input/SearchInput";

interface WeatherProps extends HTMLAttributes<HTMLDivElement> {}
type WeatherComponents = FC<WeatherProps> & PropsWithChildren;
const Weather: WeatherComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {children}
      {/* <SearchInput></SearchInput> */}
      <WeatherInput></WeatherInput>
      <Fieldset legend="Current Weather"></Fieldset>
      <h1>For more details, you can go to Forecast page </h1>
    </div>
  );
};

export default Weather;
